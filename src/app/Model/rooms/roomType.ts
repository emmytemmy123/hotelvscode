
export interface RoomType{
      room_type: String;
      description: String;
      cost: number;
      status: String;
}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}