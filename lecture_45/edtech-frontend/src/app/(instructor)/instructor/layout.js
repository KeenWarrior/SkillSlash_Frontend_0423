import TopAppBar from "@/components/TopAppBar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default function MentorLayout({ children }) {
  const cookieStore = cookies();
  const access_cookie = cookieStore.get("access_token");
  const refress_cookie = cookieStore.get("refresh_token");

  if (!access_cookie || !refress_cookie) {
    return redirect("/login");
  }

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <TopAppBar />
      </Suspense>
      {children}
    </div>
  );
}
