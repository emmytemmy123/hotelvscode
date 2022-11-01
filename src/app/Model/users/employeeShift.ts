
export interface EmployeeShift{
      employee_id: number;
      designation: String;
      shift: String;
      period: String;

}

export interface  ApiResponse{
    message:string,
    code:string,
    data:any
}