import Buttons from './Buttons/Buttons'
import style from './MainCount.module.css'
import Number from './Number/Number'

const MainCount =()=>{
    return(
        <div className={style.countContainer}>
            <Number/>
            <Buttons/>
        </div>
    )
}

export default MainCount