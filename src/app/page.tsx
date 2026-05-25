import HomePage from "@/components/HomePageClient";
import { getLatestPosts } from "@/lib/blog";

// Server wrapper: reads the 3 latest posts (filesystem) and passes them to the
// client homepage, which renders the "Latest from the blog" section.
export default function Page() {
  return <HomePage latestPosts={getLatestPosts(3)} />;
}
