import authOptions from "@/app/auth/authOptions";
import { prisma } from "@/prisma/client";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";
import AssigneeSelect from "./AssigneeSelect";
import DeleteIssueButton from "./DeleteIssueButton";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";
import { cache } from "react";

export type paramsType = Promise<{ id: string }>;

const fetchIssue = cache((issueId: number) =>
  prisma.issue.findUnique({ where: { id: issueId } })
);

const IssueDetailPage = async (props: { params: paramsType }) => {
  const session = await getServerSession(authOptions);
  const { id } = await props.params;

  if (isNaN(Number(id))) notFound();

  const issue = await fetchIssue(parseInt(id));

  if (!issue) notFound();

  return (
    <Grid columns={{ initial: "1", sm: "5" }} gap="5">
      <Box className="md:col-span-4">
        <IssueDetails issue={issue} />
      </Box>
      {session && (
        <Box>
          <Flex direction="column" gap="4">
            <AssigneeSelect issue={issue} />
            <EditIssueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      )}
    </Grid>
  );
};

export async function generateMetadata(props: { params: paramsType }) {
  const { id } = await props.params;
  const issue = await fetchIssue(parseInt(id));

  return {
    title: issue?.title,
    description: `Detailes of issue #${issue?.id}`,
  };
}

export default IssueDetailPage;
