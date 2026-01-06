import { motion } from "framer-motion";
import Image from "next/image";

export default function Story() {
  const features = [
    { 
      title: "AI CT Segmentation", 
      desc: "Automated detection and mapping of critical anatomical structures with clinical-grade accuracy.", 
      icon: "🧠" 
    },
    { 
      title: "Mixed Reality Guidance", 
      desc: "Real-time 3D anatomical overlays providing surgeons with enhanced spatial awareness.", 
      icon: "🔬" 
    },
    { 
      title: "Risk Reduction", 
      desc: "Clinical studies show potential to reduce surgical complications by 10-30%.", 
      icon: "📊" 
    },
    { 
      title: "Accessible Innovation", 
      desc: "Designed for scalability and adoption across diverse healthcare settings.", 
      icon: "🌍" 
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Intended Impact
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Pancreatic surgery presents unique challenges with high complication rates and complex anatomy. 
            PRISM addresses these challenges by providing surgeons and radiologists with advanced tools for 
            both pre-operative planning and intra-operative guidance.
          </p>
        </motion.div>

        {/* Main Feature with Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl overflow-hidden shadow-lg mb-16"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Why PRISM Matters
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Pancreatic cancer remains one of the most challenging malignancies to treat surgically, with 
                5-year survival rates below 10%. The complexity of pancreatic anatomy and the proximity of 
                critical blood vessels make these procedures exceptionally demanding.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                PRISM revolutionizes this landscape by combining AI-powered CT segmentation with mixed reality 
                visualization, enabling surgeons to navigate complex anatomy with unprecedented precision.
              </p>
            </div>
            <div className="relative h-96 md:h-auto bg-gradient-to-br from-purple-50 to-indigo-50">
              <Image
                src="/PRISM_website.png"
                alt="PRISM Platform Interface"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl hover:shadow-lg transition-all group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Want to learn more about how PRISM can transform surgical outcomes?
          </p>
          <a
            href="/about"
            className="inline-block px-8 py-4 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors"
          >
            Explore Our Technology
          </a>
        </motion.div>
      </div>
    </section>
  );
}