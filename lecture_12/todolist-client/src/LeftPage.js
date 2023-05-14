import { Button, Switch, TextField, ToggleButton } from "@mui/material";
import axios from "./axios";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function LeftPage({
  createOrUpdatetodo,
  setCreateOrUpdatetodo,
  formData,
  setFormData,
}) {
  let handleChange = (event) => {
    console.log(event.target.value);
    formData[event.target.name] = event.target.value;
    setFormData({ ...formData });
  };

  let handleChangeSwitch = (event) => {
    console.log(event.target.checked);
    formData[event.target.name] = event.target.checked;
    setFormData({ ...formData });
  };

  let handleChangeDate = (newValue) => {
    console.log(newValue);
    formData["complete_by"] = newValue;
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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]}>
          <DatePicker
            label="Basic date picker"
            onChange={handleChangeDate}
            value={formData.complete_by}
            name="complete_by"
          />
        </DemoContainer>
      </LocalizationProvider>
      {/* <TextField
        label="Complete By"
        value={formData.complete_by}
        name="complete_by"
        onChange={handleChange}
      /> */}
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
              complete_by: "",
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
