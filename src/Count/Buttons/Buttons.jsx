import style from './Buttons.module.css'

const Buttons =()=>{
    return(
        <div className={style.buttonContainer}>
            <button className={style.increaseButton}>Увеличить</button>
            <button className={style.decreaseButton}>Уменьшить</button>
            <button className={style.resetButton}>Сбросить</button>
        </div>
    )
}

export default Buttons