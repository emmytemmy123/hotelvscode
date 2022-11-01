
export interface Payment{
      customer_id: number;
      payment_type: String;
      amount: number;
      payment_status: String;
      payment_details: String;

}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}