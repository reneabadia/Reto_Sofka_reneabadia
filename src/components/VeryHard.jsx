import Questions from "./Questions"
import Finish from "./Finish"
import {useState} from 'react'
import Image from '../img/Broly.png'

const VeryHard = ({amount, setAmount, userName}) => {

    // Use States
    const [isFinish, setIsFinish] = useState(false)
    const [wonQuestion, setIWonQuestion] = useState(false)

    // Variables
    const random = Math.floor(Math.random()*(4-0+1)+0)
    console.log(random)
    const questionPrice = 500

    // Very Easy Level Questions
    const question_1 = new Questions ('Capital de Canada', 'Toronto', 'No Es', 'No Es', 'No Es', 'Toronto', 'retire')
    const question_2 = new Questions ('Capital de Colombia', 'No es', 'Bogota', 'No Es', 'Answer 4', 'Bogota', 'retire')
    const question_3 = new Questions ('Capital de Ecuador', 'No Es', 'No Es', 'Quito', 'No Es', 'Quito', 'retire')
    const question_4 = new Questions ('Capital de Jamica', 'No es', 'No Es', 'No Es', 'Kingstone', 'Kingstone', 'retire')
    const question_5 = new Questions ('Capital de USA', 'Washinton', 'No Es', 'No Es', 'No Es', 'Washinton', 'retire')

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
        <Finish
            amount={amount}
            userName={userName}
        />    
    )

    return (
        <div className="card">

        <div>
            <p>Level: <span>Very Hard</span></p>
            <img src={Image} alt="Broly"/>
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

export default VeryHard