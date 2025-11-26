"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTransition } from "react";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.1,
});

export default function ProgressBar() {
  const pathname = usePathname();
  const [isPending] = useTransition();

  useEffect(() => {
    if (isPending) {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [isPending, pathname]);

  return null;
}
