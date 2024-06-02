import step1 from "../../public/step1.jpg";
import step2 from "../../public/step2.jpg";
import step3 from "../../public/step3.jpg";
import step4 from "../../public/step4.jpg";

export const navLinks = [
  {
    href: "/",
    label: "Smart mailboxes",
  },
  {
    href: "/",
    label: "How it works",
  },
  {
    href: "/",
    label: "The app",
  },
  {
    href: "/",
    label: "About",
  },
];

export const procedures = [
  {
    title: "Order online, as much as you want.",
    image: step1,
    opacity: 1,
  },
  {
    title: "Get all the information in the app.",
    image: step2,
    opacity: 0,
  },
  {
    title: "Get notified of your delivery.",
    image: step3,
    opacity: 0,
  },
  {
    title: "Enjoy worryfree deliveries.",
    image: step4,
    opacity: 0,
  },
];

export const animate = {
  initial: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      duration: 0.7,
      ease: [0.165, 0.84, 0.44, 1],
    },
  },
};
