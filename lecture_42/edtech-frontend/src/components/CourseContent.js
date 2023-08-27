"use client";

import { useState } from "react";
import NestedList from "./SectionsList";
import Player from "./videoPlayer/Player";

export default function CourseContent({ content, selectedVideoUrl, sectionId }) {
  const [videoUrl, setVideoUrl] = useState(selectedVideoUrl);

  return (
    <div>
      <NestedList courseId={content.id} sectionId={sectionId} sections={content.sections} setVideoUrl={setVideoUrl} />
      <Player videoUrl={videoUrl} />
    </div>
  );
}
