//A custom made component(components are functions that return HTML code)
import React,{useState}from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'
//component is a regular function 
const ExpenseItem=(props) =>{
  //use state returns array and will always have two values and 1st is the current state and 2nd is the function for updating value
  const [title,setTitle] =useState(props.title)//is a hook and should bde called only inside a function and not even inside nested function 
  //use state will create a special kind of variable for eventhandler
  console.log("Expense item evaluated by React")
  //const [amount,setAmount] =useState(props.amount)


  //using props we can make the component reusable and allows us to pass data from another component--key concept
  //the custom component must start with uppercase as we are using as JSX and react should detect as custom since lowercase are for default builtin HTML elements
  const clickHandler=()=>{//is a fucntion that is atatched to the event listener and that is called upon the trigger of event 
    
    setTitle("updated!")//this will not just call the function but,the whole component will be called again 
    console.log(title)
  }
  /*const addclickHandler=()=>{
    setAmount(+100)
    console.log(amount)
  }*/
  
  return(
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>

      <div className="expense-item__description">
        <h2>{title}</h2>

        <div className='expense-item__description'><h2>{props.location}</h2></div>
        <div className="expense-item__price">Rs.{props.amount}</div>
        <div className='expense-item'>
          <button onClick={clickHandler}> Delete Expenses</button>
          </div>
        
        
      </div>
    </Card>
  )
}
//to use tis component we have to export it else it isonly usable in this file
export default ExpenseItem;
//states are used to reactivate the execution.Without state the user interface will not make any changes on event handler
