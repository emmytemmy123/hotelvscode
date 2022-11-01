export interface Hotel{
      name:String;
      email:String;
      country:String;
      state:String;
      city:String;
      address:String;
      phone:String;
}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}