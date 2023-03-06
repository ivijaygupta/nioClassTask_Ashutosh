import {MathJaxContext} from 'better-react-mathjax';
import './App.css';
import QuestionsScreen from './components/QuestionsScreen';

function App() {

  return (
    <>
      <MathJaxContext>
        <QuestionsScreen />
      </MathJaxContext>
    </>
  );
}

export default App;
