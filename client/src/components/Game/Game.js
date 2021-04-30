import store from '../../redux/store/store';
import './game.css';
import Onegame from './Onegame';
import { useEffect } from "react"
import { useSelector } from "react-redux"

export default function Game() {

  const store = useSelector((store) => store)

  // useEffect(() => {
  //   async function FindQuestions() {
  //     const questions = 
  //   }
  // })

  return (
    <div className="gamebody" >
       
      <div className="gameframe" >

        <Onegame />

      </div>

    </div>
  )
}
