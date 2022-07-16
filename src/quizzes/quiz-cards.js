import {
  armstrongQuiz,
  coleridgeQuiz,
  fitzgeraldQuiz,
  gillespieQuiz,
} from "./quiz-exports";
import {
  holidayQuiz,
  andersonQuiz,
  charlesQuiz,
  simoneQuiz,
} from "./quiz-exports";
const quizCards = [
  {
    name: "Louis Armstrong",
    image: "/images/Louis_Armstrong.jpg",
    alt: "Louis Armstrong",
    bio: "https://kids.britannica.com/kids/article/Louis-Armstrong/352783",
    quiz: "/armstrongquiz",
    questions: armstrongQuiz,
  },
  {
    name: "Ella Fitzgerald",
    image: "/images/Ella_Fitzgerald.jpg",
    alt: "Ella Fitzgerald",
    bio: "https://kids.britannica.com/kids/article/Ella-Fitzgerald/353131",
    quiz: "/fitzgeraldquiz",
    questions: fitzgeraldQuiz,
  },
  {
    name: "Samuel Coleridge-Taylor",
    image: "/images/Coleridge-Taylor_Samuel.jpg",
    alt: "Samuel Coleridge-Taylor",
    bio: "https://wiki.kidzsearch.com/wiki/Samuel_Coleridge-Taylor",
    quiz: "/coleridgequiz",
    questions: coleridgeQuiz,
  },
  {
    name: "Nina Simone",
    image: "/images/NinaSimone.jpg",
    alt: "Nina Simone",
    bio: "https://wiki.kidzsearch.com/wiki/Nina_Simone",
    quiz: "/simonequiz",
    questions: simoneQuiz,
  },
  {
    name: "Ray Charles",
    image: "/images/RayCharles.jpg",
    alt: "Ray Charles",
    bio: "https://kids.kiddle.co/Ray_Charles",
    quiz: "/charlesquiz",
    questions: charlesQuiz,
  },
  {
    name: "Marian Anderson",
    image: "/images/Marian_Anderson.jpg",
    alt: "Marian Anderson",
    bio: "https://kids.britannica.com/students/article/Marian-Anderson/272858",
    quiz: "/andersonquiz",
    questions: andersonQuiz,
  },
  {
    name: "Dizzy Gillespie",
    image: "/images/dizzy_gillespie.jpg",
    alt: "Dizzy Gillespie",
    bio: "https://kids.britannica.com/students/article/Dizzy-Gillespie/324613",
    quiz: "/gillespiequiz",
    questions: gillespieQuiz,
  },
  {
    name: "Billie Holiday",
    image: "/images/Billie_Holiday_1947.jpg",
    alt: "Billie Holiday",
    bio: "https://kids.kiddle.co/Billie_Holiday",
    quiz: "/holidayquiz",
    questions: holidayQuiz,
  },
];
export default quizCards;
