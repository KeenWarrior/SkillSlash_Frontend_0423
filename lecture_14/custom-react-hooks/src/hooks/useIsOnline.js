import { useEffect, useState } from "react";

export default function useIsOnline() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    });

    window.addEventListener("offline", () => {
      setIsOnline(false);
    });

    // return () => {
    //   window.removeEventListener("online");
    //   window.removeEventListener("offline");
    // };
  }, []);

  return isOnline;
}
