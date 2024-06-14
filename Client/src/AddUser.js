import { useState } from "react";
import {adduser} from "./Api";
const AddUser=()=>{
const defaultValue={username:'', email:'',password:''}
const[user,setUser]=useState(defaultValue);
const onValueChange =(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
    console.log(user);
}
const onSubmit= async()=>{
    await adduser(user);

}

return(<>

<form className="container-lg col-6 align-items-left needs-validation" >
            <h1 className="align-center">Add User Data</h1>
        <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
    <input onChange={onValueChange} type="name" className="form-control form-control-lg has-validation" name="username" id="exampleFormControlInput1" placeholder="name" required/>
    <div class="invalid-feedback">
        Please choose a username.
      </div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
    <input onChange={onValueChange} type="email" className="form-control form-control-lg has-validation" name="email" id="exampleFormControlInput1" placeholder="email" required/>
    <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
    <input onChange={onValueChange} type="password" className="form-control form-control-lg" name="password" id="exampleFormControlInput1" placeholder="password" required/>
    <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
  </div>
<button onClick={onSubmit} type="submit" className="btn btn-primary">
  Submit
</button>
</form>
</>);
}
export default AddUser;