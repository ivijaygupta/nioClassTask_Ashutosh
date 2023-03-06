import { MathJax } from 'better-react-mathjax';
import {useEffect, useState} from 'react';
import TotalQuestions from './TotalQuestions';
import './questionsScreen.css';
import Loader from './Loader';

function QuestionsScreen(){

// -----------------------------Get Active question number---------------------------
    const [activeQuestion, setActiveQuestion] = useState(1);

    const [queryParameter, setQueryParameter] = useState(0); 

// ------------------------------------Buttons onclick handling----------------------
    const handleNext = () => {
        if(activeQuestion<TotalQuestions?.length){
            setActiveQuestion((prevActiveQuestion) => prevActiveQuestion + 1);
            setQueryParameter((prevActiveQuestion) => prevActiveQuestion + 1);
        }
        
      };
    
      const handleBack = () => {
        setActiveQuestion((prevActiveQuestion) => prevActiveQuestion >1 ? (prevActiveQuestion -1 ) : 1);
        setQueryParameter((prevActiveQuestion) => prevActiveQuestion - 1);
      };

// -------------------------------------Fetch Question from Api-----------------------------------

      //----------------------Loader for no data--------------------
      const [loading, setLoading] = useState(false);
      
      const [question, setQuestion] = useState("");

      useEffect(() => {
        const fetchQuestion = async () => {
            try{
                setLoading(true);
                const getQuestion = await fetch(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${TotalQuestions[queryParameter]}`).then((getQuestion) => getQuestion.json());

                setQuestion(getQuestion[0]?.Question);
                setLoading(false);
            }

            catch(err){
                console.log(err);
            }
        };

        fetchQuestion();

      },[queryParameter])

    return(
        <>
        <div className = "questions-screen-wrapper">
        <header>
            <h1 className="title">Mathematics Questions</h1>
            <h3 className="qestions-status">Qestions <span>{activeQuestion}</span><span>/</span><span>{TotalQuestions?.length}</span></h3>
        </header>
        <main>
            <div className = "questions-display-container">
                <MathJax>
                    {loading ? (<Loader />) : (<p>{question}</p>)}
                </MathJax>
            </div>
            <div className= "qestions-navigation">
                <button className="btn" disabled={activeQuestion ===1} onClick={handleBack}>Back</button>
                <button className="btn" disabled={activeQuestion === TotalQuestions?.length} onClick={handleNext}>Next</button>
            </div>
        </main>
        </div>
        </>
    );
}
export default QuestionsScreen;