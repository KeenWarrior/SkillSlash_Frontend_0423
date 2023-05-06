import "./page.css";
import MainBottomNavigation from "../MainBottomNavigation";
import Hotel from "../components/Hotel";
import { List } from "@mui/material";
import MainAppBar from "../MainAppBar";

export default function OrderPage() {
  let hotels = [
    {
      name: "Delhi Food Point",
      food: "North Indian",
      price: "₹200 for one",
      image:
        "https://b.zmtcdn.com/data/pictures/chains/9/50359/f4eeae975ddd5d41f7684be90fa5fca9.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      eta: "30 min",
      tracking: "Live tracking",
      rating: "4.2",
    },
    {
      name: "Delhi Food Point",
      food: "North Indian",
      price: "₹200 for one",
      image:
        "https://b.zmtcdn.com/data/pictures/chains/9/50359/f4eeae975ddd5d41f7684be90fa5fca9.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      eta: "30 min",
      tracking: "Live tracking",
      rating: "4.2",
    },
    {
      name: "Delhi Food Point",
      food: "North Indian",
      price: "₹200 for one",
      image:
        "https://b.zmtcdn.com/data/pictures/chains/9/50359/f4eeae975ddd5d41f7684be90fa5fca9.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      eta: "30 min",
      tracking: "Live tracking",
      rating: "4.2",
    },
    {
      name: "Delhi Food Point",
      food: "North Indian",
      price: "₹200 for one",
      image:
        "https://b.zmtcdn.com/data/pictures/chains/9/50359/f4eeae975ddd5d41f7684be90fa5fca9.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      eta: "30 min",
      tracking: "Live tracking",
      rating: "4.2",
    },
    {
      name: "Delhi Food Point",
      food: "North Indian",
      price: "₹200 for one",
      image:
        "https://b.zmtcdn.com/data/pictures/chains/9/50359/f4eeae975ddd5d41f7684be90fa5fca9.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      eta: "30 min",
      tracking: "Live tracking",
      rating: "4.2",
    },
    {
      name: "Delhi Food Point",
      food: "North Indian",
      price: "₹200 for one",
      image:
        "https://b.zmtcdn.com/data/pictures/chains/9/50359/f4eeae975ddd5d41f7684be90fa5fca9.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      eta: "30 min",
      tracking: "Live tracking",
      rating: "4.2",
    },
  ];

  return (
    <div className="orderPage">
      <MainAppBar/>
      <div className="content">
        <List 
          style={{
            hight: "inherit",
            overflow: "auto",
          }}
        >
          {hotels.map((hotel, index) => {
            return <Hotel {...hotel} key={index} />;
          })}
        </List>
      </div>
      <MainBottomNavigation />
    </div>
  );
}
