import logo from './logo.svg';
import './Style.css';

function Tarifs() {
  return (
    <div className="container">
      
      <div className='row    border border-primary m-4 p-2 d-flex justify-content-around'  >
        <div className='col-5 border border-dark galerie-col-1'>

        <figure>
        <img src='/images/solo.jpg' alt='accueil image 'className='img-fluid' />

        <figcaption>« Juste moi » 130 euros 
          Séance pour une personne, en extérieur ou en studio</figcaption>

        </figure>
          

        </div>
        <div className='col-5 border  border-dark galerie-col-1 '>
        <figure>
        <img src='/images/deux.jpg' alt='accueil image 'className='img-fluid' />

        <figcaption>« Pour deux » 195 euros
          Pour deux personnes, en extérieur ou en studio</figcaption>

        </figure>

        </div>

        

      </div>
      <div className='row    border border-primary m-4 p-2 d-flex justify-content-around' >
      

      <div className='col-5 border border-dark galerie-col-2'>


      <figure>
        <img src='/images/famille.jpg' alt='accueil image 'className='img-fluid' />

        <figcaption>« Famille » 220 euros
           pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio
           30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans)</figcaption>

        </figure>

        </div>

        <div className='col-5 border  border-dark galerie-col-2 '>
        <figure>
        <img src='/images/mama.jpg' alt='accueil image 'className='img-fluid' />

        <figcaption>« Il était une fois » 160 euros
         Photo de grossesse (À votre domicile, en extérieur ou en studio)</figcaption>

        </figure>

        </div>


        

        
        
        
        

      </div>
      
      <div  className='row    border border-primary m-4 p-2 d-flex justify-content-around' >
      <div  className='col-5 border border-dark galerie-col-2' >


      <figure>
        <img src='/images/bapteme.jpg' alt='accueil image 'className='img-fluid' />

        <figcaption>« J’immortalise l’événement » sur mesure
          Prestation de mariage ou baptême sur devi</figcaption>

        </figure>

      </div>

      <div  className='col-5 border border-dark galerie-col-2' >


      <figure>
        <img src='/images/enfant.jpg' alt='accueil image 'className='img-fluid' />

        <figcaption>« Mon bébé » 100 euros
       Photo d’enfant jusqu’à 3 ans (photo à domicile)</figcaption>

        </figure>

      </div>



      </div>

      
      
    </div>
  

     
     
      
      
    
  );
}

export default Tarifs;
