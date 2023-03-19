import logo from './logo.svg';
import './Style.css';
import './Accueil.css';


function accueil() {
  return (
    <div className="main ">
      <div className='accueil  border border-success  ' >
        
       <img src='/images/lac.jpg' alt='accueil image 'className='img-fluid cover' />
       <h1 className='text-white p-3  title '>bonjour bienvenue</h1>
      </div>
      <div className='accueil2 d-flex mt-3'>
        <div  className=' border-danger  col-4 p-3'>
          <figure>
        <img src='/images/bapteme.jpg' alt='accueil image 'className='img-fluid' />

        <figcaption>An elephant at sunset</figcaption>

        </figure>
        </div>
        <div className=' border-warning col-4 p-3'>
          <figure>
        <img src='/images/decouverte.jpg' alt='accueil image 'className='img-fluid' />
        <figcaption>An elephant at sunset</figcaption>
        </figure>
        </div>
        <div className=' border-info col-4 p-3'>
          <figure>
        <img src='/images/action.jpg' alt='accueil image 'className='img-fluid' />
        <figcaption>An elephant at sunset</figcaption>
        </figure>
        </div>

      </div>

      
    </div>
  );
}

export default accueil;
