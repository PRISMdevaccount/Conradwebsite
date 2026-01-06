import { motion } from "framer-motion";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, MessageSquare, Users, Lightbulb } from "lucide-react";

export default function Contact() {
  const contactReasons = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Partnership Opportunities",
      description: "Interested in collaborating with PRISM? We welcome partnerships with hospitals, research institutions, and medical technology companies."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Investment Inquiries",
      description: "Looking to support innovative healthcare technology? Learn more about investment opportunities."
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "General Questions",
      description: "Have questions about PRISM's technology, our team, or the Conrad Challenge? We're happy to help."
    }
  ];

  return (
    <>
      <Head>
        <title>Contact Us | PRISM</title>
        <meta name="description" content="Get in touch with the PRISM team for partnerships, investment opportunities, or general inquiries." />
      </Head>
      
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-24 px-6 bg-gray-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Whether you're interested in partnering, investing, or simply learning more about PRISM, 
              we'd love to hear from you.
            </p>
          </motion.div>
        </section>

        {/* Contact Reasons */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactReasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="text-purple-600 mb-4">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Main Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-purple-600 rounded-3xl p-12 text-center text-white shadow-xl"
            >
              <Mail className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">
                Ready to Connect?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Send us an email and we'll get back to you within 24-48 hours.
              </p>
              <a
                href="mailto:diyaramakrishnan009@gmail.com"
                className="inline-block px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-lg text-lg"
              >
                diyaramakrishnan009@gmail.com
              </a>
            </motion.div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-12 text-center shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Want to Learn More First?
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Explore our technology, read about our team, and discover the impact we're working to achieve.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/about"
                  className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors"
                >
                  About PRISM
                </a>
                <a
                  href="/team"
                  className="px-6 py-3 bg-white text-purple-600 border-2 border-gray-200 font-semibold rounded-full hover:border-purple-600 transition-colors"
                >
                  Meet the Team
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}