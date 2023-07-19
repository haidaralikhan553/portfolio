import React from "react";
import "../../App.css";

export const Projects = (props) => {
    return(
        <div className="container">
            <div className="row mt-2">
                <h6 className="col-lg-3 col-md-2">{ props.title }</h6>
                <h6 className="col-lg-7 col-md-3">{ props.desc }</h6>
            </div>
        </div>
    );
}