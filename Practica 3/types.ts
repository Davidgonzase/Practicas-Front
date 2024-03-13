export type results = {
    data:data[]
}

export type data={
    slug:string,
    company_name:string,
    description:string,
    remote:boolean,
    title:string,
    url:string,
    tags:string[],
    job_types:string[],
    location:string,
    created_at:number
}