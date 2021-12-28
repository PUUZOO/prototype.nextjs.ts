// Library
import React from "react";
import Head from "next/head";

export interface ProjectHeadProps {
  addTitle?: string;
  noIndex?: boolean;
}

const ProjectHead: React.FC<ProjectHeadProps> = ({
  addTitle = null,
  noIndex = true,
}) => (
  <Head>
    <title>{`Search ${addTitle ? "- " + addTitle : ""}`}</title>
    {noIndex && <meta name="robots" content="noindex, nofollow" />}
  </Head>
);

export default ProjectHead;
