import Image from "next/image";
import Container from "./container";
import Astro from "../public/img/Astro.png";
import Rogue from "../public/img/Rogue.png";
import Link from "next/link";
const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Where Beauty Meets Approval!
            </h1>
           

            <div className="flex items-start gap-2 my-6 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <div className="flex-1">
                <Link
                  href={
                    "https://play.google.com/store/apps/details?id=com.onlyface"
                  }
                  target="_blank"
                >
                  <Image
                    src={"https://image.onlyface.app/Google-Play-Icon.png"}
                   
                   width={500}
                   height={500}
                    alt="googlePlayIcon"
                    
                  />
                </Link>
              </div>
              <div className="flex-1">
                <Link
                  href={"https://apps.apple.com/pl/app/onlyface/id6467753501"}
                  target="_blank"
                >
                  <Image
                    src={"https://image.onlyface.app/App-Store-Icon-new.png"}
                    width={500}
                    height={500}
                    alt="appStoreIcon"
                    className=""
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          
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
              src={"https://image.onlyface.app/Astro.webp"}
              width="616"
              height="700"
              className={"object-cover hidden dark:block"}
              alt="Hero Illustration"
            />
          
        </div>
      </Container>
    </>
  );
};

export default Hero;
