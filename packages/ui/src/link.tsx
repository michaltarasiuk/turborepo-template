"use client";

import { composeRenderProps } from "react-aria-components/composeRenderProps";
import { Link as RACLink, type LinkProps as RACLinkProps } from "react-aria-components/Link";
import { tv } from "tailwind-variants";
import { focusRing } from "#utils";

export interface LinkProps extends RACLinkProps {
  /** @default "primary" */
  variant?: "primary" | "secondary";
}

const link = tv({
  extend: focusRing,
  base: "rounded-xs underline transition [-webkit-tap-highlight-color:transparent] disabled:cursor-default disabled:no-underline forced-colors:disabled:text-[GrayText]",
  variants: {
    variant: {
      primary:
        "text-blue-600 underline decoration-blue-600/60 hover:decoration-blue-600 dark:text-blue-500 dark:decoration-blue-500/60 dark:hover:decoration-blue-500",
      secondary:
        "text-neutral-700 underline decoration-neutral-700/50 hover:decoration-neutral-700 dark:text-neutral-300 dark:decoration-neutral-300/70 dark:hover:decoration-neutral-300",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export function Link(props: LinkProps) {
  return (
    <RACLink
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        link({ ...renderProps, variant: props.variant, className }),
      )}
    />
  );
}
