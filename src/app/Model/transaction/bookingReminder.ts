
export interface BookingReminder{
      customer_id: number;
      booking_id: number;
      reminder_details: String;
      status: String;
}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}