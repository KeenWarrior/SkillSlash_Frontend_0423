import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import axios from "../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../BaseRoutes";
import SendMessage from "./SendMessage";

export default function Messages() {
  const { user } = useContext(UserContext);
  const [selectedPerson, setSelectedPerson] = React.useState(null);
  const dispath = useDispatch();
  const messages = useSelector((state) => state.messages);

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
    refresh();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
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
        {messages &&
          Array.from(messages.chats.get(selectedPerson) || []).map(
            (message) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    padding: "10px",
                    border: "1px solid black",
                    borderRadius: "10px",
                  }}
                >
                  <h4>{message.from}</h4>
                  <h4>{message.to}</h4>
                  <p>{message.message}</p>
                </div>
              );
            }
          )}
        <SendMessage to={selectedPerson} />
      </div>
    </div>
  );
}
