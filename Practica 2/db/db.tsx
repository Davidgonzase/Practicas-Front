import moongose from "mongoose"
import {Mail} from "../types.tsx"

const Schema = moongose.Schema;
const MailShcema = new Schema(
    {
        email:{type:String,unique:true,required:true},
    },
    {timestamps:true}
)


export type MailModel = moongose.Document & Omit<Mail,"id">
export default moongose.model<MailModel>("Post",Postschema)