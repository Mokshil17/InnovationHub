import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="navbar bg-base-200 shadow-lg">
            <div className="flex-1">
                <Link href="/" className="text-xl font-bold px-4">
                    TISD Showcase
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/login">Login</Link></li>
                    <li><Link href="/register">Register</Link></li>
                </ul>
            </div>
        </div>
    );
}
