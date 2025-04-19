import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
        data: [120, 330, 250, 480, 770, 220, 430, 570, 240, 630],
    });
}
