"use client"

import "./globals.css";
import { Inter } from "next/font/google";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box, Container, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const DrawerContext = React.createContext();

export default function RootLayout({ children }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const mdOrLarge = useMediaQuery("(min-width:600px)");
  return (
    <html lang="en">
      <htmlHead>
        <title>{"SkillSlash"}</title>
      </htmlHead>
      <body className={inter.className}>
        <DrawerContext.Provider value={{ drawerOpen, setDrawerOpen }}>
          <AppBar position="sticky">
            <Toolbar>
              {!mdOrLarge && (
                <IconButton onClick={()=>{
                  setDrawerOpen(true);
                }}>
                  <MenuIcon />
                </IconButton>
              )}
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                My Next App
              </Typography>
            </Toolbar>
          </AppBar>
          {children}
          <Footer />
        </DrawerContext.Provider>
      </body>
    </html>
  );
}

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "secondary.main",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              React Starter App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
