import { blogPosts } from "../../data/blogPosts";
import BlogPostCard from "../../components/BlogPostCard";

export default function PageBlog() {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">Notre Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}