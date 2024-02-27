import { FunctionComponent,JSX} from "preact";

type Userprops = {
    sex:string
    address:string,
    name:string,
    email:string,
};

const User: FunctionComponent<Userprops> = (props) : JSX.Element  => {
    const {sex,address,name,email} = props;
    return (
        <>
        <div class="flexuser">
            <div class="blackdivtop">
                <p><img src={"/user.png"} width="200" height="200"></img></p>
                <p><b>{name}</b></p>
            </div>
            <div class="blackdivunder">
                <div class="row"> <img src="/email.png" width="30" height="20"></img><span>{email}</span> </div>
                <div class="row"> <img src="/sex.png" width="20" height="20"></img><span>{sex}</span> </div>
                <div class="row"> <img src="/address.png" width="20" height="20"></img><span>{address}</span> </div>
            </div>
        </div>
        </>
    )
};

export default User;


