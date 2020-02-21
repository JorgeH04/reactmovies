import React from 'react';


const Movie = (props) => {
   

    return(
            <div className="container mt-5">
               <div className="row">
              {              
                   <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image"  />
              }
              </div>
            </div>
    )
}

export default Movie;

       


//<img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{ width: "100%", height: 300}} />
