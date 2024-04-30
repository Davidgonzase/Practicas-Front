import { useState } from "preact/hooks";
import { FunctionComponent } from "preact";

const Taskcontroller:FunctionComponent = () =>{
    const [modal1,setModal1] = useState<boolean>(false)
    return(
        <div class="mainpage">
            {modal1 && <div class="tupac" onClick={(e)=>setModal1(false)}/>}
            {modal1 && 
            <div class="tupacmodal">
                <input>Cosita</input>
                <select></select>
                <button>Crear</button>
            </div>
            }
            <div class="newbutton">
                <button onClick={(e)=>setModal1(true)}>Crear</button>
            </div>
            <div class="columns">
                <ul class="column" aria-label="TODO:"></ul>
                <ul class="column" aria-label="In progress:"></ul>
                <ul class="column" aria-label="In review:"></ul>
                <ul class="column" aria-label="Deno:"></ul>
            </div>
        </div>
    )
}

export default Taskcontroller;