import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Target, DollarSign, BarChart } from "lucide-react";

export default function Support() {
  const investmentReasons = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growing Market",
      description: "The surgical navigation systems market is projected to reach $2.8 billion by 2028, growing at 8.5% CAGR."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Clear Need",
      description: "Pancreatic surgery has 40-50% complication rates. PRISM directly addresses this critical healthcare challenge."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Cutting-Edge Tech",
      description: "First-of-its-kind integration of AI segmentation with mixed reality guidance for pancreatic surgery."
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Scalable Solution",
      description: "Technology can be adapted for other complex surgical procedures, expanding market potential."
    }
  ];

  const partnershipBenefits = [
    {
      title: "Clinical Validation",
      description: "Collaborate on clinical trials and studies that validate PRISM's effectiveness in real-world settings."
    },
    {
      title: "Research Publications",
      description: "Joint publications in leading medical journals and presentations at major surgical conferences."
    },
    {
      title: "Technology Access",
      description: "Early access to PRISM platform for evaluation and integration into your clinical workflows."
    },
    {
      title: "Shared Mission",
      description: "Join a network committed to advancing surgical precision and improving patient outcomes."
    }
  ];

  return (
    <>
      <Head>
        <title>Support PRISM | Investment & Partnership Opportunities</title>
        <meta name="description" content="Learn about investment and partnership opportunities with PRISM - advancing surgical technology for better patient outcomes." />
      </Head>
      
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-24 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Support PRISM
            </h1>
            <div className="w-20 h-1 bg-purple-600 mx-auto mb-8 rounded-full" />
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Join us in revolutionizing pancreatic surgery and improving patient outcomes through 
              advanced AI and mixed reality technology.
            </p>
          </motion.div>
        </section>

        {/* Investment Section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <DollarSign className="w-16 h-16 mx-auto text-purple-600 mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Investment Opportunities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                PRISM represents a unique opportunity to invest in healthcare innovation with 
                significant market potential and measurable patient impact.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {investmentReasons.map((reason, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all"
                >
                  <div className="text-purple-600 mb-4">
                    {reason.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-12 text-white text-center"
            >
              <h3 className="text-3xl font-bold mb-4">
                Interested in Investing?
              </h3>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                We're currently seeking strategic investors to help bring PRISM to market. 
                Contact us to learn more about investment opportunities and our growth roadmap.
              </p>
              <a
                href="mailto:prism.pancreaticsurgery@gmail.com?subject=Investment Inquiry - PRISM"
                className="inline-block px-8 py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-gray-50 transition-colors shadow-lg"
              >
                Contact Investment Team
              </a>
            </motion.div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <Users className="w-16 h-16 mx-auto text-purple-600 mb-6" />
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Partnership Opportunities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're actively seeking partnerships with hospitals, research institutions, 
                and medical technology companies to validate and scale PRISM.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {partnershipBenefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Partnership Types */}
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-purple-50 p-8 rounded-2xl text-center"
              >
                <h4 className="text-xl font-bold text-purple-600 mb-3">
                  Healthcare Institutions
                </h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Partner with us for clinical trials, validation studies, and early adoption programs.
                </p>
                <a
                  href="mailto:prism.pancreaticsurgery@gmail.com?subject=Clinical Partnership Inquiry"
                  className="text-purple-600 font-semibold hover:text-purple-700"
                >
                  Explore Partnership →
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-indigo-50 p-8 rounded-2xl text-center"
              >
                <h4 className="text-xl font-bold text-indigo-600 mb-3">
                  Research Institutions
                </h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Collaborate on research studies, publications, and advancing surgical AI technology.
                </p>
                <a
                  href="mailto:prism.pancreaticsurgery@gmail.com?subject=Research Collaboration Inquiry"
                  className="text-indigo-600 font-semibold hover:text-indigo-700"
                >
                  Start Collaboration →
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-purple-50 p-8 rounded-2xl text-center"
              >
                <h4 className="text-xl font-bold text-purple-600 mb-3">
                  MedTech Companies
                </h4>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Integrate PRISM into existing surgical platforms or explore co-development opportunities.
                </p>
                <a
                  href="mailto:prism.pancreaticsurgery@gmail.com?subject=Technology Partnership Inquiry"
                  className="text-purple-600 font-semibold hover:text-purple-700"
                >
                  Discuss Integration →
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}