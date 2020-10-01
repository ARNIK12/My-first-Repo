import React,{useEffect, useState} from 'react';
import Navbar from './components/layout/Navbar';
import Link from './components/layout/forms/Link';
import Table from './components/layout/Table';
import Alert from './components/layout/Alert';
import './App.css';


function App() {

  const [state, setState]=useState({title:'',author:'',isbn:''});
  const [todos,setTodos]=useState([]);
  const [stata,setStata]=useState({alert:''});

  //useEffect(() =>{
  //  getLocalTodos();
  //},[]);

  const setAlert = (msg,type) =>{
    setStata({msg, type})
    setTimeout(() => setStata(''),3000)
  }

  //const saveLocal =() =>{
  //  localStorage.setItem("todos",JSON.stringify(todos));
  //};
  //const getLocalTodos =()=>{
  //  if(localStorage.getItem("todos")===null){
  //    localStorage.setItem("todos",JSON.stringify([]));
  //  }else{
  //    let todoLocal=JSON.parse(localStorage.getItem("todos"))
  //    setTodos(todoLocal);
  //  }
  //};
 
    return (
      <div className="App" >
        <Navbar  />
        <div className="container" >
        <Alert 
          alert={stata}
          setAlert={setAlert}
          state={state}
          />
        <Link 
         todos={todos}  
         setTodos={setTodos}
         state={state}
         setState={setState}
         setAlert={setAlert}
         alert={stata}
         //getLocalTodos={getLocalTodos}
        />
        <Table 
        todos={todos}
        setTodos={setTodos}
        setAlert={setAlert} 
        //saveLocal={saveLocal}      
        />
        </div>
      </div>
    );
}

export default App ;
