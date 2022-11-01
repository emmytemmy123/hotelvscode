export interface AssetsCategory{
      name:String;
      type: String;
      description: String;
      account_no:number;

}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}