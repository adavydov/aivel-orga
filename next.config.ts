import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryBasePath = isGitHubActions ? "/aivel-orga" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: repositoryBasePath,
  assetPrefix: repositoryBasePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
