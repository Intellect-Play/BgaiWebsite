"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./howWeWorkPanel.scss";
import Tiptap from "../RteEditor";
// aa
interface HowWeWorkItem {
  _id?: string;
  title: string;
  description: string;
  image?: string;
  createdAt: string;
}

export default function HowWeWorkPanel() {
  const [howWeWork, setHowWeWork] = useState<HowWeWorkItem[]>([]);
  const [modalMode, setModalMode] = useState<"add" | "edit" | "">("");
  const [form, setForm] = useState<Omit<HowWeWorkItem, "_id">>({
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
  const apiEndpoint = "api/bgaiv1/howweworks";

  const fetchHowWeWork = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/${apiEndpoint}`,
        { params: { search, page, limit } }
      );
      setHowWeWork(res.data.howWeWork);
      setTotalPages(res.data.totalPages);
    } catch {
      setHowWeWork([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchHowWeWork();
  }, [search, page]);

  const handleAdd = () => {
    setModalMode("add");
    setForm({ title: "", description: "", image: "", createdAt: "" });
    setEditId(null);
    setImageFile(null);
    setImagePreview(null);
  };

  const handleEdit = (item: HowWeWorkItem) => {
    setModalMode("edit");
    setForm({
      title: item.title,
      description: item.description,
      image: item.image || "",
      createdAt: item.createdAt.slice(0, 10),
    });
    setEditId(item._id!);
    setImagePreview(
      item.image ? `${process.env.NEXT_PUBLIC_API_URL}${item.image}` : null
    );
  };

  const handleDelete = async (id: string | undefined) => {
    if (!id) return;
    if (window.confirm("Are you sure to delete?")) {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/${apiEndpoint}/${id}`
      );
      fetchHowWeWork();
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
        `${process.env.NEXT_PUBLIC_API_URL}/${apiEndpoint}`,
        formData
      );
    }
    if (modalMode === "edit" && editId) {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/${apiEndpoint}/${editId}`,
        formData
      );
    }
    setModalMode("");
    fetchHowWeWork();
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
      <div className="howwework-table-wrapper">
        <h1>How We Work</h1>
        <div className="howwework-table-actions">
          <button className="howwework-add-btn" onClick={handleAdd}>
            + Add Step
          </button>
          <input
            className="howwework-table-search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            placeholder="Search by title..."
          />
        </div>

        <div className="howwework-table-scroll desktop-table">
          <table className="howwework-table">
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
              ) : howWeWork.length === 0 ? (
                <tr>
                  <td colSpan={4}>No items found.</td>
                </tr>
              ) : (
                howWeWork.map((item) => (
                  <tr key={item._id}>
                    <td>{item.title}</td>
                    <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                    <td>
                      <img
                        src={
                          item.image?.startsWith("http")
                            ? item.image
                            : `${process.env.NEXT_PUBLIC_API_URL}${item.image}`
                        }
                        alt={item.title}
                        className="howwework-table-img"
                      />
                    </td>
                    <td>
                      <button
                        className="howwework-action-btn edit"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="howwework-action-btn delete"
                        onClick={() => handleDelete(item._id)}
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

        <div className="howwework-list-cards">
          {howWeWork.map((item) => (
            <div className="howwework-card" key={item._id}>
              <div className="card-header">
                <h2>{item.title}</h2>
                <p>{new Date(item.createdAt).toLocaleDateString()}</p>
              </div>
              <img
                src={
                  item.image?.startsWith("http")
                    ? item.image
                    : `${process.env.NEXT_PUBLIC_API_URL}${item.image}`
                }
                alt={item.title}
                className="howwework-table-img"
              />
              <div className="card-actions">
                <button
                  className="howwework-action-btn edit"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="howwework-action-btn delete"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="howwework-table-pagination">
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
              <h2>{modalMode === "add" ? "Add Step" : "Edit Step"}</h2>
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
                  className="howwework-action-btn edit"
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
