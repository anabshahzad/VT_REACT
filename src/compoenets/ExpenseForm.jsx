import React,  { useState } from 'react';

function ExpenseForm({onSubmit}) {
    const [date, setDate]= useState('');
    const [name, setName]= useState('');
    const [expense, setExpense]=  useState('');
    const handleSubmit = (e)=>
    {
        e.preventDefault();
        onSubmit({date, name, expense});
    }
  return (
    <div className="flex justify-center items-center">
    <form onSubmit= {handleSubmit} className=" font-[Nunito-Montserrat] p-4 bg-fuchsia-600 rounded-lg mx-auto">
      <div className="mb-4"></div>
        <label className=" flex justify-center text-gray-900 font-bold mb-2">Date:</label>
        <input type='Date' className="px-3 py-2 border rounded-md" value= {date}  onChange={(e)=>setDate(e.target.value)}/>
        <label className=" flex justify-center text-gray-900 font-bold mb-2">Name</label>
        <input type='Name' className="px-3 py-2 border rounded-md"  value= {name}  onChange={(e)=>setName(e.target.value)}/>
        <label className=" flex justify-center text-gray-900 font-bold mb-2">Expense</label>
        <input type='expense' className="px-3 py-2 border rounded-md" value= {expense}  onChange={(e)=>setExpense(e.target.value)}/>
        <div className="flex justify-end"></div>
        <button type='submit'
         className=" flex justify-center bg-blue-500 text-white font-[Nunito-Montserrat] px-4 py-2 rounded-md hover:bg-blue-600">Add Expense</button>
    </form>
    </div>
  )
}

export default ExpenseForm;
