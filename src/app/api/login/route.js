import { NextResponse } from "next/server"

export function GET(){
    console.log("Login button pressed")
    return NextResponse.json("in login")
}
export async function  POST(request){
    const data = await request.json()
    const {username , password } = data;
    if(username === "anshu" && password === "123"){return NextResponse.json("Matched")}
    else{
        return NextResponse.json("Not Matched")
    }
    
    
}