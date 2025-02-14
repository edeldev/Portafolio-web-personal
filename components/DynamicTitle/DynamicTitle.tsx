"use client";

import { useEffect, useState } from "react";

export const DynamicTitle = () => {
  const [defaultTitle] = useState("Edeldev - Portafolio Personal");

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = "Hey vuelve, ¡No te vayas!";
      } else {
        document.title = defaultTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [defaultTitle]);

  return null;
};
