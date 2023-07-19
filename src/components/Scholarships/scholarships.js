import React from "react";
import "../../App.css";

export const Scholarships = () => {
    return(
        <div className="scholarships">
            <h3 className="mt-4 text-success">SCHOLARSHIPS</h3>
            <div className="container">
                <ul style={{ listStyle: "none", fontSize: "18px" }}>
                    <li>MIPS, Murdoch University, PhD Scholarship</li>
                    <li>NIIED, Korean Govt Scholarship</li>
                    <li>LG Research Scholarship, POSTECH, S.Korea</li>
                    <li>MOST Scholarship, Pakistan</li>
                    <li>NUST Scholarship, Pakistan</li>
                </ul>
            </div>
        </div>
    );
}