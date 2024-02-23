import logo from './logo.svg';
import './App.css';
import { useState } from "react";


function App() {
  const [currentValue, setCurrentValue] = useState(''); 
  const[outPutValue , setOutPutValue]= useState('')
  const btn=['AC','DEL','/',
  '1','2','3','*',
  '4','5','6','+',
  '7','8','9','-',
  '.','0','='
]

const buttonActions=(label)=>{
  console.log("button clicked: ",label) 
  switch (label) {
    case '+':
    case '-':
    case '*':
    case '/':
      setCurrentValue(currentValue + label);
      break;
    case 'DEL':
      setCurrentValue(currentValue.slice(0, -1));
      setOutPutValue(outPutValue.slice(0, -1))
      break;
    case 'AC':
      setCurrentValue('');
      setOutPutValue('')
      break;
    case '=':
      try {
        setOutPutValue(eval(currentValue).toString());
      } catch (error) {
        setOutPutValue('Error');
      }
      break;
    default:
      setCurrentValue(currentValue + label);
  }
 
}
  return (
    <div className="calculator-grid">
      <div className='calculator-input'>
        <div className='pervious-value'>{currentValue}</div>
        <div className='current-value'>{outPutValue}</div>
      </div>
      {btn.map((label,index)=>(
        <button onClick ={()=>buttonActions(label)}className={(label==='AC'|| label==="=")? 'span-two':''}>{label}</button>
      ))}
    </div>
  );
}

export default App;
