import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="mb-4">The page you're looking for doesn't exist.</p>
                <Link href="/" className="btn btn-primary">
                    Go Home
                </Link>
            </div>
        </div>
    );
} 