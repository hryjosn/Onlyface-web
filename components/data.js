import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import stepOneImg from "../public/img/deleteAccountStep/step1.png";
import stepTwoImg from "../public/img/deleteAccountStep/step2.png";
import stepThreeImg from "../public/img/deleteAccountStep/step3.png";
import stepFourImg from "../public/img/deleteAccountStep/step4.png";

const benefitOne = {
  title: "Step 1",
  desc: "Click the expand button in the upper right corner.",
  image: stepOneImg,
};

const benefitTwo = {
  title: "Click setting",
  desc: "Click the settings button below.",
  image: stepTwoImg,
};
const benefitThree = {
  title: "Click Delete Account",
  desc: "Click the 'Delete Account' red text below.",
  image: stepThreeImg,
};
const benefitFour = {
  title: "Confirm deletion",
  desc: "After clicking 'Yes,' your account will be temporarily deactivated. After 30 days, your account and related activities will be automatically deleted.",
  image: stepFourImg,
};

export { benefitOne, benefitTwo, benefitThree, benefitFour };
