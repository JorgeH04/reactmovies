import React from 'react';


const SearchArea = (props) => {
   

    return(
        <div className="container mt-5">
           <div className="row">
             <section className="">
               <form action="" onSubmit={props.handleSubmit}>
               <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Type a movie"
                            onChange={props.handleChange}
                             />
                    </div>
               </form>
             </section>
           </div>
        </div>
    )
}

export default SearchArea;
