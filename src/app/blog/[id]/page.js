import { blogPosts } from "../../../data/blogPosts"; // Ajustez les ../ selon besoin

export default async function ArticlePage({ params }) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id.toString() === id.toString());

  if (!post) {
    return <div className="text-center mt-20">Article non trouvé !</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-4">{post.titre}</h1>
      <p className="text-gray-500 mb-6">{post.date}</p>
      <img src={post.image} alt={post.titre} className="w-full h-80 object-cover rounded-2xl mb-8" />
      <div className="text-lg text-gray-800 leading-relaxed">
        {post.contenu}
      </div>
    </div>
  );
}