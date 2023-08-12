"use client";

export default function Click({ data }) {
  return (
    <button
      onClick={() => {
        console.log(data);
      }}
    >
      Click
    </button>
  );
}
