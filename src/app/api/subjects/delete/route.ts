import { NextResponse } from 'next/server';
import { getDb, saveDb } from '@/lib/db';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { username, subject } = body;

        if (!username || !subject) {
            return NextResponse.json({ message: 'Missing params' }, { status: 400 });
        }

        const db = getDb();
        const userIndex = db.users.findIndex(u => u.username === username);

        if (userIndex === -1) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        const user = db.users[userIndex];

        // Remove subject from list
        user.subjects = user.subjects.filter(s => s !== subject);

        // Note: Files tagged with this subject will essentially become "Uncategorized"
        // purely by virtue of the subject no longer being in the list used for filtering folders.
        // We can optionally explicitly set file.subject = null, but it's not strictly necessary 
        // if the UI just checks "if subject in user.subjects". 
        // However, for cleanliness, let's keep the file.subject as is—it acts as a "tag" even if the folder is gone. 
        // If the user re-creates the subject, the files reappear. This is a nice feature.

        db.users[userIndex] = user;
        saveDb(db);

        return NextResponse.json({ success: true, subjects: user.subjects });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal error' }, { status: 500 });
    }
}
