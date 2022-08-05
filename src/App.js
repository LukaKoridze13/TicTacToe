import './App.css';
import Start from './Pages/Start';
import {Routes,Route} from 'react-router-dom'
import './Responsive.css'
import './reset.css'
import { useState } from 'react';
import VsCPU from './Pages/VsCPU';
import VsPlayer from './Pages/VsPlayer';
import Quit from './Pages/Components/Quit';
import {Context} from './Context'

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
        <Route path='/TicTacToe' element={<Start mark={marking} mode={moding} />} />
        <Route path='/TicTacToe/PlayerVsCPU'  element={<VsCPU />} />
        <Route path='/TicTacToe/PlayerVsPlayer' element={<VsPlayer player1={mark} />} />
      </Routes>
    </div>
    </Context.Provider>
    </>
  );
}
export default App;
