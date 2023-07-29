const { useRouter } = require("next/router");

export default function VarAgrs() {
  const router = useRouter();

  const { varargs } = router.query;

  console.log(varargs);

  return (
    <div>
      <h1>Blog page</h1>
      <button
        onClick={() => {
          router.push("/");
        }}
      >
        Go Home
      </button>

      <button
        onClick={() => {
          router.back();
        }}
      >
        Back
      </button>

      <button
        onClick={() => {
          router.replace("/");
        }}
      >
        Replace to home
      </button>
    </div>
  );
}
