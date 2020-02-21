import React from 'react';
import Movie from './Movie';


const List = (props) => {   
    return(
        <div className="container mt-5">
           <div className="row">
              {
                  props.movies.map((movie, i) => {
                      return(
                        <div className="col-md-3">

                        <div className="product">
                          <div className="img-container">
                            <Movie key={i} image={movie.poster_path}/>
                          </div>
                        </div>
                        </div>

                      )
                  })
              }
             </div>
           </div>
    )
}

export default List;
