import React from "react";
import "../../App.css";

export const Education = () => {
    return(
        <div className="">
            <h3 className="mt-4 text-success">EDUCATION</h3>
            <div className="container">
                <div className="row mt-2">
                    <h6 className="col-lg-2 col-md-2">PhD in Computer Vision</h6>
                    <h6 className="col-lg-3 col-md-3">Murdoch University, Perth, Australia</h6>
                    <h6 className="col-lg-5 col-md-5">Project: Deep Learning for Crowd Image Analysis Analysing crowd locations in 
                        images using deep neural networks and machine learning techniques</h6>
                    <h6 className="col-lg-2 col-md-2 font-italic">Feb 2007 <br />To<br />Feb 2009</h6>
                </div>
                <div className="row mt-2">
                    <h6 className="col-lg-2 col-md-2">Masters in Electrical & Electronic Engineering</h6>
                    <h6 className="col-lg-3 col-md-3">Pohang University of Science and Technology, South Korea</h6>
                    <h6 className="col-lg-5 col-md-5">Project: Plasma Display Panel Controller Designing a digital 
                    data controller for plasma TV panel</h6>
                    <h6 className="col-lg-2 col-md-2 font-italic">May 2016 <br />To<br /> Jan 2021</h6>
                </div>
                <div className="row mt-2">
                    <h6 className="col-lg-2 col-md-2">Bachelors in Computer Engineering</h6>
                    <h6 className="col-lg-3 col-md-3">College of EME, NUST, Pakistan</h6>
                    <h6 className="col-lg-5 col-md-5">Project: Universal Receiver for automatic error scheme detection
                        The project was focused on error detection schemes used for wireless data transmission.
                        The automatic decoder had to choose out of multiple possible schemes used and apply the most appropriate decoding technique.
                    </h6>
                    <h6 className="col-lg-2 col-md-2 font-italic">Dec 2001 <br />To<br /> May 2004</h6>
                </div>
            </div>
        </div>
    );
}