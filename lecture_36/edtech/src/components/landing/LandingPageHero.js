import { Box, Button, IconButton, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export default function LandingPageHero({ heroSlides }) {
  return (
    <Carousel
      PrevIcon={
        <IconButton>
          <KeyboardArrowLeftIcon />
        </IconButton>
      }
      NextIcon={
        <IconButton>
          <KeyboardArrowRightIcon />
        </IconButton>
      }
      navButtonsAlwaysInvisible={true}
      animation="slide"
      autoPlay={true}
      sx={{
        width: "100vw",
      }}
    >
      {heroSlides.map((slide, i) => (
        <Item key={i} item={slide} />
      ))}
    </Carousel>
  );
}

const Item = ({ item }) => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        backgroundImage: `url(${item.bgImage})`,
        height: "400px",
        justifyContent: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          padding: "20px",
          gap: "10px",
          marginLeft: "100px",
          backgroundColor: "white",
        }}
      >
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        {item.cta && (
          <Button
            variant="contained"
            style={{
              width: "150px",
              backgroundColor: "black",
              textTransform: "none",
            }}
          >
            <Typography
              style={{
                color: "white",
              }}
            >
              {item.cta.label}
            </Typography>
          </Button>
        )}
      </Box>
    </Box>
  );
};
