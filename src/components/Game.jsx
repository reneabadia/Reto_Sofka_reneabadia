import VeryEasy from './VeryEasy'
import { useState } from 'react'

const Game = ({userName}) => {

    const [amount, setAmount] = useState(0)

    return (
        <div className='container'>
            <VeryEasy
                amount={amount}
                setAmount={setAmount}
                userName={userName}
            />
        </div>
    )
}

export default Game