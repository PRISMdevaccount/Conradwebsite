import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Story from '../components/Story';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>PRISM | Surgical AI Assistant for Pancreatic Surgery</title>
        <meta name="description" content="PRISM combines AI-powered CT segmentation with mixed reality guidance to revolutionize pancreatic surgery and improve patient outcomes." />
      </Head>
      
      <Navbar />
      <Hero />
      <Story />
      <Footer />
    </>
  );
}