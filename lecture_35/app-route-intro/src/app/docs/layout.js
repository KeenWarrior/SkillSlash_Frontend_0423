"use client";

import { Drawer, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import NestedList from "./NestedList";
import { DrawerContext } from "../layout";

export default function DocsLayout({ children }) {
  return (
    <div>
      <LeftDrawer />
      <div>{children}</div>
    </div>
  );
}

const LeftDrawer = () => {
  const mdOrLarge = useMediaQuery("(min-width:600px)");
  const { drawerOpen, setDrawerOpen } = React.useContext(DrawerContext);
  return (
    <Drawer
      open={drawerOpen}
      anchor="left"
      variant={mdOrLarge ? "permanent" : "temporary"}
    >
      <NestedList setDrawerOpen={setDrawerOpen}/>
    </Drawer>
  );
};
