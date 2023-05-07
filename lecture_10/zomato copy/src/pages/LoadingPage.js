import { Typography } from "@mui/material";

export default function LoadingPage() {
  return <div style={{
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  }}>
    <Typography variant="h1">Loading...</Typography>
  </div>;
}