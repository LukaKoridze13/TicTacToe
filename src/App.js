import './App.css';
import Start from './Pages/Start';
import {Routes,Route} from 'react-router-dom'
import './reset.css'
import { useState } from 'react';
function App() {
  const [mark,setMark] =  useState()
  const [mode,setMode] = useState()
  function marking(x){
    setMark(x)
  }
  function moding(x){
    setMode(x)
  }
  console.log(mark,mode)
  return (
    <>
    <div className="container">
      <Routes>
        <Route path='/TicTacToe' element={<Start mark={marking} mode={moding} />} />
      </Routes>
    </div>
    </>
  );
}
export default App;
