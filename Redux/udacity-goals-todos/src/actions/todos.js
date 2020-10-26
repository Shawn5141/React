import API from 'goals-todos-api'

export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

//Action creator
function addTodo (todo) {
    return {
      type: ADD_TODO,
      todo,
    }
  }

  function removeTodo (id) {
    return {
      type: REMOVE_TODO,
      id,
    }
  }

  function toggleTodo (id) {
    return {
      type: TOGGLE_TODO,
      id,
    }
  }



//pass in a dispatch function 
export function handleAddTodo(name,callbackFunction){
    return (dispatch)=>{
       return API.saveTodo(name)
       .then((todo)=>{
           dispatch(addTodo(todo))
           callbackFunction()
       })
       .catch(()=>alert('There was an error'))
   }
}
export function handleDeleteTodo(todo){
    return (dispatch)=>{
        dispatch(removeTodo(todo.id))
        return API.deleteTodo(todo)
            .catch(()=>{
                dispatch(addTodo(todo))
                alert('An error occured. Try again')
            })
    }
}

export function handleToggle(id){
    return (dispatch)=>{
        dispatch(toggleTodo(id))
        return API.saveTodoToggle(id)
        .catch(()=>{
            dispatch(toggleTodo(id))
            alert('An error occurs, Try again')
        })
    }
  
}

