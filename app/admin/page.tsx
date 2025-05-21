"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { setCookie, getCookie, deleteCookie } from "cookies-next/client";
import "./adminlogin.scss";
import { useRouter } from "next/navigation";

const AdminPage = () => {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const token = getCookie("admin_token");

  useEffect(() => {
    const token = getCookie("admin_token");
    if (token) {
      router.replace("/admin/dashboard");
    }
  }, [router]);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setError("");
    try {
      const res = await axios.post(
        "http://localhost:3001/api/bgaiv1/admin/login",
        {
          email,
          password,
        }
      );
      setCookie("admin_token", res.data.token, { maxAge: 60 * 60 * 2 });
      router.push("/admin/dashboard/games");
    } catch (err) {
      setError("Email or password is wrong!");
    }
  };

  return (
    <div className="admin-login-wrapper">
      <form className="admin-login-card" onSubmit={handleLogin}>
        <h2>Admin Girişi</h2>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="admin-input"
          required
        />
        <input
          type="password"
          placeholder="Admin Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="admin-input"
          required
        />
        <button type="submit" className="admin-login-btn">
          Giriş Yap
        </button>
        {error && <div className="admin-error">{error}</div>}
      </form>
    </div>
  );
};

export default AdminPage;
