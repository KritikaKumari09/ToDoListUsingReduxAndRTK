import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {removeTodo} from '../app/features/todo/todoSlice.js'
function Todos() {
    const todos=useSelector(state=>state.todos)
    // state=>stat.todos is equivalent to (state)=>(stata.todos) i.e. it will be returned by default
    // useSelector has access to state. when we go in todoSlice.js we see that there there every methid has access to state
    // here while creating slice we named it 'todo' but it is the name by which it will be visible in 
    // chrom dev tool. remember that inside initial state we created array todos and we push evey todo to state.todos
    // using access to that stat we call state.todos
    const dispatch=useDispatch()
    // here we have used useDispatch() because if data i.e. todos in our case is changed while doning any functionality
    // like when removeTodo is run so after removing it updates that data in store
    // since through reducer user can update value stored in store

    return(
//         <>
// // main javascript for below code is :
// <div>Todos</div>
// {todos.map((todo)=>(
//     <li key ={todo.id}>
//     {todo.text}
//     <button onClick={()=>dispatch(removeTodo(todo.id))}>
//         {/* here we either pass the arrow fucntion bet.n {} or name of func without parantheses if 
//         // we declare and define then out . since it we pass with parantheses then that func will be called but 
//         // wa want to call it only when we have clicked  */}
//     X </button>
//     </li>
// ))}
// </>
// AT down same above code is written but it appears big because we have used tailwind for ui


        <>
        <div>
            Todos
        </div>
        <ul className='list-none'>
            {todos.map((todo)=>(
                <li className='mt-4 flex justify-between
                 items-center bg-zinc-800 
                 px-4 py-2 rounded' key={todo.id} >
                    <div className='text-white'>{todo.text}</div>
                    <button onClick={()=>dispatch(removeTodo(todo.id))}
                        className='text-white bg-red-500 border-0 py-1 px-4 focus:outline-none 
                        hover:bg-red-600 rounded text-md'>

                <svg
               xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>

                        </button>

                 </li>
            ))}
        </ul>
        </>
    )
}
export default Todos
