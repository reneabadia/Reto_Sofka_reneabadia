import Intro from './components/Intro'
import Game from './components/Game'
import { useState } from 'react'

const App = () => {

  const [userName,setUsername] = useState('')
  const [intro, setIntro] = useState(true)

  console.log(userName)

  return (
    <div>
      { intro ? <Intro setIntro={setIntro} setUsername={setUsername} /> : <Game setIntro={setIntro} userName={userName}/> }
    </div>
  )
}

export default App
