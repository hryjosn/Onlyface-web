import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Link from "next/link";
import Container from "../components/container";

import {
  benefitOne,
  benefitTwo,
  benefitThree,
  benefitFour,
} from "../components/data";
import Image from "next/image";

import Benefits from "../components/benefits";
import Footer from "../components/footer";

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
      <div className="w-full">
        <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
          <Link href="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
              <span>
                <Image
                  src="/img/logo.png"
                  alt="N"
                  width="40"
                  height="40"
                  className="w-10"
                />
              </span>
              <span>Onlyface</span>
            </span>
          </Link>
        </nav>
      </div>
      <Container
        className={`flex w-full flex-col mt-4 items-center justify-center text-center`}
      >
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          How to delete my account?
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Please follow the steps below to complete the account deletion
          process.
        </p>
      </Container>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitThree} />
      <Benefits imgPos="right" data={benefitFour} />

      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
