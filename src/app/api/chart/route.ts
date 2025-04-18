import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        income: [3200, 4000, 2800, 5000],
        expenses: [1800, 2200, 1500, 2100],
    });
}
