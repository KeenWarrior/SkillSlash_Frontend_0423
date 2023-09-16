import Player from "@/components/videoPlayer/Player";
import { redirect } from "next/navigation"; 
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

async function fetchContent(courseSlug) {
  const url = `http://localhost:8000/v1/courses/${courseSlug}`;
  console.log(url);
  const res = await fetch(`http://localhost:8000/v1/courses/${courseSlug}`, {
    cache: "no-store",
  });
  const json = await res.json();
  return json;
}

function getVideoUrl(content, sectionId, videoId) {
  if (sectionId === undefined) {
    const section = content.sections[0];
    const video = section.videos[0];
    return redirect(`/course/${courseSlug}/learn/${section._id}/${video._id}`);
  }
  const section = content.sections.find((s) => s._id === sectionId);
  if (videoId === undefined) {
    return redirect(
      `/course/${courseSlug}/learn/${sectionId}/${section.videos[0]._id}`
    );
  } else {
    const video = section.videos.find((v) => v._id === videoId);
    return video.videoUrl;
  }
}

export default async function LearnPage({ params }) {
  const { courseSlug, slug } = params;
  const content = await fetchContent(courseSlug);
  const [route, sectionId, videoId] = slug;

  if (route !== "learn") {
    return () => <div>Something went wrong</div>;
  }

  const videoUrl = getVideoUrl(content, sectionId, videoId);

  const CourseContent = dynamic(() => import("@/components/CourseContent"), {
    loading: () => <div>Loading...</div>,
    ssr: false,
  });

  console.log(content);
  return (
    <div>
      <h1>{content.name}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CourseContent
          content={content}
          selectedVideoUrl={videoUrl}
          sectionId={sectionId}
        />
      </Suspense>
    </div>
  );
}
