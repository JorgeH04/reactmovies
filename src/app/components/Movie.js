import React from 'react';


const Movie = (props) => {
   

    return(
        <div className="container mt-5">
           <div className="row">
              <div className="col-md-12">
              {
                  props.image == null ? <img src={'https://external-eze1-1.xx.fbcdn.net/safe_image.php?d=AQBvbIdkJoWpdtu2&w=540&h=282&url=https%3A%2F%2Fimages.clarin.com%2F2020%2F02%2F16%2Fel-paton-basile-ya-cayo___E1IoJe0kR_1200x630__1.jpg&cfs=1&upscale=1&fallback=news_d_placeholder_publisher&_nc_hash=AQDvM4xNoIhzpqTK'} alt="card image" style={{ width: "100%", height: 300}} /> : <img src={`http://image.tmdb.org/t/p/w185${props.image}`} alt="card image" style={{ width: "100%", height: 300}} />
              }

             </div>
           </div>
        </div>
    )
}

export default Movie;