export const ADD_TODO = (task) =>{
    return {
        type: 'ADD_TODO',
        payload : {task,date: `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`,complete : false }
    }
}

export const DELETE_TODO = (id) =>{
    return {
        type: 'DELETE_TODO',
        index: id
    }
}

export const COMPLETE_TODO = (id) =>{
    return {
        type: 'COMPLETE_TODO',
        id
    }
}