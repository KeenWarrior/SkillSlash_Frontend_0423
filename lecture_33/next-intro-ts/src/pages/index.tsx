import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <h1>Home page</h1>
      <a href="/blogs/1">Go to blog 1</a>
      <Link href="/blogs/1">
        <button>Go to blog 1</button>
      </Link>
      <button
        onClick={() => {
          router.back();
        }}
      >
        Back
      </button>

      <button
        onClick={() => {
          router.replace("/blogs/1");
        }}
      >
        Replace to Blog 1
      </button>
    </div>
  );
}
