import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  content: string;
}

export function getBlogPosts(): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), "posts");
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const lines = fileContents.split("\n");
      const metadata: Record<string, string> = {};
      let body = "";
      let inFrontmatter = false;
      const frontmatterLines: string[] = [];

      for (const line of lines) {
        if (line.trim() === "---") {
          if (!inFrontmatter) {
            inFrontmatter = true;
          } else {
            inFrontmatter = false;
            for (const fl of frontmatterLines) {
              const parts = fl.split(":");
              if (parts.length >= 2) {
                const key = parts[0].trim();
                const val = parts.slice(1).join(":").trim().replace(/^["']|["']$/g, "");
                metadata[key] = val;
              }
            }
          }
        } else if (inFrontmatter) {
          frontmatterLines.push(line);
        } else {
          body += line + "\n";
        }
      }

      return {
        slug,
        title: metadata.title || slug,
        date: metadata.date || "",
        readTime: metadata.readTime || "",
        summary: metadata.summary || "",
        content: body.trim(),
      };
    });

  // Sort posts by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const posts = getBlogPosts();
  return posts.find((p) => p.slug === slug) || null;
}
