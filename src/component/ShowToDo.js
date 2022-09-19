import React from 'react'




function ShowToDo({showToDo,setShowToDo}) {
  //const [list, updateList] = useState({...showToDo});

  const delteItem=(id)=>{
  const updatedItems= showToDo.filter((item,index)=>{
    return index !== id;
  })
  setShowToDo(updatedItems)
  }

return (
 
   <>
    { showToDo?.length > 0 ?
 <form>
     <div className="container my-4" >
  <div className="row">
 

  <div className="col-7">
  <table className="table table-dark border" >
        <thead>
          <tr>
            
            <th scope="col">TO-Do Name</th>
            <th scope="col">Action</th>

            </tr>
        </thead>
       
     <tbody>
     {showToDo.map((item,index)=> {
      return  <tr key={index}>
            <td>{item.text}</td>
           <td> <button type="button" className="btn btn-danger ml-3" onClick={()=>delteItem(index)}><i className="fa fa-trash"></i></button>
</td>
            

           
          </tr>
         
       
      })}
      </tbody>
      </table>
   
  
    </div>
  </div>
  </div>

</form>
:<h3>No Record Found</h3>
    }
 </>
   
  )

}




export default ShowToDo