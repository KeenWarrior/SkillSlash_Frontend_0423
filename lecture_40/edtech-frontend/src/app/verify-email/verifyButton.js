"use client";

import axios from "../../utils/axios";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import jwt from "jsonwebtoken";

export default function VerifyButton() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");
  const user = jwt.decode(token);

  if (!token) {
    return <div>Token not found</div>;
  }

  if (!user) {
    return <div>Invalid token</div>;
  }

  return (
    <div>
      {user.name && <h3>{"Hello " + user.name}</h3>}
      <button
        style={{
          width: "200px",
          height: "50px",
        }}
        onClick={async () => {
          try {
            const response = await axios.post(
              "/auth/verify-email?token=" + token
            );
            if (response.status === 200 && response.data.verified == true) {
              console.log("Verification successful");
              router.push("/verified");
            } else {
              console.log("Verification failed");
              alert("Verification failed");
            }
          } catch (error) {
            console.log("Verification failed");
            alert("Verification failed");
          }
        }}
      >
        Verify Email
      </button>
    </div>
  );
}
