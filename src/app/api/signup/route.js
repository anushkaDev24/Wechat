import { NextResponse } from "next/server"

export async function POST(request)
{
    const data= await request.json()
    const {email , username , password} = data;
    console.log(data)
    return NextResponse.json("Data Added")
}