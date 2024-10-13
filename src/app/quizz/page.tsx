"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProgressBar from "@/components/ui/progressBar";
import { ChevronLeft, X } from "lucide-react";
import ResultCard from "./ResultCard";
import QuizzSubmission from "./QuizzSubmission";

const questions = [
  {
    questionText: "The Cardinality of a fuzzy set is?",
    answers: [
      { answerText: "0", isCorrect: false, id: 1 },
      { answerText: "finite", isCorrect: true, id: 2 },
      { answerText: "infinite", isCorrect: false, id: 3 },
      { answerText: "none", isCorrect: false, id: 4 }
    ]
  },
  {
    questionText: "What is the form of Fuzzy logic?",
    answers: [
      { answerText: "Two-valued logic", isCorrect: false, id: 1 },
      { answerText: "Crisp set logic", isCorrect: false, id: 2 },
      { answerText: "JMany valued logic", isCorrect: true, id: 3 },
      { answerText: "Binary set logic", isCorrect: false, id: 4 }
    ]
  },
  {
    questionText: "The truth values of traditional set theory is ____________ and that of fuzzy set is __________?",
    answers: [
      { answerText: "Either 0 or 1, between 0 & 1", isCorrect: true, id: 1 },
      { answerText: "Between 0 & 1, either 0 or 1", isCorrect: false, id: 2 },
      { answerText: "Between 0 & 1, between 0 & 1", isCorrect: false, id: 3 },
      { answerText: "Either 0 or 1, either 0 or 1", isCorrect: false, id: 4 }
    ]
  },
  {
    questionText: "The room temperature is hot. Here the hot (use of linguistic variable is used) can be represented by _______",
    answers: [
      { answerText: "Fuzzy Set", isCorrect: true, id: 1 },
      { answerText: "Crisp Set", isCorrect: false, id: 2 },
      { answerText: "Fuzzy & Crisp Set", isCorrect: false, id: 3 },
      { answerText: "None of the mentioned", isCorrect: false, id: 4 }
    ]
  },
  {
    questionText: "The values of the set membership is represented by ___________",
    answers: [
      { answerText: "Discrete Set", isCorrect: false, id: 1 },
      { answerText: "Degree of truth", isCorrect: true, id: 2 },
      { answerText: "Probabilities", isCorrect: false, id: 3 },
      { answerText: "Both Degree of truth & Probabilities", isCorrect: false, id: 4 }
    ]
  },
  {
    questionText: "Fuzzy Set theory defines fuzzy operators. Choose the fuzzy operators from the following.",
    answers: [
      { answerText: "AND", isCorrect: false, id: 1 },
      { answerText: "OR", isCorrect: false, id: 2 },
      { answerText: "NOT", isCorrect: false, id: 3 },
      { answerText: "Above All", isCorrect: true, id: 4 }
    ]
  },
  {
    questionText: "There are also other operators, more linguistic in nature, called __________ that can be applied to fuzzy set theory",
    answers: [
      { answerText: "Hedges", isCorrect: true, id: 1 },
      { answerText: "Lingual Variable", isCorrect: false, id: 2 },
      { answerText: "Fuzz Variable", isCorrect: false, id: 3 },
      { answerText: "None of the mentioned", isCorrect: false, id: 4 }
    ]
  },
  {
    questionText: "Fuzzy logic is usually represented as ___________",
    answers: [
      { answerText: "IF-THEN-ELSE rules", isCorrect: false, id: 1 },
      { answerText: "IF-THEN rules", isCorrect: true, id: 2 },
      { answerText: "Both IF-THEN-ELSE rules & IF-THEN rules", isCorrect: false, id: 3 },
      { answerText: "None of the mentioned", isCorrect: false, id: 4 }
    ]
  },
  {
    questionText: "______________ is/are the way/s to represent uncertainty",
    answers: [
      { answerText: "Fuzzy Logic", isCorrect: false, id: 1 },
      { answerText: "Probability", isCorrect: false, id: 2 },
      { answerText: "Entropy", isCorrect: false, id: 3 },
      { answerText: "All of the mentioned", isCorrect: true, id: 4 }
    ]
  },
  {
    questionText: "____________ are algorithms that learn from their more complex environments (hence eco) to generalize, approximate and simplify solution logic.",
    answers: [
      { answerText: "Fuzzy Relational DB", isCorrect: false, id: 1 },
      { answerText: "Ecorithms", isCorrect: false, id: 2 },
      { answerText: "Fuzzy Set", isCorrect: true, id: 3 },
      { answerText: "None of the mentioned", isCorrect: false, id: 4 }
    ]
  },
  {
    questionText: "Which of the following is offered by the Bayesian network?",
    answers: [
      { answerText: "Partial description of the domain", isCorrect: false, id: 1 },
      { answerText: "A complete description of the domain", isCorrect: true, id: 2 },
      { answerText: "A complete description of the problem", isCorrect: false, id: 3 },
      { answerText: "None of the above", isCorrect: false, id: 4 }
    ]
  },
  {
    questionText: "A perceptron can be defined as _________",
    answers: [
      { answerText: "A double layer auto-associative neural network", isCorrect: false, id: 1 },
      { answerText: "A neural network with feedback", isCorrect: false, id: 2 },
      { answerText: "An auto-associative neural network", isCorrect: false, id: 3 },
      { answerText: "A single layer feed-forward neural network with pre-processing", isCorrect: true, id: 4 }
    ]
  },
  {
    questionText: "Which of the following condition can directly influence a variable by all the others?",
    answers: [
      { answerText: "Fully connected", isCorrect: true, id: 1 },
      { answerText: "Local connected", isCorrect: false, id: 2 },
      { answerText: "Partially connected", isCorrect: false, id: 3 },
      { answerText: "None of the above", isCorrect: false, id: 4 }
    ]
  },
  {
    questionText: "What is meant by an auto-associative neural network?",
    answers: [
      { answerText: "A neural network including feedback", isCorrect: true, id: 1 },
      { answerText: "A neural network containing no loops", isCorrect: false, id: 2 },
      { answerText: "A neural network having a single loop", isCorrect: false, id: 3 },
      { answerText: "A single layer feed-forward neural network containing feedback", isCorrect: false, id: 4 }
    ]
  },
  {
    questionText: "Which of the following is not the promise of an artificial neural network?",
    answers: [
      { answerText: "It can survive the failure of some nodes", isCorrect: false, id: 1 },
      { answerText: "It can handle noise", isCorrect: false, id: 2 },
      { answerText: "It can explain the result", isCorrect: true, id: 3 },
      { answerText: "It has inherent parallelism", isCorrect: false, id: 4 }
    ]
  },
];

