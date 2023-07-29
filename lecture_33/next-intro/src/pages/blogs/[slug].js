import { useRouter } from "next/router";

export default function BlogPage() {
  const router = useRouter();

  const { slug } = router.query;

  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Blog Page {slug}</h1>
    </div>
  );
}
