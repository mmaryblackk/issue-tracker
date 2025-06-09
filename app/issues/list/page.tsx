import Pagination from "@/app/components/Pagination";
import { prisma } from "@/prisma/client";
import { Issue, Status } from "@prisma/client";
import { Flex } from "@radix-ui/themes";
import IssueActions from "./IssueActions";
import IssueTable, { columnNames, IssueQuery } from "./IssueTable";
import { Metadata } from "next";

const IssuesPage = async (props: { searchParams?: Promise<IssueQuery> }) => {
  const searchParams = await props.searchParams;

  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams?.status as Status)
    ? searchParams?.status
    : undefined;

  const orderBy = columnNames.includes(searchParams?.orderBy as keyof Issue)
    ? { [searchParams?.orderBy as keyof Issue]: "asc" }
    : undefined;

  const page = parseInt(searchParams?.page as string) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where: {
      status,
    },
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const issueCount = await prisma.issue.count({
    where: { status },
  });

  return (
    <Flex direction="column" gap="3">
      <IssueActions />
      <IssueTable searchParams={searchParams} issues={issues} />
      <Pagination
        pageSize={pageSize}
        currentPage={page}
        itemCount={issueCount}
      />
    </Flex>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;

export const metadata: Metadata = {
  title: "Issue Tracker - Issue List",
  description: "View all project issues",
};
