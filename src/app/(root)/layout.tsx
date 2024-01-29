import React from "react";
import UserDashboard from "@/app/components/UserDashboard";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main
        className=" p-10 bg-[#f9f9f9]
         "
      >
        <div>
          <UserDashboard />
          {children}
        </div>
      </main>
    </>
  );
}
