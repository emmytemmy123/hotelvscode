
export interface Assets{
      category_id:String
      asset_name:String
      value_cost:number
      description:String
      record_id: number
      record_type: String
      code: String
      Location:String

}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}