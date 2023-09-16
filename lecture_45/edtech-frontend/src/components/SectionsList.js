import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import { useRouter } from "next/navigation";

export default function NestedList({ courseId, sectionId, sections, setVideoUrl }) {
  const [open, setOpen] = React.useState(sectionId);
  const router = useRouter();

  const handleClick = (selectedSectionId) => {
    setOpen(selectedSectionId);
  };

  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Course Content
        </ListSubheader>
      }
    >
      {sections.map((section, index) => {
        return (
          <React.Fragment key={index}>
            <ListItemButton onClick={() => handleClick(section._id)}>
              <ListItemText
                primary={`Section ${index + 1}: ` + section.title}
              />
              {open == section._id ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open == section._id} unmountOnExit>
              <List component="div" disablePadding>
                {section.videos.map((video, idx) => {
                  console.log(video);
                  return (
                    <ListItemButton
                      key={idx}
                      sx={{ pl: 4 }}
                      onClick={() => {
                        // setVideoUrl(video.videoUrl);
                        router.push(`/course/${courseId}/learn/${section._id}/${video._id}`)
                      }}
                    >
                      <ListItemText primary={video.title} />
                    </ListItemButton>
                  );
                })}
              </List>
            </Collapse>
          </React.Fragment>
        );
      })}
    </List>
  );
}
