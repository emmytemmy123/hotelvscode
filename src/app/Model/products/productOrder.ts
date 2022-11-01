export interface ProductOrder{
      customer_id:number;
      product_id:number;
      amount:number;
      tax:number;
      order_no:number;
      account_no:number;
      profit:number;
      sales_person:String;
      order_state:String;
}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}