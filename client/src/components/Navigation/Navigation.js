import { Link } from "react-router-dom";

export default function NavigationBar() {
  return (

    <nav  >
      
      <div>
      <Link to='/' > Главная страница </Link>        
      </div>
      
      <div >
      <Link to='/login' > Авторизация </Link>        
      </div>
      
      <div>
      <Link  to='/registration' > Регистрация </Link>        
      </div>

      <div>
      <Link  to='/game' > Играть </Link>        
      </div>

    </nav>

  )
}
