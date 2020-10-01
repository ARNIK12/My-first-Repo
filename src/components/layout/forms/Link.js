import React from 'react'

const link = ({state,setState,todos,setTodos,setAlert,}) => {
  
    const inputTextHandle=(e)=>{
      console.log(e.target.value);     
      setState({...state,[e.target.name]:e.target.value});
      //e.preventDefault();
    };


    const submitTo = e => {
      e.preventDefault();
      if(state === ''|| state.title === '' || state.title === '' || state.isbn === ''){
        setAlert('Please enter all the fields','danger')
      }else{
        setAlert('Added successfully','success')
        setTodos([
          ...todos,{text:[state],completed:false,id:Math.random()*1000}
        ]);
        setState("");
      }
      
    }
    
    return (
      <div className="container ">
        <form  >    
                 <div className="form-group">
                    <label >Title</label> 
                    <input 
                    type="text" 
                    name="title"
                    className='form-control'
                    value={state.title}
                    onChange={inputTextHandle}
                    />
                    <div className="mt-3">
                    <label >Author</label>
                    <input 
                    value={state.author}
                    type="text" 
                    name="author"
                    className='form-control'
                    onChange={inputTextHandle}
                    />
                    </div>
                    <div className="mt-3">
                    <label >ISBN#</label>
                    <input 
                    value={state.isbn}
                    type="text" 
                    name="isbn"
                    className='form-control'
                    onChange={inputTextHandle}
                   />
                    </div> 
                </div>
                <input
                onClick={submitTo}
                type="submit" 
                value="Add Book" 
                className="btn btn-primary btn-block"/>
            </form>
      </div>
    )
}

export default link

