export interface DamagedAssets{

      asset_id:number;
      asset_category_id:number;
      quantity:String;
      status:String;
      comment:String;

}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}