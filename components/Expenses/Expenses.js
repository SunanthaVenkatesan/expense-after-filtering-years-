import React ,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
 
 /* const Expenses=(props)=>{
  
	const { expenses = [] } = props;
	  const expense = expenses.map((item) => (
  	  	<div key={item.id}>
        <Card className="expenses">
	  	  <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
            />
	  	</Card>
      </div>
  	  ));

	  return (
	  	{expense}
	  );
	};
  export default Expenses*/
  /*const Expenses=(props)=>{

    return(
    <Card className='expenses'>
    {
    props.map((expense,index) => {
        return(
        <div key={index}>
            <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
            />

        </div>
        )
    })}
       
</Card>
)}

export default Expenses;
*/



const Expenses=(props) =>{
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
    return (
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
          location={props.items[0].location}
          //removeItems={()=>props.removeItems(props.items[0].title)}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
          location={props.items[1].location}
          //removeItems={()=>props.removeItems(props.items[1].title)}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
          location={props.items[2].location}
          //removeItems={()=>props.removeItems(props.items[2].title)}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
          location={props.items[3].location}
          //removeItems={()=>props.removeItems(props.items[3].title)}
        />
      </Card>
    );
  }
  
  export default Expenses;  
