import { MathJaxContext } from 'better-react-mathjax';
import QuestionsScreen from './components/QuestionsScreen';
import './App.css';


function App() {

  return (
    <>
      <MathJaxContext >
        <QuestionsScreen />
      </MathJaxContext>

    </>
  );
}

export default App;
