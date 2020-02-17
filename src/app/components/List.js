import React from 'react';
import Movie from './Movie';


const List = (props) => {   
    return(
        <div className="container mt-5">
           <div className="row">
              <div className="col-md-12">
              {
                  props.movies.map((movie, i) => {
                      return(
                          <Movie key={i} image={movie.poster_path}/>
                      )
                  })
              }
             </div>
           </div>
        </div>
    )
}

export default List;
