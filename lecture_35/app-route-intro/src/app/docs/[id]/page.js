"use client";

import { usePathname, useParams } from "next/navigation";
import { Suspense } from "react";

export default function DocPage() {
  const pathName = usePathname();
  const params = useParams();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1>Hello from Custom Doc page {params.id}</h1>
    </Suspense>
  );
}
