import Questions from "./Questions"
import Finish from "./Finish"
import VeryHard from "./VeryHard"
import {useState} from 'react'
import Image from '../img/Vegeta.png'

const Hard = ({amount, setAmount, userName}) => {

    // Use States
    const [isFinish, setIsFinish] = useState(false)
    const [wonQuestion, setIWonQuestion] = useState(false)

    // Variables
    const random = Math.floor(Math.random()*(4-0+1)+0)
    console.log(random)
    const questionPrice = 400

    // Very Easy Level Questions
    const question_1 = new Questions ('Youtuber con más subscriptores:', 'Epa Colombia', 'La Liendra', 'PewDiePie', 'Luisito Comunica', 'PewDiePie', 'retire')
    const question_2 = new Questions ('Sabio refrán: El que no tiene más...', '... pide prestado', '... con su mujer se acuesta', '... lo reportan en Datacrédito', '... compra fiado.', '... con su mujer se acuesta', 'retire')
    const question_3 = new Questions ('¿Por qué se suicidió Romeo?', 'Escuchó a Bad Bunny', 'Ganó El Balotó y perdió el boelto', 'Creyó que Julieta había muerto', 'Invirtió en DMG', 'Creyó que Julieta había muerto', 'retire')
    const question_4 = new Questions ('¿Cómo se llaman los deportistas que practican Judo?', 'Ninjas', 'Paracos', 'Judokas', 'Neas', 'Judokas', 'retire')
    const question_5 = new Questions ('¿Cómo perder dinero rápidamente?:', 'Prestar dinero a un familiar', 'Invertir en multinivel', 'Pagar peaje', 'Todas las anteriores', 'Todas las anteriores', 'retire')

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
        <VeryHard
            amount={amount}
            setAmount={setAmount}
            userName={userName}
        />    
    )

    return (
        <div className="card">

        <div>
            <p>Level: <span>Hard</span></p>
            <img src={Image} alt="Vegeta"/>
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

export default Hard