import React from "react";
import "../../App.css";

export const Experience = (props) => {
    return(
        <div className="container"> 
            <div className="row mt-2">
                <h6 className="col-lg-2 col-md-2">{ props.title }</h6>
                <h6 className="col-lg-3 col-md-3">{ props.company }</h6>
                <h6 className="col-lg-5 col-md-5">{ props.desc }</h6>
                <h6 className="col-lg-2 col-md-2 font-italic">{ props.date }</h6>
            </div>
        </div>
    );
}