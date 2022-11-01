
export interface MaintenanceRequest{
      maintenance_category: String;
      asset_id: number;
      comment: String;
      quantity: String;
      cost: number;
      status: String;
      requested_by: String;
      maintained_by: String;
}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}