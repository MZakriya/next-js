import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    console.log("get it");  
    return NextResponse.json({ done: true })
}
   
export const config = {
    matcher: '/about/new/test',
}
  

  