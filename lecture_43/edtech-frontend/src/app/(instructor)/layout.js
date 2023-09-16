import { headers } from "next/headers";

export default async function InstructorLayout(context) {
  const headersList = headers();
  const authorizationToken = headersList.authorization;
  if (!authorizationToken) {
    return 
  } else {
    const response = await fetch("http://localhost:8000/v1/auth/me", {
      headers: {
        authorization: authorizationToken,
      },
    });
    const apiResponse = await response.json();
    if (!apiResponse.user) {
      context.res.writeHead(302, { Location: "/login" });
      context.res.end();
      return;
    } else {
      console.log("user", apiResponse.user);
    }
  }

  return context.children;
}
