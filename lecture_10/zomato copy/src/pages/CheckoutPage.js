import "./hotel.css";

import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function CheckoutPage() {
  const { hotel, cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  let items = Array.from(cartItems.values());

  return (
    <div>
      <h1>Checkout Page</h1>
      <h2>{hotel.name}</h2>
      <List>
        {items.map((cartItem, index) => {
          return (
            <ListItem key={cartItem.dish.id}>
              <Box className="dish">
                <Box className="left-dish">
                  <Typography variant="h6">{cartItem.dish.name}</Typography>
                  <Typography variant="h6">
                    {"₹" + cartItem.dish.price}
                  </Typography>
                </Box>
                <Box className="right-dish">
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_DISH",
                          payload: cartItem.dish,
                        });
                      }}
                    >
                      -
                    </Button>
                    <Typography>{cartItem.count}</Typography>
                    <Button
                      onClick={() => {
                        dispatch({ type: "ADD_DISH", payload: cartItem.dish });
                      }}
                    >
                      +
                    </Button>
                  </Box>
                </Box>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