export default function Home() {
  const [started, setStarted] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleNext = () => {
    if (!started) {
      setStarted(true);
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setSubmitted(true);
      return;
    }

    setSelectedAnswer(null);
    setIsCorrect(null);
  }

  const handleAnswer = (answer: any) => {
    setSelectedAnswer(answer.id);
    const isCurrentCorrect = answer.isCorrect;
    if (isCurrentCorrect) {
      setScore(score + 1);
    }
    setIsCorrect(isCurrentCorrect);
  }

  const scorePercentage: number = Math.round((score / questions.length) * 100);

  if (submitted) {
    return (
      <QuizzSubmission
        score={score}
        scorePercentage={scorePercentage}
        totalQuestions={questions.length}
      />
    )
  }

  return (
    <div className="flex flex-col flex-1">
      <div className="position-sticky top-0 z-10 shadow-md py-4 w-full">
        <header className="grid grid-cols-[auto,1fr,auto] grid-flow-col items-center justify-between py-2 gap-2">
          <Button size="icon" variant="outline"><ChevronLeft /></Button>
          <ProgressBar value={(currentQuestion / questions.length) * 100} />
          <Button size="icon" variant="outline">
            <X />
          </Button>
        </header>
      </div>
      <main className="flex justify-center flex-1">
        {!started ? <h1 className="text-3xl font-bold">Welcome to the quizz page👋</h1> : (
          <div>
            <h2 className="text-3xl font-bold">{questions[currentQuestion].questionText}</h2>
            <div className="grid grid-cols-1 gap-6 mt-6">
              {
                questions[currentQuestion].answers.map(answer => {
                  const variant = selectedAnswer === answer.id ? (answer.isCorrect ? "neoSuccess" : "neoDanger") : "neoOutline";
                  return (
                    <Button key={answer.id} variant={variant} size="xl" onClick={() => handleAnswer(answer)}><p className="whitespace-normal">{answer.answerText}</p></Button>
                  )
                })
              }
            </div>
          </div>
        )}
      </main>
      <footer className="footer pb-9 px-6 relative mb-0">
        <ResultCard isCorrect={isCorrect} correctAnswer={questions[currentQuestion].answers.find(answer => answer.isCorrect === true)?.answerText || ""} />
        <Button variant="neo" size="lg" onClick={handleNext}>{!started ? 'Start' : (currentQuestion === questions.length - 1) ? 'Submit' : 'Next'}</Button>
      </footer>
    </div>
  )
}