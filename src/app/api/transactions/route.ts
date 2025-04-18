import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json([
        {
            id: 'txn_001',
            title: 'Spotify Subscription',
            amount: 9.99,
            currency: 'USD',
            date: '2025-04-12T14:30:00Z',
            status: 'completed',
            channel: 'card',
            type: 'debit',
        },
        {
            id: 'txn_002',
            title: 'Amazon Purchase',
            amount: 120.49,
            currency: 'USD',
            date: '2025-04-10T17:45:00Z',
            status: 'completed',
            channel: 'paypal',
            type: 'debit',
        },
        {
            id: 'txn_003',
            title: 'Salary',
            amount: 3500.00,
            currency: 'USD',
            date: '2025-04-01T09:00:00Z',
            status: 'completed',
            channel: 'bank',
            type: 'credit',
        },
    ]);
}
