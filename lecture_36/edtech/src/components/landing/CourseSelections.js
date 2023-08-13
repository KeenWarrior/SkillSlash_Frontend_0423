import { Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

export default function CourseSelections({ courseCategories }) {
  const [value, setValue] = useState(courseCategories[0].label);

  const handleTabChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Typography variant="h4">A broad selection of courses</Typography>
      <Typography variant="body1">
        Choose from 155,000 online video courses with new additions published
        every month
      </Typography>

      <Tabs onChange={handleTabChange} value={value}>
        {courseCategories.map((category) => (
          <Tab
            label={category.label}
            value={category.label}
            style={{
              textTransform: "none",
            }}
            
            disableRipple={true}
          />
        ))}
      </Tabs>

      <>
        {courseCategories.map((category) => (
          <div
            hidden={value !== category.label}
            value={value}
            index={category.label}
          >
            <Typography variant="h5">{category.title}</Typography>
            <Typography variant="body1">{category.description}</Typography>
          </div>
        ))}
      </>
    </div>
  );
}
