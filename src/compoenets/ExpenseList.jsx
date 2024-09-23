import React from 'react'

function ExpenseList({ expenses, onDelete, onEdit, updateExpense }) {
    const handleDelete = (index) => {
      onDelete(index);
    };
  
    const handleEdit = (index) => {
        const expenseToEdit = expenses[index];
        // Open a modal or show a form to edit the expense
        // For example, you can use a library like react-modal
        // or create a simple form to edit the expense
        const newExpense = { ...expenseToEdit, name: 'New Name' }; // Update the expense data
        updateExpense(index, newExpense);
        };
  
    return (
      <div className="flex justify-center mx-auto">
        <div className="flex items-center"/>
        <h2 className="text-3xl flex items-center py-12 px-8 bg-fuchsia-300 font-[Nunito-Montserrat] font-bold">Expense List</h2>
        <table className="table-auto font-[Nunito-Montserrat] border-collapse border-zinc-800 ">
          <thead>
            <tr>
              <th className="px-4 py-2"> Date</th>
              <th className="px-4 py-2"> Name</th>
              <th className="px-4 py-2"> Expense</th>
              <th className="px-4 py-2"> Action</th>
            </tr>
          </thead> 
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}  className="border-b-4 hover:bg-zinc-300">
                <td className="px-4 py-2">{expense.date}</td>
                <td className="px-4 py-2">{expense.name}</td>
                <td className="px-4 py-2">{expense.expense}</td>
                <td className="px-4 py-2"> 
                  <button className="bg-blue-500 text-white font-[Nunito-Montserrat] px-2 py-1 rounded-md hover:bg-blue-600" onClick={() => handleDelete(index)}>Delete</button>
                  <button className="bg-blue-500 text-white font-[Nunito-Montserrat] px-2 py-1 rounded-md hover:bg-blue-600" onClick={() => handleEdit(index)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ExpenseList;


