import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        data: {
            withdraw: [470, 340, 320, 470, 150, 380, 390],
            deposit: [230, 120, 260, 350, 230, 230, 330]
        },
    });
}
