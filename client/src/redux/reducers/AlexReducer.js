const AlexReducer = (state={}, action)=>{
  switch (action.type) {
   
    case 'ADDUSER':
    return {
      ...state,
      user: action.payload
    };
    case 'LOADUSERS':
      return {
        ...state,
        user: action.payload
      }

      case "ADDPOINTS": 
      return {
        ...state,
          user: {
            ...state.user,
            UserPlay: {
              ...state.user.UserPlay,
              points: +state.user.UserPlay.points + action.payload
            }
          }
        }
      

    default:
    return state;
}

}
export default AlexReducer
