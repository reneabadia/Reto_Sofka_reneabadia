import Image from '../img/Mr_Satan.webp'

const Finish = ({amount, userName}) => {

    return (
        <div className='card'>
            <div>
                <h2>Game Over</h2>
                <img src={Image} alt="Mr Satan"  />
            </div>

            <div>
                <p>{userName}</p>
                <hr/>
                <p>You won an amount of: <span>${amount}</span> Dollars</p>
            </div>
            
        </div>
    )
}

export default Finish