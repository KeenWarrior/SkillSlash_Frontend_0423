import Footer from "@/components/Footer";
import { AppBar, Toolbar } from "@mui/material";

export default function BaseLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <AppBar position="sticky">
        <Toolbar>
          <h1>Header</h1>
        </Toolbar>
      </AppBar>
      {children}
      <Footer />
    </div>
  );
}
