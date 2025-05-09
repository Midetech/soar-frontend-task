import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json([
        {
            id: 'card_1',
            cardType: 'Visa Gold',
            cardHolder: "Sunday Olomitutu",
            cardNumber: '4568 5679 8900 1234',
            expiry: '12/26',
            balance: 5200.75,
            currency: 'USD',
        },
        {
            id: 'card_2',
            cardType: 'Mastercard Business',
            cardHolder: "Sunday Olomitutu",
            cardNumber: '3455 4568 5679 5678',
            expiry: '09/25',
            balance: 1220.10,
            currency: 'USD',
        },
        {
            id: 'card_3',
            cardType: 'Mastercard Business',
            cardHolder: "Sunday Olomitutu",
            cardNumber: '3455 4568 5679 5678',
            expiry: '09/27',
            balance: 120.10,
            currency: 'USD',
        }, {
            id: 'card_4',
            cardType: 'Mastercard Business',
            cardHolder: "Sunday Olomitutu",
            cardNumber: '3455 4568 5679 5678',
            expiry: '09/26',
            balance: 20.10,
            currency: 'USD',
        },
    ]);
}
