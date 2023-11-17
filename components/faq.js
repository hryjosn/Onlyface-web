import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How does Onlyface work?",
    answer: "Onlyface is a social networking app where users connect based on their physical appearance. Upon sign-up, users upload a selfie photo and enter a pending status. To become fully active, more than 1/3 of the total users must approve their photo.",
  },
  {
    question: "What is the purpose of the pending status?",
    answer: "The pending status allows existing users to vote on new members' photos, ensuring that the community maintains certain standards of attractiveness.",
  },
  {
    question: "What kind of photo should I upload for my profile?",
    answer:
      "Choose a high-quality selfie that accurately represents your appearance. Ensure good lighting and avoid filters or heavily edited photos.",
  },
  {
    question: "How long does it take to get approval from the community?",
    answer:
      "The approval process depends on the number of users and how quickly they vote. It may vary, but we aim for a timely and fair process.",
  },
  {
    question: "What happens if I don't get enough votes for approval?",
    answer:
      "If you don't receive enough votes, you will remain in pending status. You can continue to engage with the community and try again.",
  },
];

export default Faq;