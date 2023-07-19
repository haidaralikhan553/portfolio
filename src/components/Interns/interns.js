import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../../App.css";

export const Interns = (props) => {
    return(
      <div className="container mt-4">
        <h6>{ props.name }</h6>
        <h6>{ props.mob }</h6>
        <a href={ props.git } target="_blank" rel="noopener noreferrer"><i className="bi bi-git" style={{ fontSize: "30px" }}></i></a>
        <a className="p-3" href={ props.linkedin } target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin" style={{ fontSize: "30px" }}></i></a>
        <a className="" href={`mailto:${props.email}`} target="_blank" rel="noopener noreferrer"><i className="bi bi-envelope-fill" style={{ fontSize: "30px" }}></i></a>
      </div>
    );
  }