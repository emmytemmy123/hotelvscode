
export interface Rooms{
      room_type: String;
      room_no: number;
      room_description: String;
      price: number;
      room_status: String;
      available_rooms: String;
      state: String;
      current_customer: String;
}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}