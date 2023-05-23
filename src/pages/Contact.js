import logo from './logo.svg';
import './Contact.css';
import { useEffect, useState } from 'react';

function Contact() {


  const [messageSent,setMessageSent]= useState(false)
  useEffect(()=>{
    const handleSubmit = (event) => {
      event.preventDefault();
    
      const myForm = event.target;
      const formData = new FormData(myForm);
    
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() =>{ 
          setMessageSent(true)


          
          
          
          console.log("Form successfully submitted")})
        .catch((error) => alert(error));
    };
    
    document
      .querySelector("form")
      .addEventListener("submit", handleSubmit);

  },[])

  
  return (


    <div className="container">
      {
      messageSent ? 
      <div>  votre message a ete bien envoyé </div> 
      : 
         
         <form  name= "contact" className='mx-auto mt-5' method='post' netlify >
          <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor=''>Nom</label>
          <input type="text"  name= "nom" className="form-control"/>
        </div>
        <div>
          <label htmlFor=''>Telephone</label>
          <input type="tel"  name= "phonenumber" className="form-control"/>

        </div>

        <div>
          <label htmlFor=''>Email</label>
          <input type="email" name="email" className= "form-control"/>
        </div>
        
        <div>
          <label htmlFor=''>Sujet de votre demande</label>
          <input type="text"  name = "sujet" className="form-control"/>
        </div>

        <div>
          <label htmlFor=''>Redigez votre message</label>
          <textarea name="message" className="form-control -3 "/>
        </div>
       <button  type= "submit" className="btn btn-primary mt-3">
        Envoyer
       </button>

       


        

      </form> 

      }  

      <div className="d-flex flex-column mt-4" >
               <span>TELEPHONE</span> 
                <span >
                  <a href='tel:+33623125560'  >0623125560</a></span>  
                
                </div>

      
     
    </div>
  );
}

export default Contact;
