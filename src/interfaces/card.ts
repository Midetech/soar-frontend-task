export interface CardDetail {
    id: number;
    cardNumber: string;
    cardHolder: string;
    cardType: 'Visa' | 'MasterCard' | 'Amex' | 'Verve';
    expiry: string; // Format: MM/YY
    cvv: string;
    balance: number;
    currency: string;
}
