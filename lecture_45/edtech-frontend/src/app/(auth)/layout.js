import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const getUser = async (accessToken) => {
  const response = await fetch("http://localhost:8000/v1/auth/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache : "no-cache"
  });

  const data = await response.json();
  return data;
};

export default function AuthLayout({ children }) {
  const cookieStore = cookies();
  const access_cookie = cookieStore.get("access_token");
  const refress_cookie = cookieStore.get("refresh_token");

  if (access_cookie && refress_cookie) {
    const accessToken = access_cookie.value;
    const user = getUser(accessToken);
    if (user) {
      if (user.role === "user") {
        return redirect("/profile");
      } else if (user.role === "instructor") {
        return redirect("/instructor/profile");
      }
    }
  }

  return children;
}
