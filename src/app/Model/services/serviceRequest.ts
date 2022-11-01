
export interface ServiceRequest{
      service_id: number;
      customer_id: number;
      service_type: String;
      serviced_by: String;
}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}