"use client";

import { Button, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusFilter from "./IssueStatusFilter";
import { Link as CustomLink } from "@/app/components";
import { useSearchParams } from "next/navigation";

const IssueActions = () => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  return (
    <Flex justify="between">
      <Flex gap="3" align="center">
        <IssueStatusFilter />
        {params.size > 0 && (
          <CustomLink href="/issues/list">
            <Text size="2" color="gray">
              Clear filters
            </Text>
          </CustomLink>
        )}
      </Flex>
      <Button className="!cursor-pointer">
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </Flex>
  );
};

export default IssueActions;
