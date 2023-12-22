

 export type User = {
   id: number;
   name: string;
   url:string;
  
 };
export type GameArr =User & { status:boolean; status2:boolean;}

export type Question ={
  id:number;
  q:string;
  a:string
}