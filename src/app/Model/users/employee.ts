
export interface Employee{
      uuid: string;
      firstname: String;
      lastname: String
      email:String;
      gender:String;
      country:String;
      city:String;
      address:String;
      phone:String;
      designation:String;
      username:String;
      password:String;
}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}