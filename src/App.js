import './App.css';
import Start from './Pages/Start';
import {Routes,Route} from 'react-router-dom'
import './Responsive.css'
import './reset.css'
import { useState } from 'react';
import VsCPU from './Pages/VsCPU';
import VsPlayer from './Pages/VsPlayer';
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
        <Route path='/TicTacToe/PlayerVsCPU'  element={<VsCPU />} />
        <Route path='/TicTacToe/PlayerVsPlayer' element={<VsPlayer />} />
      </Routes>
    </div>
    </>
  );
}
export default App;
