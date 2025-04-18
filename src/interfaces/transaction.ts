export interface Transaction {
    id: string;
    title: string;
    amount: number;
    currency: string;
    type: 'debit' | 'credit';
    date: string; // ISO format
    status: 'completed' | 'pending' | 'failed';
    description?: string;
    channel?: 'card' | 'bank' | 'paypal';
}
