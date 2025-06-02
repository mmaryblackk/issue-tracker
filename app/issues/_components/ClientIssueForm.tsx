"use client";

import { Issue } from "@prisma/client";
import dynamic from "next/dynamic";
import React from "react";
import IssueFormSkeleton from "./IssueFormSkeleton";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const ClientIssueForm = ({ issue }: { issue?: Issue }) => {
  return <IssueForm issue={issue} />;
};

export default ClientIssueForm;
