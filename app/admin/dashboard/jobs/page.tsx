"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import "./jobsPanel.scss";
import Tiptap from "../RteEditor";

interface Job {
  _id?: string;
  title: string;
  description: string;
  image?: string;
  expireDate: string;
}

export default function JobsPanel() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [modalMode, setModalMode] = useState<"add" | "edit" | "">("");
  const [form, setForm] = useState<Omit<Job, "_id">>({
    title: "",
    description: "",
    image: "",
    expireDate: "",
  });
  const [editId, setEditId] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const [totalPages, setTotalPages] = useState(1);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/bgaiv1/jobs`,
        {
          params: { search, page, limit },
        }
      );
      setJobs(res.data.jobs);
      setTotalPages(res.data.totalPages);
    } catch {
      setJobs([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, [search, page]);

  const handleAdd = () => {
    setModalMode("add");
    setForm({ title: "", description: "", image: "", expireDate: "" });
    setEditId(null);
    setImageFile(null);
    setImagePreview(null);
  };

  const handleEdit = (job: Job) => {
    setModalMode("edit");
    setForm({
      title: job.title,
      description: job.description,
      image: job.image || "",
      expireDate: job.expireDate.slice(0, 10),
    });
    setEditId(job._id!);
    setImagePreview(
      job.image ? `${process.env.NEXT_PUBLIC_API_URL}${job.image}` : null
    );
  };

  const handleDelete = async (id: string | undefined) => {
    if (!id) return;
    if (window.confirm("Are you sure to delete?")) {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/bgaiv1/jobs/${id}`
      );
      fetchJobs();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (modalMode === "add" && !imageFile) return alert("Select an image");

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("expireDate", form.expireDate);
    if (imageFile) formData.append("image", imageFile);

    if (modalMode === "add") {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/bgaiv1/jobs`,
        formData
      );
    }
    if (modalMode === "edit" && editId) {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/bgaiv1/jobs/${editId}`,
        formData
      );
    }
    setModalMode("");
    fetchJobs();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImageFile(file || null);
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setImagePreview(ev.target?.result as string);
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  return (
    <div className="page-center">
      <div className="jobs-table-wrapper">
        <h1>Jobs List</h1>
        <div className="jobs-table-actions">
          <button className="jobs-add-btn" onClick={handleAdd}>
            + Add Job
          </button>
          <input
            className="jobs-table-search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search by title..."
          />
        </div>

        <div className="jobs-table-scroll desktop-table">
          <table className="jobs-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Expire Date</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={4}>Loading...</td>
                </tr>
              ) : jobs.length === 0 ? (
                <tr>
                  <td colSpan={4}>No jobs found.</td>
                </tr>
              ) : (
                jobs.map((job) => (
                  <tr key={job._id}>
                    <td>{job.title}</td>
                    <td>{new Date(job.expireDate).toLocaleDateString()}</td>
                    <td>
                      <img
                        src={
                          job.image?.startsWith("http")
                            ? job.image
                            : `${process.env.NEXT_PUBLIC_API_URL}${job.image}`
                        }
                        alt={job.title}
                        className="jobs-table-img"
                      />
                    </td>
                    <td>
                      <button
                        className="jobs-action-btn edit"
                        onClick={() => handleEdit(job)}
                      >
                        Edit
                      </button>
                      <button
                        className="jobs-action-btn delete"
                        onClick={() => handleDelete(job._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="jobs-list-cards">
          {jobs.map((job) => (
            <div className="job-card" key={job._id}>
              <div className="card-header">
                <h2>{job.title}</h2>
                <p>{new Date(job.expireDate).toLocaleDateString()}</p>
              </div>
              <img
                src={
                  job.image?.startsWith("http")
                    ? job.image
                    : `${process.env.NEXT_PUBLIC_API_URL}${job.image}`
                }
                alt={job.title}
                className="jobs-table-img"
              />
              <div className="card-description">
                <div dangerouslySetInnerHTML={{ __html: job.description }} />
              </div>
              <div className="card-actions">
                <button
                  className="jobs-action-btn edit"
                  onClick={() => handleEdit(job)}
                >
                  Edit
                </button>
                <button
                  className="jobs-action-btn delete"
                  onClick={() => handleDelete(job._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="jobs-table-pagination">
          <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
            {"<"}
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page >= totalPages}
            onClick={() => setPage(page + 1)}
          >
            {">"}
          </button>
        </div>

        {modalMode && (
          <div className="modal-overlay" onClick={() => setModalMode("")}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close-btn"
                onClick={() => setModalMode("")}
              >
                ×
              </button>
              <h2>{modalMode === "add" ? "Add Job" : "Edit Job"}</h2>
              <form onSubmit={handleSubmit} className="edit-form">
                <label>
                  Title:
                  <input
                    type="text"
                    value={form.title}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, title: e.target.value }))
                    }
                    required
                  />
                </label>

                <label>
                  Expire Date:
                  <input
                    type="date"
                    value={form.expireDate}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, expireDate: e.target.value }))
                    }
                    required
                  />
                </label>

                <label>
                  Description:
                  <Tiptap
                    content={form.description}
                    onChange={(value: string) =>
                      setForm((prev) => ({ ...prev, description: value }))
                    }
                  />
                </label>

                <label>
                  Image:
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="preview"
                      style={{
                        marginTop: 10,
                        borderRadius: 10,
                        width: 80,
                        height: 80,
                        objectFit: "cover",
                        border: "1.5px solid #e6e6ee",
                        background: "#f5f7fa",
                      }}
                    />
                  )}
                </label>

                <button
                  type="submit"
                  className="jobs-action-btn edit"
                  style={{ marginTop: 14 }}
                >
                  {modalMode === "add" ? "Add" : "Update"}
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
