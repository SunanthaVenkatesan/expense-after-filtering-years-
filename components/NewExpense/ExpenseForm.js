import React,{useState}from "react";
import './ExpenseForm.css'

const ExpenseForm=(props)=>{
    //the commented one is the default approach as everytime we call states
   
    const [enteredTitle,setEnteredTitle]=useState('')
    const[enteredAmount,setEnteredAmount]=useState('')
    const[enteredDate,setEnteredDate]=useState('')
    const[enteredLocation,setEnteredLocation]=useState('')
 
   //the below is another alternative as we call state only one time and both works fine 
    
//    const [userInput,setUserInput]=useState({
//     enteredTitle:'',
//     enteredAmount:'',
//     enteredDate:'',
//     enteredLocation:''
// })



    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value)
        /*setUserInput({
            ...userInput,//this is always called as the old data is not lost as react will not keep a track of that
            enteredTitle:event.target.value
        })*/
        //the below is used whenever the state update depends on the previous state
        // setUserInput((prevState)=>{
        //     return {...prevState,nteredTitle:event.target.value}//latest updates 
        // })
    }
    
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value) 
        /*setUserInput({
            ...userInput,
            enteredAmount:event.target.value
        }) or*///somethimes this also cannot give proper state as it might be updated and not supported
    }
    
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value) 
        /*setUserInput({
            ...userInput,
            enteredDate:event.target.value
        }) or */
    }
    
    const locationChangeHandler=(event)=>{
        setEnteredLocation(event.target.value)
        /*setUserInput({
            ...userInput,
            enteredLocation:event.target.value
        })  or */
    }
    const submitHandler=(event)=>{
        event.preventDefault()
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate),
            location:enteredLocation
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('')//this is called two way binding as this is adding value to all the input fields in the form ,that will clear fields in the form after submit
        setEnteredAmount('')
        setEnteredDate('')
        setEnteredLocation('')
    }
    
    
    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="Date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Location</label>
                <input type="text" value={enteredLocation} onChange={locationChangeHandler}/>
            </div>
        </div>
        <div className=".new-expense__actions">
            <button type="submit">Add Expenses</button>
        </div>



    </form>
    )
}

export default ExpenseForm