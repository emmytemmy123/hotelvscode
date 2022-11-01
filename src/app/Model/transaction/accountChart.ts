
export interface AccountChart{
      category_id: number;
      code: String;
      account_name: String;
      balance: number;
}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}