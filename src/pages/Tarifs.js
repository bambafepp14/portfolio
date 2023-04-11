import logo from './logo.svg';
import './Style.css';
import contentList from '../contents.json';


function Tarifs() {

  let prestations=contentList.filter(content=>content.type=='prestation')

  console.log (prestations)


  



  return (
    <div className="container">
      
      <div className='row    m-4 p-2 d-flex justify-content-around'  >


      {prestations.map(prestation=>
      
      


        <div    key={prestation.id} className='col-5  galerie-col-1 position-relative p-0'>
          

        <figure >
          
        <div className=' price   text-white p-1  m-2'> {prestation.price}€ </div>
        <img src={prestation.image} alt='accueil image 'className='img-fluid'/> 
        

        
          

        <figcaption>{prestation.title} </figcaption>


          

        </figure>
          

        </div>

      )}



      </div>

      
      
    </div>
  

     
     
      
      
    
  );
}

export default Tarifs;
