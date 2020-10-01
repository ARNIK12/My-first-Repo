import React from 'react'
import Todo from "../Todo"

const Table = ({todos,setTodos,setAlert}) => {
  
  return (
    <div className="container">
      <table className=" table table-striped mt-3">
          <thead>
              <tr>
                  <th>Title </th>
                  <th>Author</th>
                  <th>ISBN#</th>               
              </tr>             
          </thead>
      </table>
      
    
    {todos.map((todo) => (
      <Todo
      setTodos={setTodos} 
      todos={todos}
      key={todo.id}
      todo={todo}
      text1={todo.text}
      setAlert={setAlert}     
      />
    ))} 
                  
    </div>
    
  )  
}

export default Table
