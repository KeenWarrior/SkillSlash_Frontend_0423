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
        margin: "16px",
      }}
    >
      <TextField
        style={{
            flexGrow: 1,
            marginRight: "10px",
        }}
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
                setMessage("");
              }
            });
        }}
      >
        Send
      </Button>
    </div>
  );
}
