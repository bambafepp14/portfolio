import logo from './logo.svg';
import './Style.css';
import './Accueil.css';
import contentList from '../contents.json';



function accueil() {

  let illustrations=contentList.filter(content=>content.type=='illustration')

  console.log (illustrations)


  

  let cover=contentList.filter(content=>content.type=='cover')[0]

   console.log (cover)
  


  return (
    <div className="main ">
      <div className='accueil  border border-success  ' >
        
       <img src={cover.image} alt='accueil image 'className='img-fluid cover' />
       <h1 className='text-white p-3  title '>{cover.title}</h1>
      </div>



      <div className='accueil2 d-flex mt-3'>

      {illustrations.map(illustration=> 

<div  className=' border-danger  col-md-4 p-3' key={illustration.id}>

      
<figure>
<img src={illustration.image} alt='accueil image 'className='img-fluid' />

<figcaption>{illustration.title}</figcaption>

</figure>
</div>


      )}

        

      </div>

      
    </div>
  );
}

export default accueil;
