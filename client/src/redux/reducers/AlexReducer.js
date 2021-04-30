const AlexReducer = (state={}, action)=>{
  switch (action.type) {
   
    case 'ADDUSER':
    return {
      ...state,
      user:action.payload
    };


    default:
    return state;
}

}
export default AlexReducer
