import { Link } from "react-router-dom";
import './Navigation.css'
export default function NavigationBar() {
  return (

    <nav  className="nav nav-box">
      
      <div className="linck">
      <Link to='/' > Главная страница </Link>        
      </div>
      
      <div  className="linck">
      <Link to='/login' > Авторизация </Link>        
      </div>
      
      <div className="linck">
      <Link  to='/registration' > Регистрация </Link>        
      </div>

      <div className="linck">
      <Link  to='/game' > Играть </Link>        
      </div>

    </nav>

  )
}
