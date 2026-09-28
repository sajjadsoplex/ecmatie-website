const isGitHubPages = process.env.GITHUB_PAGES === "true";

const basePath = isGitHubPages ? "/ecmatie-website" : "";

export function assetPath(path: string) {
  if (!path.startsWith("/")) {
    return `${basePath}/${path}`;
  }

  return `${basePath}${path}`;
}