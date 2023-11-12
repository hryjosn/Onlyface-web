import Image from "next/image";
import Container from "./container";
import Astro from "../public/img/Astro.png";
import Rogue from "../public/img/Rogue.png";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Where Beauty Meets Approval!
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Join Onlyface for genuine connections that celebrate your unique beauty.
            </p>
            <p className="text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Upload a selfie, get approved by our vibrant community, and connect with like-minded individuals. Real connections, real people, real beauty.
            </p>

            <div className="flex flex-col items-start space-y-3 pt-6 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/Onlyface-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Download for Free
              </a>
             
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={Rogue}
              width="616"
              height="700"
              className={"object-cover dark:hidden"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
            <Image
              src={Astro}
              width="616"
              height="700"
              className={"object-cover hidden dark:block"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    
    </>
  );
}



export default Hero;