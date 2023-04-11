import logo from './logo.svg';
import './Style.css';
import './Galerie.css';
import contentList from '../contents.json';




function Galerie() {






let galeries=contentList.filter(content=>content.type=='galerie')

console.log (galeries)






  return (
    <div className="container">
      
      <div className='row    m-4 p-2 d-flex justify-content-around'  >

      {galeries.map(galerie=>

      
      <div   key={galerie.id}  className='col-5   galerie-col-1'>


        <figure>
        <img src={galerie.image} alt='accueil image 'className='img-fluid' />

        <figcaption>{galerie.title}</figcaption>

        </figure>
          

        </div>
        
        
        
        )}


        
        
        

      

        

        

        
        
        
        

      </div>
      
      <div  className='row    m-4 p-2 d-flex justify-content-around' >
      <div  className='col-5 galerie-col-2' >


      <figure>
        <img src='/images/bapteme.jpg' alt='accueil image 'className='img-fluid' />

        <figcaption>BAPTEME</figcaption>

        </figure>

      </div>

      <div  className='col-5  galerie-col-2' >


      <figure>
        <img src='/images/famille.jpg' alt='accueil image 'className='img-fluid' />

        <figcaption>FAMILLE</figcaption>

        </figure>

      </div>



      </div>

      
      
    </div>
  );
}

export default Galerie;
