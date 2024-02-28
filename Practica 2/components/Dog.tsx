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
                    <li>{name}</li>
                    <li>{max_height_male}</li>
                    <li>{max_height_female}</li>
                    <li>{max_weight_male}</li>
                    <li>{max_weight_female}</li>
                    <li>{good_with_strangers}</li>
                    <li>{good_with_children}</li>
                    <li>{good_with_other_dogs}</li>
                </menu>
            </div>
        </div>
        </>
    )
};

export default Dog;