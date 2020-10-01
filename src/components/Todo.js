import React from 'react'

const Todo = ({text1,todos,setTodos,todo,setAlert}) => {
    const deleteHandle = () => {
        setAlert('Deleted successfully','warning')
        setTodos(todos.filter(el =>el.id !== todo.id))
    }

    return (
        <div className="container">
            <table className=" table table-striped mt-3 ">
                <tr>
                    {text1.map((toy)=>(
                        <td >{toy.title}</td>                    
                    ))}     
                    {text1.map((toy1)=>(
                        <td >{toy1.author} </td>                    
                    ))}
                    {text1.map((toy2)=>(
                        <td >{toy2.isbn} </td>                    
                    ))}                            
                    <a onClick={deleteHandle} className =" btn btn-danger btn-sm delete">X</a>
                </tr>                 
            </table>   
        </div>          
            
    
        
    );
  
}

export default Todo 

