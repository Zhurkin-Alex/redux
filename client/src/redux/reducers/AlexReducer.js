const AlexReducer = (state={}, action)=>{
  switch (action.type) {
   
    case 'ADDUSER':
    return {
      ...state,
      user:(state.user== undefined) ? state.user=[action.payload] : [...state.user, action.payload]
    };
    case 'LOADUSERS':
      return {
        ...state,
        user: action.payload
      }

    default:
    return state;
}

}
export default AlexReducer
