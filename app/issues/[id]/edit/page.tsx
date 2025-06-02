import React from "react";
import IssueForm from "../../_components/IssueForm";
import { prisma } from "@/prisma/client";
import { notFound } from "next/navigation";

export type paramsType = Promise<{ id: string }>;

const EditIssuePage = async (props: { params: paramsType }) => {
  const { id } = await props.params;
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) notFound();

  return <IssueForm issue={issue} />;
};

export default EditIssuePage;
