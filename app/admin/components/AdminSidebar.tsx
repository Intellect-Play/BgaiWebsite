"use client";
import React, { useState } from "react";
import Link from "next/link";
import "./AdminSidebar.scss";
import { deleteCookie } from "cookies-next/client";
import { useRouter } from "next/navigation";

const links = [
  { name: "Games", href: "/admin/dashboard/games" },
  { name: "Jobs", href: "/admin/dashboard/jobs" },
  { name: "Projects", href: "/admin/dashboard/projects" },
  { name: "How We Work", href: "/admin/dashboard/howwework" },
];

export default function AdminSidebar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie("admin_token");
    router.replace("/home");
  };

  const handleHome = () => {
    router.replace("/home");
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={() => setOpen(!open)}>
        {open ? "×" : "☰"}
      </button>
      <aside className={`admin-sidebar ${open ? "open" : ""}`}>
        <div className="admin-sidebar-title">Admin Panel</div>
        <nav className="admin-sidebar-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="admin-sidebar-link"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button className="admin-sidebar-home" onClick={handleHome}>
          Return Home
        </button>
        <button className="admin-sidebar-logout" onClick={handleLogout}>
          Logout
        </button>
      </aside>
      {open && (
        <div className="admin-sidebar-overlay" onClick={() => setOpen(false)} />
      )}
    </>
  );
}
