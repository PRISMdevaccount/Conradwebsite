import { motion } from "framer-motion";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { Brain, Eye, Shield, Zap, Heart, Activity } from "lucide-react";

export default function About() {
  const technicalFeatures = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Segmentation",
      description: "Deep learning models trained on thousands of CT scans to automatically identify and segment critical anatomical structures."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Real-Time Visualization",
      description: "Mixed reality headsets provide surgeons with live 3D overlays during surgery, enhancing spatial awareness."
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Pre-Operative Planning",
      description: "Comprehensive surgical planning tools allow radiologists and surgeons to explore patient anatomy in 3D."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Risk Assessment",
      description: "Automated identification of high-risk areas and critical vessel relationships helps surgeons anticipate challenges."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Processing",
      description: "Optimized algorithms deliver results in minutes, ensuring seamless integration into clinical workflows."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Patient-Centered",
      description: "Every feature is designed with patient safety and outcomes as the top priority."
    }
  ];

  return (
    <>
      <Head>
        <title>About PRISM | Pancreatic Surgery Innovation</title>
        <meta name="description" content="PRISM combines AI and mixed reality to revolutionize pancreatic surgery through enhanced visualization and real-time guidance." />
      </Head>
      
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-50 py-24 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                About PRISM
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                <span className="font-semibold text-purple-600">P</span>ancreatic{" "}
                <span className="font-semibold text-purple-600">R</span>eality{" "}
                <span className="font-semibold text-purple-600">I</span>nnovation for{" "}
                <span className="font-semibold text-purple-600">S</span>urgical{" "}
                <span className="font-semibold text-purple-600">M</span>anagement
              </p>
            </div>

            {/* Main Description with Image */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    What is PRISM?
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    PRISM is an advanced surgical assistance platform that combines artificial intelligence 
                    and mixed reality to support surgeons and radiologists throughout the entire surgical 
                    process—from pre-operative planning to intra-operative guidance.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    By automatically segmenting CT scans and projecting 3D anatomical models through a 
                    mixed reality headset, PRISM provides unprecedented visualization of critical structures.
                  </p>
                </div>

                <div className="relative h-96 lg:h-auto bg-gradient-to-br from-purple-50 to-indigo-50 p-12">
                  <div className="bg-purple-600 rounded-3xl p-8 h-full flex flex-col justify-center text-white">
                    <div className="text-6xl font-bold mb-4">10-30%</div>
                    <p className="text-xl font-medium mb-2">
                      Potential reduction in surgical complications
                    </p>
                    <p className="text-purple-100 text-sm">
                      Based on clinical studies of surgical guidance systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* The Problem Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Challenge
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-10 rounded-3xl shadow-lg"
              >
                <div className="text-5xl font-bold text-purple-600 mb-4">~10%</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">5-Year Survival Rate</h3>
                <p className="text-gray-600 leading-relaxed">
                  Pancreatic cancer has one of the lowest survival rates, making surgical precision critical.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-lg"
              >
                <div className="text-5xl font-bold text-purple-600 mb-4">40-50%</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Complication Rate</h3>
                <p className="text-gray-600 leading-relaxed">
                  Exceptionally high complication rates due to complex anatomy and critical vessels.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-10 rounded-3xl shadow-lg"
              >
                <div className="text-5xl font-bold text-purple-600 mb-4">6-12hrs</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Surgery Duration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Extended operations increase risks and demand exceptional focus from surgical teams.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-6 bg-gradient-to-br from-purple-50 to-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                How PRISM Works
              </h2>
              <div className="w-20 h-1 bg-purple-600 mx-auto mb-8 rounded-full" />
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A seamless two-phase approach combining pre-operative planning with intra-operative guidance
              </p>
            </motion.div>

            <div className="space-y-12">
              {/* Phase 1 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-10 shadow-lg border border-purple-100"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-xl flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Pre-Operative Phase: AI Segmentation
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Clinicians upload patient CT scans to the PRISM platform. Our AI models automatically 
                      segment and identify critical structures including:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>Pancreatic tissue and tumor boundaries</li>
                      <li>Major blood vessels (celiac trunk, superior mesenteric artery/vein, portal vein)</li>
                      <li>Adjacent organs (liver, spleen, stomach, intestines)</li>
                      <li>Risk zones and surgical margins</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      The system generates detailed 3D models that surgeons can explore, measure, and use 
                      for surgical planning.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Phase 2 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-10 shadow-lg border border-purple-100"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-xl flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Intra-Operative Phase: Mixed Reality Guidance
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      During surgery, the mixed reality headset provides real-time guidance:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      <li>3D anatomical overlays aligned with the surgical field</li>
                      <li>Real-time detection and highlighting of critical vessels</li>
                      <li>Distance measurements and proximity warnings</li>
                      <li>Hands-free controls allowing surgeons to maintain sterility</li>
                    </ul>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      This enhanced visualization helps surgeons navigate complex anatomy with greater 
                      confidence and precision.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Features */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Key Features
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technicalFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl hover:shadow-lg transition-all"
                >
                  <div className="text-purple-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-12">
                To revolutionize pancreatic surgery by making advanced surgical guidance accessible, 
                affordable, and effective for healthcare institutions worldwide.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-8 rounded-3xl">
                  <h3 className="text-xl font-bold text-purple-600 mb-3">Innovation</h3>
                  <p className="text-gray-600">
                    Pushing boundaries through AI and mixed reality integration.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-3xl">
                  <h3 className="text-xl font-bold text-purple-600 mb-3">Accessibility</h3>
                  <p className="text-gray-600">
                    Solutions that work across diverse healthcare settings.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-3xl">
                  <h3 className="text-xl font-bold text-purple-600 mb-3">Impact</h3>
                  <p className="text-gray-600">
                    Measurable improvements in surgical outcomes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}