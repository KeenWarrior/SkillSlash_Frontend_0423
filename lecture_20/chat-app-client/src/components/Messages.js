import { Button, List, ListItem, Toolbar, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import axios from "../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../BaseRoutes";
import SendMessage from "./SendMessage";
import { io } from "socket.io-client";

export default function Messages() {
  const { user } = useContext(UserContext);
  const [selectedPerson, setSelectedPerson] = React.useState(null);
  const dispath = useDispatch();
  const messages = useSelector((state) => state.messages);

  const [socket, setSocket] = React.useState(null);

  React.useEffect(() => {
    const sock = io("http://localhost:5000", {
      auth: {
        username: user.username,
      },
    });

    sock.on("connect", () => {});

    sock.on("message", (message) => {
      console.log(message);
      dispath({
        type: "ADD_MESSAGE",
        payload: {
          withPerson:
            message.from === user.username ? message.to : message.from,
          message: message,
        },
      });
    });
  });

  const refresh = () => {
    axios.get("chats").then((response) => {
      if (response.status === 200) {
        const data = response.data;

        data.forEach((message) => {
          dispath({
            type: "ADD_MESSAGE",
            payload: {
              withPerson:
                message.from === user.username ? message.to : message.from,
              message: message,
            },
          });
        });
      }
    });
  };

  useEffect(() => {
    console.log(user);
    refresh();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Button onClick={refresh}>Refresh</Button>
        {messages &&
          Array.from(messages.chats.keys()).map((person) => {
            return (
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  setSelectedPerson(person);
                }}
              >
                {person}
              </Button>
            );
          })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 2,
        }}
      >
        <Toolbar
          style={{
            backgroundColor: "lightgray",
          }}
        >
          <Typography variant="h6">{selectedPerson}</Typography>
        </Toolbar>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: "0px",
            overflowY: "scroll",
            flexWrap: "nowrap",
          }}
        >
          {messages &&
            Array.from(messages.chats.get(selectedPerson) || []).map(
              (message) => {
                return (
                  <ListItem
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignSelf:
                        message.from === user.username
                          ? "flex-end"
                          : "flex-start",
                      alignItems: "flex-start",
                      width: "fit-content",
                      padding: "4px",
                      margin: "4px",
                      border: "1px solid black",
                      borderRadius: "10px",
                    }}
                  >
                    <Typography
                      variant="body1"
                      style={{
                        textAlign: "left",
                      }}
                    >
                      {message.message}{" "}
                    </Typography>
                    <Typography variant="caption" style={{}}>
                      {new Date(message.createdAt).toLocaleTimeString(
                        navigator.language,
                        { hour: "2-digit", minute: "2-digit" }
                      )}
                    </Typography>
                  </ListItem>
                );
              }
            )}
        </div>

        <SendMessage to={selectedPerson} />
      </div>
    </div>
  );
}
