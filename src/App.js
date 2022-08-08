import './App.css';
import Start from './Pages/Start';
import {Routes,Route} from 'react-router-dom'
import './Responsive.css'
import './reset.css'
import { useState } from 'react';
import VsCPUX from './Pages/VsCPUX';
import VsPlayer from './Pages/VsPlayer';
import {Context} from './Context'
import VsCPUO from './Pages/VsCPUO';

function App() {
  const [mark,setMark] =  useState()
  const [mode,setMode] = useState()
  const [reset,setReset] = useState(false)
  function marking(x){
    setMark(x)
  }
  function moding(x){
    setMode(x)
  }
  function quit(){
    setMark(null)
    setMode(null)
  }
  return (
    <>
    <Context.Provider value={{quit: quit, mark:mark, setReset:setReset, reset:reset}} >
    <div className="container">
      <Routes>
        <Route path='/TicTacToe' element={<Start mark={marking} mode={moding} marker={mark} />} />
        <Route path='/TicTacToe/PlayerVsCPUX'  element={<VsCPUX player1={mark} />} />
        <Route path='/TicTacToe/PlayerVsCPUO'  element={<VsCPUO player1={mark} />} />
        <Route path='/TicTacToe/PlayerVsPlayer' element={<VsPlayer player1={mark} />} />
      </Routes>
    </div>
    </Context.Provider>
    </>
  );
}
export default App;
