import React, { ReactNode } from "react";
import NextLink from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

interface Props {
  href: string;
  children: ReactNode;
}

const Link = ({ href, children }: Props) => {
  return (
    <NextLink href={href} passHref>
      <RadixLink asChild className="hover:underline">
        <span>{children}</span>
      </RadixLink>
    </NextLink>
  );
};

export default Link;
