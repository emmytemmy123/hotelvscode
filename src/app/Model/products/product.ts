export interface Product {
      name:String;
      description: String;
      quantity:String;
      price: number;
      category: String;
      posted_by: String;
      code: String;
      location: String;
}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}