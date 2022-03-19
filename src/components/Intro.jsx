import { useRef } from "react";

const Intro = ({setIntro, setUsername}) => {
    
    const inputRef = useRef();

    const handleButton = () => {
        inputRef.current.value && setUsername(inputRef.current.value);
        setIntro(true)
    }

    return (
        <div className="container">

            <div className="title">
                <h1 className="game-title">Game</h1>
                <p>Welcome</p>
            </div>

            <div className="input">
                <label htmlFor="name">Gamer Name</label>
                <input
                    id="name"
                    placeholder="Set Your Name"
                    ref={inputRef}
                />
            </div>
            
            <div className="btn">
                <button 
                    className="start-btn" 
                    onClick={() => {
                        handleButton()
                        setIntro(false)
                    }}>
                    Start Game!
                </button>
            </div>

            <div className="developed">
                <p>Developed By: <span>Rene Abadia</span></p>
            </div>
            
        </div>
    )
}

export default Intro