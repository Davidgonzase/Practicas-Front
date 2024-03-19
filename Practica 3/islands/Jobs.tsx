import { useState, useEffect } from "preact/hooks";
import { FunctionComponent } from "preact";
import {results} from "../types.ts"
import Jobdiv from "../components/Button.tsx";
import Headerdesc from "../components/Header.tsx";
import dataDir from "https://deno.land/x/dir@1.5.1/data_local_dir/mod.ts";

type Jobprops = {
  results:results
}

const a="<p>asdasd<p>"

export  const Job: FunctionComponent<Jobprops> = (props)  => {
  const {results} = props
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
            {results && results.data.map((value, index) => <Jobdiv index={index} title={value.title} company={value.company_name} slug={value.slug} place={value.location} setSelected={() => setSelected(index)}/> )}
          </div>
        </div>
        <div class="der">
              <Headerdesc url={results.data[selected].url} remote={results.data[selected].remote} title={results.data[selected].title} slug={results.data[selected].slug} place={results.data[selected].location} company={results.data[selected].company_name}/>
              <text><br/><h3>Acerca del empleo:</h3><br/></text>
              <div class="desc" style={{ marginBottom: '10px' }} dangerouslySetInnerHTML={{ __html: results.data[selected].description }}/>
        </div>
      </div>
    </div>
  );
};

export default Job;
