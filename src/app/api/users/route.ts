import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json([
        {
            id: 'user_001',
            name: 'Livia Bator',
            role: 'CEO',
            image: 'https://randomuser.me/api/portraits/women/1.jpg',
        },
        {
            id: 'user_002',
            name: 'Randy Press',
            role: 'Director',
            image: 'https://randomuser.me/api/portraits/men/32.jpg',
        },
        {
            id: 'user_003',
            name: 'Workman',
            role: 'Designer',
            image: 'https://randomuser.me/api/portraits/men/33.jpg',
        },
        {
            id: 'user_004',
            name: 'Tina Jay',
            role: 'Manager',
            image: 'https://randomuser.me/api/portraits/women/12.jpg',
        },
    ]);
}
