import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import { Calendar, Target, Rocket, Award, Users, Lightbulb, TestTube, Hospital, Globe } from 'lucide-react';

export default function Timeline() {
  const timelineEvents = [
    {
      phase: "The Beginning",
      date: "May 2025",
      icon: "Users",
      title: "Meeting at ISEF",
      description: "Diya and Ahyoung met at the International Science and Engineering Fair in Columbus, Ohio. A conversation about pancreatic surgery sparked the idea for PRISM.",
      color: "purple",
      achievements: [
        "Connected over shared passion for biomedical innovation",
        "Identified the critical need for real-time surgical guidance",
        "Decided to build a solution together"
      ]
    },
    {
      phase: "Research & Development",
      date: "June - August 2025",
      icon: "Lightbulb",
      title: "Building PRISM",
      description: "Development of both the pre-operative software and mixed-reality application. Training AI models and refining the technology.",
      color: "indigo",
      achievements: [
        "Trained 3 U-Net models for CT segmentation",
        "Developed YOLOv8 for real-time organ detection",
        "Achieved 90% accuracy on pre-operative software",
        "Built integrated MR application with Meta Quest 3S"
      ]
    },
    {
      phase: "Validation",
      date: "September - November 2025",
      icon: "TestTube",
      title: "Technical Testing",
      description: "Validation on thousands of CT scans and surgical images to ensure clinical-grade accuracy.",
      color: "purple",
      achievements: [
        "Tested on 10,000+ CT scans from Medical Decathlon Dataset",
        "Validated on 10,000+ surgical images",
        "Tested with 50 hours of real laparoscopic surgery footage",
        "88% real-time detection accuracy in <7 seconds"
      ]
    },
    {
      phase: "Clinical Feedback",
      date: "October - December 2025",
      icon: "Hospital",
      title: "Surgeon Evaluations",
      description: "Presented PRISM to 50+ pancreatic surgeons and oncologists across leading medical institutions.",
      color: "indigo",
      achievements: [
        "Evaluated by surgeons at Cleveland Clinic, Henry Ford Health, MyMichigan",
        "Secured Letter of Intent from Dr. Stalin (MyMichigan Health)",
        "Received estimate of 10-30% complication reduction",
        "Added SMA and blood detection based on feedback"
      ]
    },
    {
      phase: "Where We Are Now",
      date: "January 2026",
      icon: "Award",
      title: "Clinical Deployment",
      description: "Preparing for clinical deployment and regulatory approval.",
      color: "purple",
      achievements: [
        "Fully integrated pre-operative and intra-operative system",
        "Partnership with MyMichigan Health for clinical pilots",
        "Preparing FDA Class II device pre-submission",
        "Building Design History File and risk documentation"
      ]
    },
    {
      phase: "Next Steps",
      date: "2026 - Early 2027",
      icon: "Target",
      title: "Clinical Trials & Regulatory Approval",
      description: "Beginning clinical trials with hospital partners and pursuing FDA clearance for widespread deployment.",
      color: "indigo",
      achievements: [
        "IRB approval for clinical trials",
        "FDA Class II 510(k) submission",
        "Clinical pilots at MyMichigan Health and Michigan Medicine",
        "Expand detection to more organs and surgical types"
      ]
    },
    {
      phase: "The Future",
      date: "2027 and Beyond",
      icon: "Rocket",
      title: "Scaling PRISM",
      description: "Expanding PRISM's capabilities and bringing real-time surgical guidance to hospitals worldwide.",
      color: "purple",
      achievements: [
        "Deploy at major academic medical centers nationwide",
        "Expand to other laparoscopic procedures",
        "International market expansion",
        "Become the standard for surgical MR guidance"
      ]
    },
    {
      phase: "Our Vision",
      date: "Long-term Impact",
      icon: "Globe",
      title: "Transforming Surgical Care",
      description: "Making advanced surgical guidance accessible to hospitals everywhere, improving outcomes for patients worldwide.",
      color: "indigo",
      achievements: [
        "Help 92,000+ annual pancreatic surgery patients",
        "Scale to 13 million laparoscopic procedures globally",
        "Reduce surgical complications by 10-30%",
        "Save thousands of lives through better surgical precision"
      ]
    }
  ];

  const iconComponents = {
    Users,
    Lightbulb,
    TestTube,
    Hospital,
    Award,
    Target,
    Rocket,
    Globe
  };

  const getIcon = (iconName) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8" /> : null;
  };

  return (
    <>
      <Head>
        <title>Inside PRISM | Our Journey</title>
        <meta name="description" content="Follow PRISM's journey from an idea at ISEF to a revolutionary surgical guidance platform." />
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
            <Calendar className="w-16 h-16 mx-auto text-purple-600 mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Inside PRISM
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              From a conversation at ISEF to a revolutionary surgical guidance platform. 
              Here's our journey—and where we're headed next.
            </p>
          </motion.div>
        </section>

        {/* Timeline */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            {timelineEvents.map((event, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative"
              >
                {/* Timeline Line */}
                {idx < timelineEvents.length - 1 && (
                  <div className="absolute left-[31px] top-[80px] w-1 h-full bg-gradient-to-b from-purple-200 to-indigo-200 -z-10" />
                )}

                <div className="flex gap-8 mb-16">
                  {/* Icon Circle */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${
                    event.color === 'purple' 
                      ? 'from-purple-500 to-purple-600' 
                      : 'from-indigo-500 to-indigo-600'
                  } flex items-center justify-center text-white shadow-lg`}>
                    {getIcon(event.icon)}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all">
                    {/* Phase Badge */}
                    <div className="inline-block px-4 py-2 bg-gray-50 rounded-full text-sm font-semibold text-gray-600 mb-4">
                      {event.phase}
                    </div>

                    {/* Date */}
                    <p className="text-purple-600 font-semibold mb-2">{event.date}</p>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {event.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      {event.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                            <div className="w-2 h-2 rounded-full bg-purple-600" />
                          </div>
                          <p className="text-gray-700">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 bg-gray-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Join Us On This Journey
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're building the future of surgical guidance. Whether you're a surgeon, 
              investor, or partner, we'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/support"
                className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors"
              >
                Support PRISM
              </a>
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-purple-600 border-2 border-gray-200 font-semibold rounded-full hover:border-purple-600 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}