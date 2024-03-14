import { useState, useEffect } from "preact/hooks";
import { FunctionComponent } from "preact";

type JobdivProps = {
  index: number;
  title: string;
  company: string;
  place: string;
  setSelected: (value: number) => void; // Cambié el tipo para que coincida con la función que acepta solo un número
};

export const Jobdiv: FunctionComponent<JobdivProps> = (props) => {
  const { index, title, company, place, setSelected } = props;
  return (

  <div>
    <div class="job">
    <div class="jobdiv" onClick={() => setSelected(index)}>
      <div class = "imagediv">
        <img src="linkedin.png" class="imagelin"/>
      </div>
      <div class="textdiv">
        <h1>{title}</h1>
        <h2>{company}</h2>
        <h3>{place}</h3>
        <br/>
        
      </div>
      <button class="buttondesc">
        X
      </button>
    </div>
    </div>
    <div class="line"/>
  </div>
    
  );
};

export default Jobdiv;