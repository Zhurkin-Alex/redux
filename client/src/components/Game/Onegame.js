import { Link } from 'react-router-dom';
import './game.css';
import Onecard from './Onecard';

export default function Onegame({questions}) {
  return (
    {questions} ? 
    <div className='rowdiv' style= {{display: 'flex', backgroundColor: 'tomato'}}>
      {questions.map(oneQue => {
        return (
        <div className="onegame" >
          <Link to={`/games/${oneQue._id}`} >
          <div>{oneQue.points}</div>
         </Link>
         </div>
        )
      })}
    </div>
   : null
   )
}
