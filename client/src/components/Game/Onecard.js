import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { addPoints } from '../../redux/actions/actions';
import store from '../../redux/store/store';
import './game.css';


export default function Onecard({info}) {
  
  const {id} = useParams()
  const [personalState, setPersonalState] = useState()
  
  async function postResult(e) {
    e.preventDefault()
    
    const answer = e.target.answer.value
    if (answer === personalState.answer) {
      store.dispatch(addPoints(personalState.points))
    } else {
      store.dispatch(addPoints(0))
    }
    e.target.answer.value = ""
    
//     const updateBase = await fetch('/card', {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(
//         {id: store.user.UserPlay._id,

//           points: personalState.points
//         }
//   )
// })
}

// console.log(personalState)

useEffect(() => {
  const takeState = async () => {
    const parametrs = await fetch('/card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {id: id}
      )
    })
    const card = await parametrs.json()
    setPersonalState(card)
  } 
  takeState()
}, [])

  return (
    (personalState) ?
    <div className="divQue" >
      <p style={{fontSize: '18pt', color: "white"}} >{personalState.question}</p>
        <form onSubmit={postResult} className='formque' >
          <input name='answer' className='inputque' />
      <button className = "btnQuestion" style={{width: '250px', marginBottom: '10px'}} >Отправить ответ</button>
    </form>
    <button className = "btnQuestion" style={{width: '250px', marginBottom: '10px'}} ><Link className="linkbutton" to='/game'> Вернуться к вопросам </Link> </button>

    </div> : null
  )
}
