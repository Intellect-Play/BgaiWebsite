"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Link from "@tiptap/extension-link";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import FontSize from "@tiptap/extension-font-size";

import "./jobsPanel.scss";

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

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Link,
      TextStyle,
      Color,
      FontSize,
    ],
    content: form.description,
    onUpdate({ editor }) {
      const html = editor.getHTML();
      setForm((prev) => ({ ...prev, description: html }));
    },
  });

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3001/api/bgaiv1/jobs", {
        params: { search, page, limit },
      });
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
    editor?.commands.setContent("");
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
    setImagePreview(job.image ? `http://localhost:3001${job.image}` : null);
    editor?.commands.setContent(job.description);
  };

  const handleDelete = async (id: string | undefined) => {
    if (!id) return;
    if (window.confirm("Are you sure to delete?")) {
      await axios.delete(`http://localhost:3001/api/bgaiv1/jobs/${id}`);
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
      await axios.post("http://localhost:3001/api/bgaiv1/jobs", formData);
    }
    if (modalMode === "edit" && editId) {
      await axios.put(
        `http://localhost:3001/api/bgaiv1/jobs/${editId}`,
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

  const renderToolbar = () => (
    <div className="tiptap-toolbar flex gap-[20px]">
      <button
        type="button"
        onClick={() => editor?.chain().focus().toggleBold().run()}
      >
        Bold
      </button>
      <button
        type="button"
        onClick={() => editor?.chain().focus().toggleUnderline().run()}
      >
        Underline
      </button>
      <button
        type="button"
        onClick={() => editor?.chain().focus().setColor("#f43f5e").run()}
      >
        Red
      </button>

      <select
        onChange={(e) =>
          editor?.chain().focus().setFontSize(e.target.value).run()
        }
      >
        <option value="">Font Size</option>
        <option value="14px">14</option>
        <option value="16px">16</option>
        <option value="18px">18</option>
        <option value="24px">24</option>
        <option value="32px">32</option>
      </select>
    </div>
  );

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
                            : `http://localhost:3001${job.image}`
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
                  {editor && (
                    <>
                      {renderToolbar()}
                      <EditorContent editor={editor} className="tiptap" />
                    </>
                  )}
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
