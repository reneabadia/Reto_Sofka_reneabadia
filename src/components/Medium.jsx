import Questions from "./Questions"
import Finish from "./Finish"
import Hard from "./Hard"
import {useState} from 'react'
import Image from '../img/Piccolo.png'

const medium = ({amount, setAmount, userName}) => {

    // Use States
    const [isFinish, setIsFinish] = useState(false)
    const [wonQuestion, setIWonQuestion] = useState(false)

    // Variables
    const random = Math.floor(Math.random()*(4-0+1)+0)
    console.log(random)
    const questionPrice = 300

    // Very Easy Level Questions
    const question_1 = new Questions ('Mejor Universidad para developer training:', 'Harvard', 'MIT', 'Sofka U', 'Yale', 'Sofka U', 'retire')
    const question_2 = new Questions ('Lenguaje de bajo nivel:', 'Reggaeton', 'JavaScript', 'Guaracha', 'Assembler', 'Assembler', 'retire')
    const question_3 = new Questions ('Forma de pasar datos entre componentes de ReactJS:', 'Por e-mail', 'Con props', 'Por telepatía', 'Con señales de humo', 'Con props', 'retire')
    const question_4 = new Questions ('Qué es herencia en POO:', 'Lo que pelean los tíos', 'Relación entre clases abstractas', 'Lo que no se hurta', 'La finca del abuelo', 'Relación entre clases abstractas', 'retire')
    const question_5 = new Questions ('¿A qué se dedica un programador?', 'Procastinar', 'Convertir café en código', 'Jugar Freefire', 'No sé', 'Convertir café en código', 'retire')

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
        <Hard
            amount={amount}
            setAmount={setAmount}
            userName={userName}
        />    
    )

    return (
        <div className="card">

        <div>
            <p>Level: <span>Medium</span></p>
            <img src={Image} alt="Piccolo"/>
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

export default medium