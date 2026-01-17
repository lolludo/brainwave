import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Auth0ProviderWithNavigate } from '@/auth/Auth0ProviderWithNavigate';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'DTU Student Helper | Academic Intelligence',
    description: 'AI-powered academic assistant for DTU students.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.variable}>
                <Auth0ProviderWithNavigate>
                    <ThemeProvider>
                        {children}
                    </ThemeProvider>
                </Auth0ProviderWithNavigate>
            </body>
        </html>
    );
}
