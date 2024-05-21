import React from "react";
import { notFound } from "next/navigation";

import { db } from "@/db";

import { Preview } from "@/screens/Preview";

interface PreviewPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const PreviewPage: React.FC<PreviewPageProps> = async ({ searchParams }) => {
  const { id } = searchParams;

  if (!id || typeof id !== "string") {
    return notFound();
  }

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) {
    return notFound();
  }

  return <Preview configuration={configuration} />;
};

export default PreviewPage;
