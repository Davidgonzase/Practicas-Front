export type Error={
    error:boolean,
    message:string
}

export enum STATES{
    TODO="TO-DO",PRG="In progress",RVW="In review",DONE="DONE",NULL="Null"
}

export type task={
    name:string,
    type:STATES
}
