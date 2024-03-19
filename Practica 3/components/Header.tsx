import { useState, useEffect } from "preact/hooks";
import { FunctionComponent } from "preact";

type Headerdescprops = {
  title: string;
  company: string;
  place: string;
  slug: string;
  remote:boolean;
  url:string
};

export const Headerdesc: FunctionComponent<Headerdescprops> = (props) => {
  const {title, company, place, slug, remote, url} = props;
  let is_remote;
  remote==true? is_remote="Remoto" : is_remote="Presencial"

  const redirect = () => {
    window.location.href = url;
  };

  return (
  <div key={slug}>
    <text class="desctext">
        <h1>{title}</h1>
        <text class="textype1s">{company}</text> · <text class="textype2s">{place}</text> · <text class="textype3s">Publicado hace X tiempo</text><br/><br/>
        <div>
            <div class="where">
                <text class="job"><span>{is_remote}</span></text>
            </div>
            <div>
                <text class="job">De X a Y empleados</text>
            </div>
            <div>
                <text class="job">Aptitudes: Ser buena persona</text>
            </div>
        </div>
        <br/>
    </text>
    <div class = "descbuttons">
        <button class="butrounded_link" onClick={redirect}>
            <img src="linkedin-app-white-icon.png" class="smallimg"></img>
            <div><h3>Solicitud</h3></div>
        </button>
        <button class="butrounded_blue">
            <h3>Guardar</h3>
        </button>
    </div>
    <div class="contactall">
            Conoce al equipo de contratación
            <div class="contact">
                <img src="User_Icon.png" class="roundimg"/>
                <p><text>Persona Muy Desconocida</text> · <text>Xer</text>
                <text>en alguna empresa bonita</text>
                <text>Anunciante · Miembro desde x</text>
                </p>
                <button class= "butrounded">
                    <img src="avion-de-papel.png" class="smallimg"></img>
                    <h3>Mensaje</h3>
                </button>
            </div>
        </div>
  </div>
    
  );
};

export default Headerdesc;