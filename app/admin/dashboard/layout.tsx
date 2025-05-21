"use client";
import { useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";
import { getCookie } from "cookies-next";
import { useRouter, usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/admin/dashboard")) {
      const token = getCookie("admin_token");
      if (!token) {
        router.replace("/admin");
      }
    }
  }, [pathname, router]);

  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  );
}
