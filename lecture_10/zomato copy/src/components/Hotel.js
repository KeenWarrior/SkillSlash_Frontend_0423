import { Divider, Typography } from "@mui/material";

export default function Hotel({
  name,
  food,
  price,
  image,
  eta,
  tracking,
  rating,
}) {
  return (
    <div
      className="hotel"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: "16px",
        margin: "16px",
        borderRadius: "16px",
        border: "1px solid #ccc",
        width: "50vw"
      }}
    >
      <img src={image} style={{
        width: "150px",
        height: "100px",
        marginRight: "16px",
        borderRadius: "8px",
      }}/>
      <div
        className="hotelInfo"
        style={{
          display: "flex",
          flexGrow: 1,
          flexDirection: "column",
          alignItems: "flex-start",

        }}
      >
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body1">{food}</Typography>
        <Divider />
        <Typography variant="body1">{price}</Typography>
        <Divider />
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Typography variant="body1">{tracking}</Typography>
          <Typography variant="body1">{eta}</Typography>
        </div>
      </div>
    </div>
  );
}
