
export interface Booking{
      customer_id: number;
      room_id: number;
      price: number;
      quantity: String;
      check_in_date: Date;
      check_out_date: Date;
      night: String;
}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}