import { Sidebar } from "components/Sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <section>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </section>
  );
};
