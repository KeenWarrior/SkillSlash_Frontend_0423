import { Button, TextField } from "@mui/material";
import axios from "../utils/axios";
import React from "react";

export default function SendMessage({to}) {
  const [message, setMessage] = React.useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <TextField
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          axios
            .post("chats", {
              to,
              message: message,
            })
            .then((response) => {
              if (response.status === 201) {
                console.log("Message Sent");
              }
            });
        }}
      >
        Send
      </Button>
    </div>
  );
}
