export type Project = {
  name: string;
  description: string;
  href: string;
  kind?: string;
};

const projectUrl = (slug: string) => `https://dev.maroun-baydoun.com/${slug}`;

export const projects: Project[] = [
  {
    name: "mediaq",
    description: "Listen to media query updates in JavaScript.",
    href: projectUrl("mediaq"),
  },
  {
    name: "tiny-flex",
    description: "Flexbox layout for the modern web.",
    href: projectUrl("tiny-flex"),
  },
  {
    name: "reaflex",
    description: "Easy Flexbox in React.",
    href: projectUrl("reaflex"),
  },
  {
    name: "react-appear-in",
    description: "Make React components appear sometime in the future.",
    href: projectUrl("react-appear-in"),
  },
  {
    name: "evented",
    description: "Fire and listen to events in JavaScript.",
    href: projectUrl("evented"),
  },
  {
    name: "new-hope",
    description: "Esperanto tokenizer.",
    href: projectUrl("new-hope"),
  },
  {
    name: "youtube-controller-extension",
    description: "Control Youtube videos from any web page.",
    href: projectUrl("youtube-controller-extension"),
    kind: "Browser extension",
  },
  {
    name: "zikra",
    description: "Putting the pieces back together.",
    href: "https://zikra-game.netlify.app/",
    kind: "Game",
  },
];
