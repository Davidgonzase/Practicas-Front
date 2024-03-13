import { useState, useEffect } from "preact/hooks";
import { FunctionComponent } from "preact";
import {results} from "../types.ts"

type Jobprops = {
  results:results
}

const a="<p>asdasd<p>"

export  const Job: FunctionComponent<Jobprops> = (props)  => {
  const {results} = props
  // const [data, setData] = useState<results>({
  //   data:props.
  // })
  const [selected, setSelected] = useState<number>(0)
  return (
    <div class="all">
      <div class="centerdiv">
        <div class= "izq">
          <div class="topizq">
              <text><h1>Principales empleos que te recomendamos</h1></text>
              <text><h2>{results.data.length} Resultados</h2></text>
          </div>
          <div class="list">
            {results && results.data.map(
              (value, index) =>  <div class="jobdiv"><button class="buttonjob" onClick={(e) => {setSelected(index)}}>{value.title}</button><div class="line"/></div>)}
          </div>
        </div>
        <div class="der">
              <h3>Acerca del empleo:</h3><br/>
              <div class="desc" style={{ marginBottom: '10px' }} dangerouslySetInnerHTML={{ __html: results.data[selected].description }}/>
        </div>
      </div>
    </div>
  );
};

export default Job;


// results.data.map(
//   (value, index) => {{console.log(value)}<div onClick={(e) => {setSelected(index)}}>
//   {value.company_name}</div>
// })

{/* <div><button onClick={(e) => {setSelected(index)}}>{value.title}</button></div> */}