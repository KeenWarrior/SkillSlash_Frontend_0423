import { Button, List, ListItem } from "@mui/material";

import { useEffect, useState } from "react";
import axios from "./axios";

export default function RightPage({
  createOrUpdatetodo,
  setCreateOrUpdatetodo,
  formData,
  setFormData,
}) {
  const [todos, setTodos] = useState([]);

  const getTodos = () => {
    axios.get("/todos").then((response) => {
      console.log(response.data);
      setTodos(response.data);
    });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="RightPage" style={{}}>
      <h1>Right Page</h1>
      <Button
        onClick={() => {
          getTodos();
        }}
      >
        Refresh
      </Button>
      <List>
        {todos.map((todo) => {
          return (
            <ListItem
              style={{
                display: "flex",
                flexDirection: "row",
                width: "400px",
                padding: "10px",
                border: "1px solid black",
                borderRadius: "5px",
              }}
              onClick={() => {
                setFormData({ ...todo });
                setCreateOrUpdatetodo("update");
              }}
            >
              <div style={{ flexGrow: 1 }}>
                <h3>{todo.title}</h3>
                <p>{todo.complet_by}</p>
              </div>

              <p>{"" + todo.completed}</p>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
