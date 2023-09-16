"use client";

import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import axios from "@/utils/axios";
import { deleteCookie, getCookie } from "cookies-next";
const { useRouter } = require("next/navigation");

export default function TopAppBar() {
  const router = useRouter();

  const handleLogout = async () => {
    console.log(getCookie("refresh_token"));

    const response = await axios.post(
      "http://localhost:8000/v1/auth/logout",
      {
        refreshToken: getCookie("refresh_token"),
      },
      {
        headers: {
          Authorization: `Bearer ${getCookie("access_token")}`,
        },
      }
    );

    if (response.status === 204) {
      deleteCookie("access_token");
      deleteCookie("refresh_token");
      router.push("/login");
    }
  };

  return (
    <AppBar variant="sticky">
      <Toolbar
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <Typography
          style={{
            flexGrow: 1,
          }}
        >
          App Bar
        </Typography>
        <Button variant="contained" color="primary" onClick={handleLogout}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
