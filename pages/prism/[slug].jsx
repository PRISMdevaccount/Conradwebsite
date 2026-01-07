import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Post({ frontmatter, content }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-purple-600 to-indigo-600 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {frontmatter.title}
          </h1>
          <p className="text-purple-100 text-lg">
            {frontmatter.date}
          </p>
        </div>
      </header>

      {/* Post Container */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl shadow-lg p-12">
          {/* Markdown content */}
          <article
            className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-gray-900 prose-h3:text-gray-800 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-purple-600 prose-a:font-semibold hover:prose-a:text-purple-700"
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          />
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <a
            href="/prism"
            className="inline-block px-8 py-4 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors"
          >
            ← Back to Inside PRISM
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}