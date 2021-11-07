import React from "react";
import Googlelogo from './Assets/Googlelogo.png'
import Button from "./Button";
import Language from "./Language";
import Sidehustle from './Assets/Sidehustle.png'
import Footer from "../Footer";
import { useState } from "react";
const Search =()=>{
   const[init,setinit]=useState("")
   const[bro, setbro]= useState(false)
   const Update=(e)=>{
      setinit(e.target.value)
      setbro(true)
      
      if(bro===true) 
     console.log(e.target.value)
 
   }
   
   return(
      <div className="container">
     
         <div></div>
      <div className="SC">
         <div className="logo">{bro?(<h2>{init}</h2>):(<img src={Googlelogo}/>)}
         
               </div>
               <div className="searchdiv">
               <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                   <input onChange= {Update} type= "search" placeholder="Search for something..."/>
                   <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><g/><g><path d="M12,14c1.66,0,3-1.34,3-3V5c0-1.66-1.34-3-3-3S9,3.34,9,5v6C9,12.66,10.34,14,12,14z"/><path d="M17,11c0,2.76-2.24,5-5,5s-5-2.24-5-5H5c0,3.53,2.61,6.43,6,6.92V21h2v-3.08c3.39-0.49,6-3.39,6-6.92H17z"/></g></g></svg>
                   </div>
                 
            </div>
         <Button/>
         <Language/>
  <Footer/>
   
      </div>
   )
} 
export default Search