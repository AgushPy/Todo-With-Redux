export const todoReducer = (state = [],action) =>{
    switch(action.type){
        case 'ADD_TODO':
            return [...state,action.payload]
        case 'DELETE_TODO':
            return state.filter((todo,index) => index !== action.index)
        case 'COMPLETE_TODO': 
            state[action.id].complete = !state[action.id].complete;
            return [...state];
            default:
            return state
        }
}