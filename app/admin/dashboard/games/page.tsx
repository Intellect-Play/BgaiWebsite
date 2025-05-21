"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GamesTable.scss";

type Game = {
  _id?: string;
  title: string;
  category: string;
  image?: string;
  appStoreLink: string;
  googlePlayLink: string;
};

export default function GamesPage() {
  const [games, setGames] = useState<Game[]>([]);
  const [modalMode, setModalMode] = useState<"add" | "edit" | "">("");
  const [form, setForm] = useState<Omit<Game, "_id">>({
    title: "",
    category: "",
    image: "",
    appStoreLink: "",
    googlePlayLink: "",
  });
  const [editId, setEditId] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(8);
  const [totalPages, setTotalPages] = useState(1);

  // GET games
  const fetchGames = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3001/api/bgaiv1/games", {
        params: { search, page, limit },
      });
      setGames(res.data.games);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      setGames([]);
      setTotalPages(1);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchGames();
  }, [search, page]);

  // Add modalı aç
  const handleAdd = () => {
    setModalMode("add");
    setForm({
      title: "",
      category: "",
      image: "",
      appStoreLink: "",
      googlePlayLink: "",
    });
    setEditId(null);
    setImageFile(null);
    setImagePreview(null);
  };

  // Edit modalı aç
  const handleEdit = (game: Game) => {
    setModalMode("edit");
    setForm({
      title: game.title,
      category: game.category,
      image: game.image || "",
      appStoreLink: game.appStoreLink,
      googlePlayLink: game.googlePlayLink,
    });
    setEditId(game._id!);
    setImageFile(null);
    setImagePreview(
      game.image
        ? game.image.startsWith("http")
          ? game.image
          : `http://localhost:3001${game.image}`
        : "/images/defaultGameImage.png"
    );
  };

  // Delete
  const handleDelete = async (id: string | undefined) => {
    if (!id) return;
    if (window.confirm("Silmek istediğine emin misin?")) {
      await axios.delete(`http://localhost:3001/api/bgaiv1/games/${id}`);
      fetchGames();
    }
  };

  // Modal submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("category", form.category);
    formData.append("appStoreLink", form.appStoreLink);
    formData.append("googlePlayLink", form.googlePlayLink);
    if (imageFile) {
      formData.append("image", imageFile);
    }

    if (modalMode === "add") {
      await axios.post("http://localhost:3001/api/bgaiv1/games", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    }
    if (modalMode === "edit" && editId) {
      await axios.put(
        `http://localhost:3001/api/bgaiv1/games/${editId}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
    }
    setModalMode("");
    setEditId(null);
    fetchGames();
  };

  // Image input değişirse
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
    <div className="games-table-wrapper">
      <h1>Games List</h1>
      <div className="games-table-actions">
        <button className="games-add-btn" onClick={handleAdd}>
          + Add Game
        </button>
        <input
          className="games-table-search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          placeholder="Search by title or category..."
        />
      </div>
      <div className="games-table-scroll">
        <table className="games-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Image</th>
              <th>App Store</th>
              <th>Google Play</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={6}>Loading...</td>
              </tr>
            ) : games.length === 0 ? (
              <tr>
                <td colSpan={6}>No games found.</td>
              </tr>
            ) : (
              games.map((game) => (
                <tr key={game._id}>
                  <td>{game.title}</td>
                  <td>{game.category}</td>
                  <td>
                    <img
                      src={
                        game.image?.startsWith("http")
                          ? game.image
                          : game.image
                          ? `http://localhost:3001${game.image}`
                          : "/images/defaultGameImage.png"
                      }
                      alt={game.title}
                      className="games-table-img"
                    />
                  </td>
                  <td>
                    <a
                      href={game.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      App Store
                    </a>
                  </td>
                  <td>
                    <a
                      href={game.googlePlayLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Play
                    </a>
                  </td>
                  <td>
                    <button
                      className="games-action-btn edit"
                      onClick={() => handleEdit(game)}
                    >
                      Edit
                    </button>
                    <button
                      className="games-action-btn delete"
                      onClick={() => handleDelete(game._id)}
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
      <div className="games-table-pagination">
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>
          {"<"}
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button disabled={page >= totalPages} onClick={() => setPage(page + 1)}>
          {">"}
        </button>
      </div>

      {/* Modal (Add/Edit) */}
      {modalMode && (
        <div className="modal-overlay" onClick={() => setModalMode("")}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setModalMode("")}
            >
              ×
            </button>
            <h2>{modalMode === "add" ? "Add Game" : "Edit Game"}</h2>
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
                Category:
                <input
                  type="text"
                  value={form.category}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, category: e.target.value }))
                  }
                  required
                />
              </label>
              <label>
                App Store Link:
                <input
                  type="text"
                  value={form.appStoreLink}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, appStoreLink: e.target.value }))
                  }
                  required
                />
              </label>
              <label>
                Google Play Link:
                <input
                  type="text"
                  value={form.googlePlayLink}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, googlePlayLink: e.target.value }))
                  }
                  required
                />
              </label>
              <label>
                Image:
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {(imagePreview || form.image) && (
                  <img
                    src={
                      imagePreview ||
                      (form.image && form.image.startsWith("http")
                        ? form.image
                        : form.image
                        ? `http://localhost:3001${form.image}`
                        : "/images/defaultGameImage.png")
                    }
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
                className="games-action-btn edit"
                style={{ marginTop: 14 }}
              >
                {modalMode === "add" ? "Add" : "Update"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
