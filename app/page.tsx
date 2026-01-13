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
      <Head>
        <title>Инновационное решение для бизнеса | CompanyName</title>
        <meta
          name="description"
          content="Мощное решение для роста вашего бизнеса. Увеличьте эффективность на 300% с нашей платформой."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

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
