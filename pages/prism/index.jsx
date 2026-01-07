import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getAllPosts } from '../../lib/get-posts';

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}

export default function BlogIndex({ posts }) {
  return (
    <>
      <Head>
        <title>Inside PRISM | Our Journey & Insights</title>
        <meta name="description" content="Explore our journey, research insights, and the story behind PRISM - advancing surgical intelligence for pancreatic surgery." />
      </Head>
      
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-50 py-24 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Inside PRISM
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Explore our journey, research insights, and the story behind PRISM — advancing 
              surgical intelligence for a better tomorrow.
            </p>
          </motion.div>
        </section>

        {/* Blog Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, idx) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Link
                    href={`/prism/${post.slug}`}
                    className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="relative h-64 w-full bg-gradient-to-br from-purple-50 to-indigo-50">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}