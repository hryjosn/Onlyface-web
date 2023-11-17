import Image from "next/image";
import Container from "./container";
import Astro from "../public/img/Astro.png";
import Rogue from "../public/img/Rogue.png";
import appStoreIcon from "../public/img/App-Store-Icon.png"
import googlePlayIcon from "../public/img/Google-Play-Icon.png"
import Link from "next/link"
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

            <div className="flex items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link href={'https://play.google.com/store/apps/details?id=com.onlyface'} target="_blank">
                <Image
                src={googlePlayIcon}
                width="1000"
                height="1000"
                alt="googlePlayIcon"
                className="w-[200px] h-[205px]"
              />
              </Link>
              <Link href={'https://apps.apple.com/pl/app/onlyface/id6467753501'} target="_blank">
                <Image
                src={appStoreIcon}
                width="1000"
                height="1000"
                alt="appStoreIcon"
                className="w-[200px] h-[205px]"
              />
              </Link>
           
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