import logo from './logo.svg';
import './Contact.css';

function Contact() {
  return (


    <div className="container">
      <form action=''className='mx-auto mt-5' method='post'>
        <div>
          <label htmlFor=''>Nom</label>
          <input type="nom" className="form-control"/>
        </div>
        <div>
          <label htmlFor=''>Telefhone</label>
          <input type="telefhone" className="form-control"/>
        </div>

        <div>
          <label htmlFor=''>Email</label>
          <input type="text" className= "form-control"/>
        </div>
        
        <div>
          <label htmlFor=''>Sujet de votre demande</label>
          <input type="sujet de votre demande" className="form-control"/>
        </div>

        <div>
          <label htmlFor=''>Redigez votre message</label>
          <input type="redigez votre message" className="form-control -3 "/>
        </div>
       <button className="btn btn-primary mt-3">
        Envoyer
       </button>

       


        

      </form>

      <div className="d-flex flex-column mt-4" >
               <span>TELEPHONE</span> 
                <span>0623125560</span>  
                </div>

      
     
    </div>
  );
}

export default Contact;
