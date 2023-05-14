import { Button, Switch, TextField, ToggleButton } from "@mui/material";
import { useState } from "react";
import axios from "./axios";

export default function LeftPage({
  createOrUpdatetodo,
  setCreateOrUpdatetodo,
  formData,
  setFormData,
}) {
  let handleChange = (event) => {
    formData[event.target.name] = event.target.value;
    setFormData({ ...formData });
  };

  let handleChangeSwitch = (event) => {
    console.log(event.target.checked);
    formData[event.target.name] = event.target.checked;
    setFormData({ ...formData });
  };

  return (
    <div
      className="LeftPage"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Left Page</h1>
      <TextField
        label="Title"
        value={formData.title}
        name="title"
        onChange={handleChange}
      />
      <TextField
        label="Complete By"
        value={formData.complet_by}
        name="complet_by"
        onChange={handleChange}
      />
      <Switch
        checked={formData.completed}
        name="completed"
        onChange={handleChangeSwitch}
      />

      {createOrUpdatetodo === "create" ? (
        <Button
          variant="contained"
          onClick={() => {
            axios.post("/todos", formData).then((response) => {
              console.log(response.data);
            });
          }}
        >
          Add Todo
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={() => {
            axios.put("/todos/" + formData._id, formData).then((response) => {
              console.log(response.data);
            });
          }}
        >
          Update
        </Button>
      )}

      {createOrUpdatetodo === "update" && (
        <Button
          onClick={() => {
            setCreateOrUpdatetodo("create");
            setFormData({
              title: "",
              complet_by: "",
              completed: false,
            });
          }}
        >
          Switch to Create Mode
        </Button>
      )}
    </div>
  );
}
