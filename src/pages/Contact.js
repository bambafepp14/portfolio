import logo from './logo.svg';
import './Contact.css';

function Contact() {
  return (


    <div className="container">
      <form action=''className='mx-auto mt-5' method='post' netlify>
        <div>
          <label htmlFor=''>Nom</label>
          <input type="text"  name= "nom" className="form-control"/>
        </div>
        <div>
          <label htmlFor=''>Telefhone</label>
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
       <button className="btn btn-primary mt-3">
        Envoyer
       </button>

       


        

      </form>

      <div className="d-flex flex-column mt-4" >
               <span>TELEPHONE</span> 
                <span >
                  <a href='tel:+33623125560'  >0623125560</a></span>  
                
                </div>

      
     
    </div>
  );
}

export default Contact;
