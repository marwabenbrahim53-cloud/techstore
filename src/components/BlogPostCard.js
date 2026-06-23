import Link from 'next/link';

export default function BlogPostCard({ post }) {
  return (
    // نفس التصميم القديم متاعك
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col">
      
      {/* هوني التعديل! */}
      <div className="w-full h-56 relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.titre} 
          
          className="w-full h-full object-cover object-center" 
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-xs text-gray-400 mb-2">{post.date}</p>
        <h2 className="text-xl font-bold mb-3 text-gray-800 leading-tight">
          {post.titre}
        </h2>
        <p className="text-gray-600 mb-6 text-sm flex-grow leading-relaxed">
          {post.extrait}
        </p>
        
        <Link href={`/blog/${post.id}`} className="bg-[#008080] text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-[#006666] transition inline-block self-start">
          Lire plus
        </Link>
      </div>
    </div>
  );
}