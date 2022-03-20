import Questions from "./Questions"
import Finish from "./Finish"
import Medium from "./Medium"
import {useState} from 'react'
import Image from '../img/Krillin.png'

const Easy = ({amount, setAmount, userName}) => {

    // Use States
    const [isFinish, setIsFinish] = useState(false)
    const [wonQuestion, setIWonQuestion] = useState(false)

    // Variables
    const random = Math.floor(Math.random()*(4-0+1)+0)
    console.log(random)
    const questionPrice = 200

    // Very Easy Level Questions
    const question_1 = new Questions ('Mejor físico teórico:', 'Albert Enstein', 'Sheldon Cooper', 'Stephen Hawking', 'Isaac Newton', 'Sheldon Cooper', 'retire')
    const question_2 = new Questions ('Mejor físico experimental:', 'Blas Pascal', 'Renato Descartes', 'Leonard Hofstadter', 'Galileo Galilei', 'Leonard Hofstadter', 'retire')
    const question_3 = new Questions ('Mejor camarera de Pasadena, California:', 'Penny Hofstadter', 'Mata Hari', 'Amy Farrah Flower', 'Marilyn Monroe', 'Penny Hofstadter', 'retire')
    const question_4 = new Questions ('Mejor ingeniero de la NASA:', 'Yuri Gagarin', 'Neil Amstrong', 'Elon Musk', 'Howard Wolowitz', 'Howard Wolowitz', 'retire')
    const question_5 = new Questions ('Mejor astrofísico indio', 'Rajesh Koothrappali', 'Mahatma Gandhi', 'Carl Sagan', 'Neil deGrasse Tyson', 'Rajesh Koothrappali', 'retire')

    // Array Of Questions
    const questions = [question_1, question_2, question_3, question_4,  question_5]


    // Functions

    const handleSubmit = (selected, isCorrect) => {
        
        if( selected === isCorrect){
            console.log('Es la respuesta correcta')
            setIWonQuestion(true)
            setAmount(amount + questionPrice)
        }else{
            console.log('No es la respuesta correcta')
            setIsFinish(true)
            setAmount(amount)
        }
    }

    if( isFinish ) return (
        <Finish
            amount={amount}
            userName={userName}
        />    
    )

    if( wonQuestion ) return (
        <Medium
            amount={amount}
            setAmount={setAmount}
            userName={userName}
        />    
    )

    return (
        <div className="card">

        <div>
            <p>Level: <span>Easy</span></p>
            <img src={Image} alt="Krilin"/>
        </div>

        <div>
        <div className="question-label">
            <h2>{questions[random].question}</h2>
        </div>

        <div className="question-data">
            
            <p>Question price: <span>${questionPrice}</span></p>
            <p>Amount: <span>${amount}</span></p>
        </div>

        <div>
            <button
                onClick={ ()=> handleSubmit(questions[random].answer1, questions[random].isCorrect)}>
                {questions[random].answer1}
            </button>
            <button
                onClick={ ()=> handleSubmit(questions[random].answer2, questions[random].isCorrect)}>
                {questions[random].answer2}
            </button>
            <button
                onClick={ ()=> handleSubmit(questions[random].answer3, questions[random].isCorrect)}>
                {questions[random].answer3}
            </button>
            <button
                onClick={ ()=> handleSubmit(questions[random].answer4, questions[random].isCorrect)}>
                {questions[random].answer4}
            </button>
            <hr/>
                <button
                    onClick={ ()=> handleSubmit(questions[random].retire, questions[random].isCorrect)}>
                    <p className="retire-btn">I Want to Retire</p>
                </button>
        </div>
        </div>

    </div>
    )

}

export default Easy