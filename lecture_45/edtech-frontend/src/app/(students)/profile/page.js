import { getUser } from "@/utils/auth";
import { cookies } from "next/headers";

export default async function StudentProfile({ children }) {
  const cookieStore = cookies();
  const access_cookie = cookieStore.get("access_token");

  const user = await getUser(access_cookie.value);
  return (
    <div style={{
        marginTop: "50px",
    }}>
      <h1>Student Profile</h1>
      <p>Student name: {user.name}</p>
      <p>Student email: {user.email}</p>
    </div>
  );
}
