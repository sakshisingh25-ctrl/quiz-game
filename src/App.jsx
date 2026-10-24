import reactLogo from "./assets/ChatGPT Image Oct 7, 2026, 10_40_27 AM.png";
import { useState } from "react";
export default function App() {
  const [screen, setScreen] = useState("start");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState("");
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [name, setName] = useState("");
  const correctAnswers = [
    "JavaScript XML",
    "useState",
    "<Component props = {value} />",
    "setState{}"
  ];
  let questionNumber = 0;

if (screen === "quiz") {
  questionNumber = 1;
} else if (screen === "quiz2") {
  questionNumber = 2;
} else if (screen === "quiz3") {
  questionNumber = 3;
} else if (screen === "quiz4") {
  questionNumber = 4;
} else if (screen === "quiz5") {
  questionNumber = 5;
}

const progress = (questionNumber / 4) * 100;
function handleSaveScore() {
   const newScore={
    score : score
   };
   localStorage.setItem("highScores",JSON.stringify(newScore))
   setName("")
   console.log("Score saved:", newScore); 
}
  return (
    <div className="App">
      {screen === "start" && (
        <>
          <div className="header">
            <div className="header-left">
              <img className='photo' src={reactLogo}
                alt="React Logo" />
              <h1>React Quiz</h1>
            </div>
            <h3>Test your react knowledge</h3>
          </div>
          <div className="body">
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvf0fbp1-PKq8XI_FbYk80JM0N4EXWx50HXl-j_q7giA&s=10' />
            <h3> 5 Questions . Multiple Choice . learn & Grow</h3>
            <button className="start-button" onClick={() => setScreen("quiz")}>Start Quiz ➡️</button>
          </div>
        </>
      )}
      {screen === "quiz" && (
        <div className="quiz-page">
          <div className="quiz-header">
            <h2>⚙️ React Quiz</h2>
            <h3>score: 0</h3>
          </div>
          <div className="progress-section">
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${progress}%` }}></div>
            </div>
            <span>1 / 4</span>
            <h2> What does JSX stand for ?</h2>
            <div className="can" id="div1">
              <input type="radio" name="answer" value="JavaScript XML" disabled={answered} onChange={(e) => setSelectedAnswer(e.target.value)} />
              <h3>JavaScript XML</h3>
            </div>
            <div className="can" id="div2">
              <input type="radio" name="answer" value="Java Syntax Extension" disabled={answered} onChange={(e) => setSelectedAnswer(e.target.value)} />
              <h3>Java Syntax Extension</h3>
            </div>
            <div className="can" id="div3">
              <input type="radio" name="answer" value="Json XML" disabled={answered} onChange={(e) => setSelectedAnswer(e.target.value)} />
              <h3>Json XML</h3>
            </div>
            <div className="can" id="div4">
              <input type="radio" name="answer" value="JavaScript Extension" disabled={answered} onChange={(e) => setSelectedAnswer(e.target.value)} />
              <h3>JavaScript Exptension</h3>
            </div>
            <h3>{result}</h3>
            <button className="button2" onClick={() => {
              if (selectedAnswer === correctAnswers[0]) {
                setResult("Correct ! ✅")
                setScore(score + 1)  
              } else {
                setResult("Wrong! ❌");
              }
              setAnswered(false);
              setSelectedAnswer("");
              setScreen("quiz2")
            }}>Next➡️</button>
          </div>
        </div>
      )}
      {screen === "quiz2" && (
        <div className="quiz-header2">
          <div className="quiz-header">
            <h2>⚙️ React Quiz</h2>
            <h3>score: 0</h3>
          </div>
          <div className="progress-section">
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${progress}%` }}></div>
            </div>
            <span>2 / 4</span>
            <h2> Which hook is used to manage state in a functional component ?</h2>
            <div className="can" id="div1">
              <input type="radio" name="answer" value="useEffect" disabled={answered} onChange={(e) => setSelectedAnswer(e.target.value)} />
              <h3>useEffect</h3>
            </div>
            <div className="can" id="div2">
              <input type="radio" name="answer" value="useState" disabled={answered} onChange={(e) => setSelectedAnswer(e.target.value)} />
              <h3>useState</h3>
            </div>
            <div className="can" id="div3">
              <input type="radio" name="answer" value="useContext" disabled={answered} onChange={(e) => setSelectedAnswer(e.target.value)} />
              <h3>useContext</h3>
            </div>
            <div className="can" id="div4">
              <input type="radio" name="answer" value="useReducer" disabled={answered} onChange={(e) => setSelectedAnswer(e.target.value)} />
              <h3>useReducer</h3>
            </div>
            <h3>{result}</h3>
            <button className="button2" onClick={() => {
              if (selectedAnswer === correctAnswers[1]) {
                setResult("Correct ! ✅");
                setScore(score + 1)  
              } else {
                setResult("Wrong! ❌");
              }
              setAnswered(false);
              setSelectedAnswer("");
              setScreen("quiz3")
            }}>Next➡️</button>
          </div>
        </div>
      )}
      {screen === "quiz3" && (
        <div className="quiz-header3">
          <div className="quiz-header">
            <h2>⚙️ React Quiz</h2>
            <h3>score: 0</h3>
          </div>
          <div className="progress-section">
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${progress}%` }}></div>
            </div>
            <span>3 / 4</span>
            <h2> What is the correct way to pass props to a component ?</h2>
            <div className="can" id="div1">
              <input type="radio" name="answer" value="<Component props = {value} />" disabled={answered} onChange={(e) => setSelectedAnswer(e.target.value)} />
              <h3>Component props = &#123;value&#125;</h3>
            </div>
            <div className="can" id="div2">
              <input type="radio" name="answer" value="<Component props = {props} />" disabled={answered} onChange={(e) => setSelectedAnswer(e.target.value)} />
              <h3>Component props = &#123;props&#125;</h3>
            </div>
            <div className="can" id="div3">
              <input type="radio" name="answer" value="<Component {props} />" disabled={answered} onChange={(e) => setSelectedAnswer(e.target.value)} />
              <h3>component &#123;props&#125;</h3>
            </div>
            <div className="can" id="div4">
              <input type="radio" name="answer" value="<Component props:value />" disabled={answered} onChange={(e) => setSelectedAnswer(e.target.value)} />
              <h3>useReducer</h3>
            </div>
            <h3>{result}</h3>
            <button className="button2" onClick={() => {
              if (selectedAnswer === correctAnswers[2]) {
                setResult("Correct ! ✅");
                setScore(score + 1)  
              } else {
                setResult("Wrong! ❌");
              }
              setAnswered(false);
              setSelectedAnswer("");
              setScreen("quiz4")
            }}>Next➡️</button>
          </div>
        </div>
      )}
      {screen === "quiz4" && (
        <div className="quiz-header4">
          <div className="quiz-header">
            <h2>⚙️ React Quiz</h2>
            <h3>score: 0</h3>
          </div>
          <div className="progress-section">
            <div className="progress-bar">
              <div className="progress-fill" style={{width: `${progress}%` }}></div>
            </div>
            <span>4 / 4</span>
            <h2> Which method is used to update state based on the previous state ?</h2>
            <div className="can" id="div1">
              <input type="radio" name="answer" value="setState{}" disabled={answered} onChange={(e) => setSelectedAnswer(e.target.value)} />
              <h3>setState&#123;&#125;</h3>
            </div>
            <div className="can" id="div2">
              <input type="radio" name="answer" value="updateState{}" disabled={answered} onChange={(e) => setSelectedAnswer(e.target.value)} />
              <h3>updateState&#123;&#125;</h3>
            </div>
            <div className="can" id="div3">
              <input type="radio" name="answer" value="setPreviousState{}" disabled={answered} onChange={(e) => setSelectedAnswer(e.target.value)} />
              <h3>setPreviousState&#123;&#125;</h3>
            </div>
            <div className="can" id="div4">
              <input type="radio" name="answer" value="useState{}" disabled={answered} onChange={(e) => setSelectedAnswer(e.target.value)} />
              <h3>useState&#123;&#125;</h3>
            </div>
            <h3>{result}</h3>
            <button className="button2" onClick={() => {
              if (selectedAnswer === correctAnswers[3]) {
                setResult("Correct ! ✅");
                setScore(score + 1)  
              } else {
                setResult("Wrong! ❌");
              }
              setAnswered(false);
              setSelectedAnswer("");
              setScreen("quiz5")
            }}>Next➡️</button>
          </div>
        </div>
      )}
      {screen === "quiz5" && (
        <div className="endPage">
          <img  className="center" src="data:image/jpeg;base64,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" />
           <h1>Quiz Completed</h1>
           <h3>Your Score</h3>
           <h1>{score}/4</h1>
           <div className="data storing">
           <input type="text" placeholder="Enter your name" value={name} onChange={(e)=> setName(e.target.value)}/>
           <button className="final2" onClick = {handleSaveScore}>save score</button>
           </div>
           <div className="button-container">
           <button  className="final" onClick={()=> {setScreen("start"); setScore(0); setResult('') }}>Restart Quiz</button>
           <button className="final"  onClick={()=> {setScreen("highScores")}}> 🏆 High Score</button>
           </div>
        </div>
      )};
      {screen === "highScores" && (
  <div className="high-score-page">
    <h1>🏆 High Scores</h1>
    <p>High score page</p>
    <p>Name : {name}</p>
    <p>Score : {score}/4</p>
    <button onClick={() => setScreen("quiz5")}>
      Back
    </button>
  </div>
)}
      </div>
  );
}

 
