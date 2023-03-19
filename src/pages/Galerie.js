import logo from './logo.svg';
import './Style.css';
import './Galerie.css';

function Galerie() {
  return (
    <div className="container">
      
      <div className='row    border border-primary m-4 p-2 d-flex justify-content-around'  >
        <div className='col-5 border border-dark galerie-col-1'>

        <figure>
        <img src='/images/couple.jpg' alt='accueil image 'className='img-fluid' />

        <figcaption>An elephant at sunset</figcaption>

        </figure>
          

        </div>
        <div className='col-5 border  border-dark galerie-col-1 '>
        <figure>
        <img src='/images/love.jpg' alt='accueil image 'className='img-fluid' />

        <figcaption>An elephant at sunset</figcaption>

        </figure>

        </div>

        

      </div>
      <div className='row    border border-primary m-4 p-2 d-flex justify-content-around' >
      

      <div className='col-5 border border-dark galerie-col-2'>


      <figure>
        <img src='/images/enceinte.jpg' alt='accueil image 'className='img-fluid' />

        <figcaption>An elephant at sunset</figcaption>

        </figure>

        </div>

        <div className='col-5 border  border-dark galerie-col-2 '>
        <figure>
        <img src='/images/bbaby.jpg' alt='accueil image 'className='img-fluid' />

        <figcaption>An elephant at sunset</figcaption>

        </figure>

        </div>


        

        
        
        
        

      </div>
      
      <div  className='row    border border-primary m-4 p-2 d-flex justify-content-around' >
      <div  className='col-5 border border-dark galerie-col-2' >


      <figure>
        <img src='/images/bapteme.jpg' alt='accueil image 'className='img-fluid' />

        <figcaption>An elephant at sunset</figcaption>

        </figure>

      </div>

      <div  className='col-5 border border-dark galerie-col-2' >


      <figure>
        <img src='/images/tradition.jpg' alt='accueil image 'className='img-fluid' />

        <figcaption>An elephant at sunset</figcaption>

        </figure>

      </div>



      </div>

      
      
    </div>
  );
}

export default Galerie;
