import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center mt-8 text-sm">
      <div className="flex flex-col items-center gap-4">
        
        {/* 1. شعار وحقوق الموقع */}
        <p>TechStore © 2025</p>

        {/* 3. روابط شبكات التواصل الاجتماعي */}
        <div className="flex gap-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
            Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
            Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            Twitter
          </a>
        </div>

        {/* 2. رابط اتصل بنا */}
        <Link href="/contact" className="text-blue-400 hover:text-blue-300 underline transition-colors">
          Contactez-nous
        </Link>
        
      </div>
    </footer>
  );
}