import Todo from './components/Todo'
import YoMomma from './components/YoMomma';
import Modal from './components/Modal';
import './App.css';
import React , {useState} from 'react';

function App() {
 const [showModal] = useState(false)
  
  return (
    <div>
          <YoMomma />
          <input type = 'text' onChange ={(event) => 
console.log(event.target.value)
          } />
          <button >Add todo</button>
    <div className = 'todo__wrapper'>
    <Todo title ='Finish Frontend Simplified'/>
    <Todo title = 'Finish Interview section'/>
    <Todo title = 'Land a 100k job'/>
    
  </div>
   {showModal && <Modal title = "Confirm Delete" />}
  </div>
  );
}


export default App;
