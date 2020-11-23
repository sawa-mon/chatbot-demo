import React, {useState, useEffect, useCallback} from 'react';
import defaultDataset from "./dataset";
import './assets/styles/style.css'
import { AnswersList, Chats } from "./components/index"
import FormDialog from './components/Forms/FormDialog';
import { Loading } from './components/Loading';


const App = () => {
    const [answers, setAnswers] = useState([]);
    const [chats, setChats] = useState([]);
    const [currentId, setCurrentId] = useState("init");
    const dataset = defaultDataset;
    const [open, setOpen] = useState(false);
    const [noneDisplay, setNoneDisplay] = useState(false);

  const displayNextQuestion = (nextQuestionId, nextDataset) => {
      addChats({
        text: nextDataset.question,
        type: 'question'
      })

        setAnswers(nextDataset.answers)
        setCurrentId(nextQuestionId)
    }

  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true) {

      case (nextQuestionId === 'init'):
        setNoneDisplay(true);
        setTimeout(() => displayNextQuestion(nextQuestionId, dataset[nextQuestionId]), 1000);
        break;

      case (nextQuestionId === 'contact'):
        handleOpen();
        break;
      
      case (/^https:*/.test(nextQuestionId)):
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '_blank';
        a.click();
        break;

      default:
        addChats({ 
        text: selectedAnswer,
        type: 'answer'
        });

        setNoneDisplay(true);
        setTimeout(() => (
          displayNextQuestion(nextQuestionId, dataset[nextQuestionId])
          ),1200)
          break;
        }

  }

  const addChats = (chat) => {
    setChats(prevChats => {
      return [...prevChats, chat]
    })
    setNoneDisplay(false);
  }
  
  const handleOpen = () => {
    setOpen(true)
  };
  
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen]);
  
  useEffect(() => {
    const initAnswer = "";
    selectAnswer(initAnswer, currentId)
  },[]);
  
  
  useEffect(() => {
    const scrollArea = document.getElementById('scroll-area')
    if(scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  })

  return (
    <section className="c-section">
      <div className="c-box">
        <Chats chats={chats} />
        {!noneDisplay ? (
          <AnswersList answers={answers} select={selectAnswer} />
        ) : (
          <Loading/>
        )}
        <FormDialog open={open} handleOpen={handleOpen} handleClose={handleClose} />
      </div>
    </section>
    );
}

export default App