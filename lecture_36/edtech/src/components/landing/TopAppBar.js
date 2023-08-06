import { AppBar, Toolbar } from "@mui/material";
import Image from "next/image";

export default function TopAppBar() {
  return (
    <AppBar
      position="sticky"
      style={{
        backgroundColor: "white",
      }}
    >
      <Toolbar>
        <Image
          src={"https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"}
          width={100}
          height={50}
        />
      </Toolbar>
    </AppBar>
  );
}
