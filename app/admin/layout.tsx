// /app/admin/layout.tsx
import { ReactNode } from "react";
import AdminSidebar from "./components/AdminSidebar";

type Props = {
  children: ReactNode;
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
