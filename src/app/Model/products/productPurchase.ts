export interface ProductPurchase{
      product_id: number;
      description: String;
      company_name: String;
      quantity: String;
      price: number;
}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}