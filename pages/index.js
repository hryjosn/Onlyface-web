import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { homeContent1, homeContent2, homeContent3 } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";

import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Onlyface - Where Beauty Meets Approval!</title>
        <meta
          name="description"
          content="Onlyface is a revolutionary app that redefines social networking through the power of beauty and community approval."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Onlyface Benefits"
        title=" Why should you use this app">
        Unlock a world of authentic connections on Onlyface, where your unique beauty opens the door to meaningful relationships. Sign up today with just a selfie, enter our curated community, and experience connections that matter. Our exclusive approval system, where more than some of our vibrant community gives the green light, ensures you join a network of good-looking individuals who appreciate genuine connections. Embrace your beauty and find your tribe – Onlyface, where real connections begin.
      </SectionTitle>
      <Benefits data={homeContent1} />
      <Benefits imgPos="right" data={homeContent2} />
      <Benefits data={homeContent3} />
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle> */}
      {/* <Video /> */}
      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials /> */}
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;