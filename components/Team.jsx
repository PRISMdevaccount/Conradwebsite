import { motion } from "framer-motion";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

export default function Team() {
  // TODO: Replace with your actual team information
  const teamMembers = [
    {
      name: "Your Name",
      role: "Role/Title",
      bio: "Brief biography highlighting relevant experience, education, or passion for the project. Keep it 2-3 sentences.",
      image: "/team/member1.jpg", // Add your actual images to public/team/
      linkedin: "https://linkedin.com/in/yourprofile",
      email: "member1@example.com"
    },
    {
      name: "Team Member 2",
      role: "Role/Title",
      bio: "Brief biography highlighting relevant experience, education, or passion for the project. Keep it 2-3 sentences.",
      image: "/team/member2.jpg",
      linkedin: "https://linkedin.com/in/profile2",
      email: "member2@example.com"
    },
    // Add more team members as needed
  ];

  return (
    <>
      <Head>
        <title>Our Team | PRISM</title>
        <meta name="description" content="Meet the team behind PRISM - passionate innovators working to revolutionize pancreatic surgery." />
      </Head>
      
      <Navbar />

      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gray-50 py-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Meet the Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              A dedicated group of innovators passionate about advancing surgical technology 
              and improving patient outcomes through cutting-edge mixed reality solutions.
            </p>
          </motion.div>
        </section>

        {/* Team Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  {/* Image */}
                  <div className="relative h-80 bg-gradient-to-br from-purple-50 to-indigo-50">
                    {/* Placeholder - replace with actual images */}
                    <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-purple-300">
                      {member.name.charAt(0)}
                    </div>
                    {/* When you add images, use:
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    */}
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-purple-600 font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-3">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-gray-50 text-purple-600 hover:bg-purple-50 transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin size={20} />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="p-3 rounded-full bg-gray-50 text-purple-600 hover:bg-purple-50 transition-colors"
                          aria-label="Email"
                        >
                          <Mail size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Photo Section */}
        <section className="py-20 px-6 bg-gray-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              Our Journey Together
            </h2>
            
            {/* Group Photo */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg mb-8">
              <div className="relative w-full h-[500px]">
                <Image
                  src="/team.png"
                  alt="PRISM Team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed text-center max-w-3xl mx-auto">
              United by a shared vision to transform surgical care, our team combines expertise in 
              medical technology, artificial intelligence, and user experience design. Together, we're 
              committed to making PRISM a reality that improves outcomes for patients worldwide.
            </p>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}