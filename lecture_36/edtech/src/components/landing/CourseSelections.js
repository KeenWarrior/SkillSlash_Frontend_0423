import { Typography } from "@mui/material";

export default function CourseSelections(){
    return(
        <div style={{
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
        }}>
            <Typography variant="h4">A broad selection of courses</Typography>
            <Typography variant="body1">Choose from 155,000 online video courses with new additions published every month</Typography>

        </div>
    )
}