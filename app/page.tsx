import type { NextPage } from "next";
import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import TrustConfirmation from "./components/TrustConfirmation";
import ProductDemo from "./components/ProductDemo";
import SocialProof from "./components/SocialProof";
import Pricing from "./components/Pricing";
import CallToAction from "./components/CallToAction";
import LeadForm from "./components/LeadForm";
import ContactAndSocial from "./components/ContactAndSocial";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">

      <Header />

      <Hero />
      <Benefits />
      <TrustConfirmation />
      <ProductDemo />
      <SocialProof />
      <Pricing />
      <CallToAction />
      <LeadForm />
      <ContactAndSocial />
      <FAQ />

      <Footer />
    </div>
  );
};

export default Home;
