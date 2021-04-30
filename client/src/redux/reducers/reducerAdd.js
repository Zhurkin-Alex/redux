import {ADD} from '../actions/actiontupes'

const rediserADD = (state={}, action)=>{
  switch (action.type) {

    case "ADDGAME":
    return {
      ...state,
      games: action.payload
    }


    default:
    return state;
}

}
export default rediserADD
