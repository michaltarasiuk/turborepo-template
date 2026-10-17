"use client";

import { useRouter } from "next/navigation";
import { RouterProvider } from "react-aria-components";
import { Link as BaseLink, type LinkProps } from "#link";

export type { LinkProps };

export function Link(props: LinkProps) {
  const router = useRouter();

  return (
    <RouterProvider navigate={router.push}>
      <BaseLink {...props} />
    </RouterProvider>
  );
}
