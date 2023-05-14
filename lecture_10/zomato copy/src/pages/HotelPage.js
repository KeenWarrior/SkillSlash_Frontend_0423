import { useDispatch, useSelector } from "react-redux";
import "./hotel.css";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

function calculateTotal(cartItems) {
  let total = 0;

  for (let cartItem of cartItems.values()) {
    total += cartItem.dish.price * cartItem.count;
  }
  return total;
}

export default function HotelPage() {
  let cart = useSelector((state) => state.cart);

  console.log(cart);

  let dispatch = useDispatch();
  let navigate = useNavigate();
  const params = useParams();

  console.log(params);

  let dishes = [
    {
      id: 1,
      name: "Chicken Biryani",
      price: 150,
      image:
        "https://geekrobocook.com/wp-content/uploads/2021/05/Muradabadi-chicken-biryani-1200x900.jpg",
    },
    {
      id: 2,
      name: "Paneer Biryani",
      price: 200,
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/02/paneer-biryani-recipe.jpg",
    },
    {
      id: 3,
      name: "Paneer Biryani 2",
      price: 100,
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/02/paneer-biryani-recipe.jpg",
    },
    {
      id: 4,
      name: "Paneer Biryani 3",
      price: 400,
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/02/paneer-biryani-recipe.jpg",
    },
    {
      id: 5,
      name: "Paneer Biryani 4",
      price: 50,
      image:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/02/paneer-biryani-recipe.jpg",
    },
  ];

  return (
    <Box className="hotel">
      <List
        style={{
          width: "100vw",
        }}
      >
        {dishes.map((dish) => (
          <ListItem key={dish.id}>
            <Box className="dish">
              <Box className="left-dish">
                <Typography variant="h6">{dish.name}</Typography>
                <Typography variant="h6">{"₹" + dish.price}</Typography>
              </Box>
              <Box className="right-dish">
                {cart.cartItems.has(dish.id) ? (
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      onClick={() => {
                        dispatch({ type: "REMOVE_DISH", payload: dish });
                      }}
                    >
                      -
                    </Button>
                    <Typography>{cart.cartItems.get(dish.id).count}</Typography>
                    <Button
                      onClick={() => {
                        dispatch({ type: "ADD_DISH", payload: dish });
                      }}
                    >
                      +
                    </Button>
                  </Box>
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      dispatch({ type: "ADD_DISH", payload: dish });
                    }}
                  >
                    Add
                  </Button>
                )}
              </Box>
            </Box>
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">
        Cart Total : {calculateTotal(cart.cartItems)}
      </Typography>
      <Button
        onClick={() => {
          navigate("/checkout");
        }}
      >
        Checkout
      </Button>
    </Box>
  );
}
