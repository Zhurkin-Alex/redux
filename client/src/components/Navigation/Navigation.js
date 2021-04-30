import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../../redux/store/store";
import './Navigation.css'
export default function NavigationBar() {

const state = useSelector((store) => store.AlexReducer.user ? store.AlexReducer.user.UserPlay : store )


  return (

    <nav  className="nav nav-box">
      
      {/* <div className="linck">
      <Link className="linckBtn" to='/' > Главная страница </Link>        
      </div> */}
  
      <div  className="linck">
      <Link className="linckBtn" to='/login' > Авторизация </Link>        
      </div>
      <div className="linck">
      <Link className="linckBtn"  to='/registration' > Регистрация </Link>        
      </div>
  

      <div className="linck">
      <Link className="linckBtn" to='/game' > Играть </Link>        
      </div>

      <div style={{fontSize: '20pt', color: 'aquamarine', marginRight: '50px'}} >
        {state ? state.name : null}
      </div>

      <div style={{fontSize: '20pt', color: 'white'}} >
        Колличество очков:  {state ? state.points : null}

      </div>

    </nav>

  )
}
