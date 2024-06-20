import React ,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../app/features/todo/todoSlice.js'



// for adding value we need to use useDispatch() because it dispathes or sends the data
function AddTodo() {
    const [input , setInput]= useState('')
    const dispatch = useDispatch()

    const addToDoHandler=(e)=>{
        // here e is the event which addToDoHandler will receive 
        e.preventDefault()
        dispatch(addTodo(input))
        setInput(''
            // after todo is added clear the input
        )
    } 
  return (
    <form onSubmit={addToDoHandler}
    className='space-x-3 mt-12'>
    <input
    type='text'
    className='bg-gray-800 rounded border border-gray-700
    focus:border-indigo-500
    focus:ring-2
    focus:ring-indigo-900 text-base
    outline-none text-gray-100 py-1 px-3 leading-8
    transition-colors duration-200 ease-in-out'
    placeholder='Enter a todo...'
    value={input}
    onChange={(e)=>setInput(e.target.value)}/>
    
<button type="submit" 
className='text-white bg-indigo-500 border-0 py-2
px-6 focus:outline-none hover:bg-indigo-600
rounded text-lg'>Add Todo
</button>
    </form>
  )
}

export default AddTodo
