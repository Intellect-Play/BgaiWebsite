"use client";
import { useEffect } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import AdminSidebar from "../components/AdminSidebar";

const AdminDashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    const token = getCookie("admin_token");
    if (!token) {
      router.replace("/admin");
    }
  }, [router]);

  return (
    <>
      <AdminSidebar />
    </>
  );
};

export default AdminDashboardPage;
