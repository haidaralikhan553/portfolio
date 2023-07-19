import "../../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Typewriter from "typewriter-effect";
import { Education } from "../Education/education";
import { projects, experiences, interns } from "../../constants";
import { Projects } from "../Projects/projects";
import { Experience } from "../Experience/experience";
import { Scholarships } from "../Scholarships/scholarships";
import { Activities } from "../Extra_activities/activities";
import { Interns } from "../Interns/interns";

export const Home = () => {
  return (
    <div className="container">
        <img src={require("../../assets/images/yasirjan.jpg")} 
            alt="yasir"
            style={{height: "",width: "20%" }}
            className="rounded-circle mt-2 cv-image d-inline-block" />
        <h3 className="">Dr Yasir jan</h3>
      <div className="row">
        <div className="col-lg-10 col-md-10">
          {/* {" "}
          <h4>
          <Typewriter
            options={{
              strings: [
                "I'm an enthusiast Full-Stack 🌐 developer",
              ],
              delay: 150,
              pauseFor: 1500,
              autoStart: true,
              loop: true,
              
            }}
          />
          </h4> */}
          <div className="info">
            <h3 className="mt-2 text-success">Info</h3>
            <ul style={{ listStyle: "none", fontSize: "18px" }}>
              <li><i className="bi bi-telephone p-2">+92-333-9487443</i></li>
              <li><strong><i className="bi bi-globe p-2"></i></strong>Pushto, Urdu, English</li>
              <a href="https://www.github.com/janyasir/" target="_blank" rel="noopener noreferrer"><i className="bi bi-git" style={{ fontSize: "30px" }}></i></a>
              <a className="p-3" href="https://www.linkedin.com/in/yasirjan/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin" style={{ fontSize: "30px" }}></i></a>
              <a className="" href="mailto:yasirjan@gmail.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-envelope-fill" style={{ fontSize: "30px" }}></i></a>
            </ul>
          </div>
          <Education />
          <div className="experience">
            <h3 className="mt-4 text-success">EXPERIENCE</h3>
            {experiences.map((exp) => {
              return(
                <Experience 
                title={ exp.title }
                company={ exp.company }
                desc={ exp.desc }
                date={ exp.date }/>
              );
            })}
          </div>
          <div className="projects">
            <h3 className="mt-4 text-success">PROJECTS</h3>
            {projects.map((project) => {
              return (
                <Projects 
                title={project.title}
                desc={project.desc}/>
              );
            })}
          </div>
            <Scholarships />
            <Activities />
        </div>
        <div className="col-lg-2 col-md-2">
          <h1>Interns</h1>
          {interns.map((intern) => {
            return(
              <Interns name={ intern.name } 
              mob={ intern.mob } 
              email={ intern.email }
              linkedin={ intern.linkedin }
              git={ intern.git }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
