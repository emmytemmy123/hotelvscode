

export interface Customer {
    uuid?:string;
    name:string;
    email:string;
    phone:number;
    address:string;
    nin:number;
    photo?: String;
    username:string;
    password:string;
    dateCreated?:string;
    lastModified?:string;
}


export interface ApiResponse{
    message:string,
    code:string,
    data:any
}

