import React, { Fragment, useState } from 'react';
import { popularProducts } from "../../data";
import "./css/Property.css";

function Test()     {
    const [details, setDetails] = useState(popularProducts)

    return(
    <Fragment>
        <section className="property">
          {/*  <div className="center">
                <h3>Product</h3>
    </div>*/}
            <div className="row">

{
    details.map((detail)=>{
        return(

<div className="column">
                    <div className="single-property">
                     <div className="card">
                        
                         
                        <div className="property-thumb">
                             <div className="property-tag"> For Sale </div>
                             <img src={detail.img} alt="Palace" />
                        </div>
                        <div className="property-content">
                            <h3>{detail.heading}</h3>
                            <i class="fa-solid fa-location-dot"></i>
                            <span>{detail.span}</span>
                            </div>
                            <span className="amount">{detail.amount}</span>
                     </div> 
                     <div className="property-footer">
                        <ul>
                            <li>
                                <span>{detail.size}</span>
                            </li>
                            <li>
                                <img src={`${detail.bedImage}`} alt="bed" />
                                <span>{detail.bed}</span>
                            </li>
                            <li>
                                <img src={detail.bathImage} alt="bath" />
                                <span>{detail.bath}</span>
                            </li>
                        </ul>

                    </div>
                </div>

            </div> 

        )
    })
}

                
            </div>

            <div className="More-property">
                <a className="property" href="#">More Properties</a>
            </div>
        </section>
    </Fragment>

)


}
export default Test;