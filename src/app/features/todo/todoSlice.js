// this file name has suffix slice it just a naming convention which indicates that we are using rtk(redux toolkit)
import  {createSlice , nanoid} from '@reduxjs/toolkit'
// here main function is createSlice but we also used nanoid , its function is to create id  

const initialState = {
    todos:
     [{id:1 , text:"Hello World"}]
    //  we create todos as an array of object
}
// we create an object as initial state

// in below inside createSlice() we pass array 
export const todoSlice = createSlice({
    name:'todo',
    // above name is property provided by rtk. this name value is important
    // as through this name value only our data will be visible in rtk chome dev tool
    initialState,
    // here we pass the ini state of our slice

    // here unlike context api where we just declared func and not defined i.e. not written its functionatily
    // here  we also define the func i.e. write its funcitonality also
    // how we have access to useState() and useEffect() hook in react
    // similarly in rtk we have access to 2 prop state and action whenever we declare any method 
    // state:through it we get current state; action:through it we get data passed
    reducers:{
        addTodo:(state , action)=>{
            const todo = {
                id:nanoid(),
                // above creates unique id
                text:action.payload
                // here action.payload is an onject from which we take text property
            }
            state.todos.push(todo)
            // in above ini state = initialState we created above there we have array named todos,
            // our newly created todo is pushed in it
        },
        removeTodo : (state , action)=>{
            state.todos= state.todos.filter((todo)=>
            todo.id!==action.payload)
            // here we override it by only allowing those todo which whoss id not match with the id of todo that has to be removed
        },
    }
})

// here apart from exporting todoSlice we need 2 more exports
export const {addTodo ,removeTodo}=todoSlice.actions
// we export explicitly the methods.  todoSlice.actions is an object from where we obtain method using destructuring
// we export these methods like that so that we can use them on our data directly
export default  todoSlice.reducer
// we also explicitly export reducer because they will also be used on componenets directly