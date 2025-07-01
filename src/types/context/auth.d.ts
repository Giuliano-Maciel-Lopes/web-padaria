type Role = "CUSTOMER"|"ADMIN"|"STOCK"|"DELIVERY_PERSON";

type ApiResponse={
    token:string
    datauser:{
        id:string
        name:string
        email:string
        role:Role
    }
}