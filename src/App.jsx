import React, { useState } from 'react';
import Navbar from './compoenets/Navbar';
import ExpenseForm from "./compoenets/ExpenseForm";
import ExpenseList from './compoenets/ExpenseList';


function  App() {
  const [expenses, setExpenses] = useState([]);
  const showForm = true;
  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };  
  const handleDeleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);   
  }
  /*const handleEditExpense = (index) =>{
    const updatedExpenses = [...expenses];
    updatedExpenses[index].edit = true;
    setExpenses(updatedExpenses);
  }*/
   return(
    <div className="bg-cover bg-center bg-no-repeat bg-fuchsia-100 ">
          <Navbar/>
   <div className="container mx-auto px-4"></div>
      <h1 className=" flex justify-center text-3xl py-10 px-6 font-[Nunito-Montserrat] font-bold bg-fuchsia-200">Expense Tracker</h1>
    {showForm && <ExpenseForm onSubmit={handleAddExpense} />}
    <ExpenseList expenses={expenses} onDelete={handleDeleteExpense} /*onEdit={handleEditExpense}*/ ></ExpenseList>
  </div>
  )
}
  
export default App;