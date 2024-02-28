import { FunctionComponent,JSX} from "preact";

type Cityprops = {
    name:string
    population:string,
    longitude:string,
    latitude:string,
    country:string,
    is_capital:string
};

const City: FunctionComponent<Cityprops> = (props) : JSX.Element  => {
    const {name,population,longitude,latitude,country,is_capital} = props;
    let capital = ""
    if(Boolean(is_capital)==true){capital = "(C)"}
    return (
        <>
        <div class="flexuser">
            <div class="blackdivtop">
                <p><b>{name} {capital}</b></p>
                <p>País: {country}</p>

            </div>
            <div class="blackdivunder">
                <p><b>Población: </b> {Number(population)}</p>
                <p><b>Coordenadas: </b>{longitude} // {latitude}</p>
            </div>
        </div>
        </>
    )
};

export default City;


