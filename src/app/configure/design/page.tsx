import React from "react";
import { notFound } from "next/navigation";

import { db } from "@/db";

import { Design } from "@/screens/Design";

interface DesignPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const DesignPage: React.FC<DesignPageProps> = async ({ searchParams }) => {
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

  const { imageUrl, width, height } = configuration;

  return (
    <Design
      imageUrl={imageUrl}
      configId={configuration.id}
      imageDimensions={{ width, height }}
    />
  );
};

export default DesignPage;
