export interface ProductOrderItems{
      product_id:number;
      product_order_id: number;
      product_name:String;
      quantity:String;
      price:number;
}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}