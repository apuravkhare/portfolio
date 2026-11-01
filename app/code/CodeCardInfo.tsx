import { constructString } from "../util";
import CodeCard from "./CodeCard";

export default function allCodeCardInfos(): CodeCard[] {
  return [
    {
      title: "Websites",
      description: constructString(
        "While designing this site, I took care to make sure it renders well on most platforms, and is pleasing to the eye.",
        "For my previous portfolio, I took the opportunity to learn a new programming language, Elm, and wrote the website in it!",
        "It was a great experience learning the fundamentals of the language, and how it guarantees no runtime errors."),
      projectUrl: "https://apuravkhare.github.io/"
    },
    {
      title: "Revisiting Ad-hoc Polymorphism",
      description: constructString("Ad-hoc polymorphism is a type of polymorphism where different function definitions can be given the same name.",
        "Programming languages utilize constructs like Type classes and Object classes to provide a mechanism for implementing ad-hoc polymorphism",
        "I did my thesis constructing an interpreter for a programming language that implements ad-hoc polymorphism in a type system with type classes."),
        projectUrl: "https://repository.rit.edu/theses/11290/"
    },
    {
      title: "Code Wars",
      description: constructString("I love programming for fun and learning new programming languages.",
      "I'm in the top 7 percentile on the competitive coding website Code wars."),
      projectUrl: "https://www.codewars.com/users/apuravkhare"
    }
  ]
}