import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";
import ClientIssueForm from "../../_components/ClientIssueForm";

export type paramsType = Promise<{ id: string }>;

const EditIssuePage = async (props: { params: paramsType }) => {
  const { id } = await props.params;
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) notFound();

  return <ClientIssueForm issue={issue} />;
};

export default EditIssuePage;
