import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        labels: [" Entertainment", "Bill Expense", "Others", "Investment"],
        data: [20, 15, 35, 30]
    });
}
