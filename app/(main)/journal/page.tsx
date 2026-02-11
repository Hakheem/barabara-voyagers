import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import Container from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

// Mock Data for UI Development
const MOCK_POSTS = [
  {
    id: '1',
    title: 'The Great Migration: A Spectacle of Life and Death',
    slug: 'great-migration-spectacle',
    excerpt: 'Every year, over two million animals migrate from the Serengeti to the Maasai Mara. Discover the best time to witness this ancient rhythm of nature...',
    date: '2024-05-15',
    author: 'David K.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200',
    category: 'Wildlife',
    readTime: '6 min read'
  },
  {
    id: '2',
    title: 'Top 5 Luxury Lodges in the Okavango Delta',
    slug: 'luxury-lodges-okavango',
    excerpt: 'Experience the pinnacle of African hospitality. We review the most exclusive water-based camps in Botswana’s pristine wilderness.',
    date: '2024-05-10',
    author: 'Sarah M.',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?w=800',
    category: 'Luxury Travel',
    readTime: '4 min read'
  },
  {
    id: '3',
    title: 'Photography Tips for Your First African Safari',
    slug: 'safari-photography-tips',
    excerpt: 'Capturing the perfect lion portrait requires more than just a good lens. Learn about lighting, patience, and the ethics of wildlife photography.',
    date: '2024-05-02',
    author: 'James R.',
    image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?w=800',
    category: 'Guides',
    readTime: '8 min read'
  }
];

export default async function JournalPage() {
  const featuredPost = MOCK_POSTS[0];
  const remainingPosts = MOCK_POSTS.slice(1);

  return (
    <main className="">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=1920"
            alt="Safari Journal"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 to-transparent" />
        </div>
        <Container className="relative z-10 text-center text-gray-200">
          <span className="uppercase tracking-[0.2em] text-amber-400 font-bold text-sm mb-3 block">Editorial</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Safari Journal
          </h1>
          <p className="text-xl max-w-2xl mx-auto font-light italic">
            "Stories, insights, and inspiration from the heart of the wild."
          </p>
        </Container>
      </section>

      {/* Featured Post  */}
      <section className="py-24">
        <Container>
          <Link href={`/journal/${featuredPost.slug}`} className="group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                />
                 <span className="absolute top-4 left-4 bg-amber-100 text-amber-800 px-4 py-1 rounded-xl text-xs font- uppercase tracking-wider">
                {featuredPost.category}
                </span>
              </div>
              <div className="space-y-4">
               
                <h2 className="text-4xl md:text-5xl  font-bold leading-tight text-gray-700 group-hover:text-amber-700 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-500 pt-4">
                  <span className="flex items-center gap-2"><User className="w-4 h-4" /> {featuredPost.author}</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {featuredPost.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </Container>
      </section>

      {/* Grid Posts */}
      <section className="py-20 bg--gray-50">
        <Container>
          <div className="flex items-end justify-between mb-12">
            <div>
              <h3 className="text-3xl  font-bold">Latest Stories</h3>
              <div className="h-1 w-20 bg-amber-500 mt-2" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {remainingPosts.map((post) => (
              <Link key={post.id} href={`/journal/${post.slug}`} className="group">
                <article className="space-y-6">
                  <div className="relative h-80 overflow-hidden rounded-t-lg shadow-md">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest text-gray-900 shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest text-amber-600 font-bold">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h4 className="text-2xl  font-bold text-gray-900 group-hover:text-amber-700 transition-colors leading-snug">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 line-clamp-3 font-light leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          
          <div className="mt-20 text-center">
             <Button variant="outline" className=" px-12 py-6 border-gray-300">
               Load More Stories
             </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}

