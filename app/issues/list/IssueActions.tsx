import { Button, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import IssueStatusFilter from "./IssueStatusFilter";
import { Link as CustomLink } from "@/app/components";
import { IssueQuery } from "./IssueTable";

type Props = {
  searchParams: IssueQuery;
};

const IssueActions = async ({ searchParams }: Props) => {
  const { status, orderBy, page } = await searchParams;
  const areSearchParams = status || orderBy || page;

  return (
    <Flex justify="between">
      <Flex gap="3" align="center">
        <IssueStatusFilter />
        {areSearchParams && (
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
