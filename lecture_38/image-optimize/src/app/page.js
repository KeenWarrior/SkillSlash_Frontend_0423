import Image from "next/image";
import thor from "@/images/thor.jpeg";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        src={thor}
        width={100}
        style={{
          width: "100vw",
          height: "auto",
        }}
      />
      <h1>Welcome to my page</h1>
    </div>
  );
}
