
export interface ExpenseRequest{
      expense_id: number;
      employee_id: number;
      quantity: String;
      amount: number;
      account_no: number;
      status: String;

}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}