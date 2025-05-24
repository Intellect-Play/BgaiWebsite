"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

import "./projectsPanel.scss";
import Tiptap from "../RteEditor";

interface Project {
  _id?: string;
  title: string;
  description: string;
  image?: string;
  createdAt: string;
}

export default function ProjectsPanel() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [modalMode, setModalMode] = useState<"add" | "edit" | "">("");
  const [form, setForm] = useState<Omit<Project, "_id">>({
    title: "",
    description: "",
    image: "",
    createdAt: "",
  });
  const [editId, setEditId] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/bgaiv1/projects`,
        {
          params: { search, page, limit },
        }
      );
      setProjects(res.data.projects);
      setTotalPages(res.data.totalPages);
    } catch {
      setProjects([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, [search, page]);

  const handleAdd = () => {
    setModalMode("add");
    setForm({ title: "", description: "", image: "", createdAt: "" });
    setEditId(null);
    setImageFile(null);
    setImagePreview(null);
  };

  const handleEdit = (project: Project) => {
    setModalMode("edit");
    setForm({
      title: project.title,
      description: project.description,
      image: project.image || "",
      createdAt: project.createdAt.slice(0, 10),
    });
    setEditId(project._id!);
    setImagePreview(
      project.image
        ? `${process.env.NEXT_PUBLIC_API_URL}${project.image}`
        : null
    );
  };

  const handleDelete = async (id: string | undefined) => {
    if (!id) return;
    if (window.confirm("Are you sure to delete?")) {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/api/bgaiv1/projects/${id}`
      );
      fetchProjects();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (modalMode === "add" && !imageFile) return alert("Select an image");

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("createdAt", form.createdAt);
    if (imageFile) formData.append("image", imageFile);

    if (modalMode === "add") {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/bgaiv1/projects`,
        formData
      );
    }
    if (modalMode === "edit" && editId) {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/bgaiv1/projects/${editId}`,
        formData
      );
    }
    setModalMode("");
    fetchProjects();
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
      <div className="projects-table-wrapper">
        <h1>Projects List</h1>
        <div className="projects-table-actions">
          <button className="projects-add-btn" onClick={handleAdd}>
            + Add Project
          </button>
          <input
            className="projects-table-search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search by title..."
          />
        </div>

        <div className="projects-table-scroll desktop-table">
          <table className="projects-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Created At</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={4}>Loading...</td>
                </tr>
              ) : projects.length === 0 ? (
                <tr>
                  <td colSpan={4}>No projects found.</td>
                </tr>
              ) : (
                projects.map((project) => (
                  <tr key={project._id}>
                    <td>{project.title}</td>
                    <td>{new Date(project.createdAt).toLocaleDateString()}</td>
                    <td>
                      <img
                        src={
                          project.image?.startsWith("http")
                            ? project.image
                            : `${process.env.NEXT_PUBLIC_API_URL}${project.image}`
                        }
                        alt={project.title}
                        className="projects-table-img"
                      />
                    </td>
                    <td>
                      <button
                        className="projects-action-btn edit"
                        onClick={() => handleEdit(project)}
                      >
                        Edit
                      </button>
                      <button
                        className="projects-action-btn delete"
                        onClick={() => handleDelete(project._id)}
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

        <div className="projects-list-cards">
          {projects.map((project) => (
            <div className="project-card" key={project._id}>
              <div className="card-header">
                <h2>{project.title}</h2>
                <p>{new Date(project.createdAt).toLocaleDateString()}</p>
              </div>
              <img
                src={
                  project.image?.startsWith("http")
                    ? project.image
                    : `${process.env.NEXT_PUBLIC_API_URL}${project.image}`
                }
                alt={project.title}
                className="projects-table-img"
              />
              <div className="card-description">
                <div
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </div>
              <div className="card-actions">
                <button
                  className="projects-action-btn edit"
                  onClick={() => handleEdit(project)}
                >
                  Edit
                </button>
                <button
                  className="projects-action-btn delete"
                  onClick={() => handleDelete(project._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-table-pagination">
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
              <h2>{modalMode === "add" ? "Add Project" : "Edit Project"}</h2>
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
                  Created At:
                  <input
                    type="date"
                    value={form.createdAt}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, createdAt: e.target.value }))
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
                  className="projects-action-btn edit"
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
