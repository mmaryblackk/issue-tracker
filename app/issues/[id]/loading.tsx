import { Skeleton } from "@/app/components";
import { Flex, Card, Box } from "@radix-ui/themes";
import React from "react";

const LoadingIssueDetailesPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gap={"3"} my={"2"} align={"center"}>
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose mt-4">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailesPage;
