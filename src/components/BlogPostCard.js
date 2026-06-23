import Link from 'next/link';


export default function BlogPostCard({ post }) {
  return (
    <div className="border border-gray-200 p-5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
      <img src={post.image} alt={post.titre} className="w-full h-48 object-cover rounded-xl" />
      <h2 className="text-2xl font-bold mt-4 mb-2">{post.titre}</h2>
      <p className="text-gray-600 mb-4">{post.extrait}</p>
      <Link href={`/blog/${post.id}`} className="text-blue-600 font-semibold hover:underline">
        Lire l'article →
      </Link>
    </div>
  );
}