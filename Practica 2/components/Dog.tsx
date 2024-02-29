import { FunctionComponent,JSX} from "preact";

type Dogprops = {
    name:string,
    max_height_male:string,
    max_height_female:string,
    max_weight_male: string,
    max_weight_female: string,
    good_with_strangers: string,
    good_with_children: string,
    good_with_other_dogs: string,
    image_link:string
};

const Dog: FunctionComponent<Dogprops> = (props) : JSX.Element  => {
    const {name,max_height_female,max_height_male,max_weight_male,max_weight_female,good_with_strangers,good_with_children,good_with_other_dogs,image_link} = props;
    return (
        <>
        <div class="flexdoginnit">
            <div class="dogdow">
                <img src={image_link} class="dogimg"></img>
            </div>
            <div class="rowdow">
                <menu>
                    <li><b>Nombre: </b>{name}</li>
                    <li><b>Altura máxima(m): </b>{max_height_male}</li>
                    <li><b>Altura máxima(f): </b>{max_height_female}</li>
                    <li><b>Peso máximo(m): </b>{max_weight_male}</li>
                    <li><b>Peso máximo(f): </b>{max_weight_female}</li>
                    <li><b>Bueno con extraños: </b>{good_with_strangers}</li>
                    <li><b>Bueno con niños: </b>{good_with_children}</li>
                    <li><b>Bueno con otros perros: </b>{good_with_other_dogs}</li>
                </menu>
            </div>
        </div>
        </>
    )
};

export default Dog;