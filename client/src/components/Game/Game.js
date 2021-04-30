import store from '../../redux/store/store';
import './game.css';
import Onegame from './Onegame';
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { addGame } from '../../redux/actions/actions';

export default function Game() {

  const state = useSelector((store) => store.rediserADD.games)

  useEffect(() => {
    async function findQuestions() {
      const questions = await fetch('/game')
      const gamesBase = await questions.json()
      store.dispatch(addGame(gamesBase))
      
    }
    findQuestions()
  }, [store])


  return (
    (state) ?
    <div className="gamebody" >
       
      <div className="gameframe" >
        {state.map( game => {
          return (
        <div className="rowdiv" >
          <div className="onegame" key={game._id}>
          <div className="blockcard" >{game.title}</div>
          <Onegame questions={game.questions} />
          </div>
        </div>
          )
        })}

      </div>

    </div> : null
  )
}
