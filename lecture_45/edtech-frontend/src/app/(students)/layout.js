import TopAppBar from "@/components/TopAppBar";
import { getUser } from "@/utils/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export const metadata = {
  title: "Student pages",
};

export default async function StudentsLayout({ children }) {
  const cookieStore = cookies();
  const access_cookie = cookieStore.get("access_token");
  const refress_cookie = cookieStore.get("refresh_token");

  if (!access_cookie || !refress_cookie) {
    return redirect("/login");
  }

  const user = await getUser(access_cookie.value);
  if (!user) {
    return redirect("/login");
  }

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <TopAppBar user={user}/>
      </Suspense>
      {children}
    </div>
  );
}
