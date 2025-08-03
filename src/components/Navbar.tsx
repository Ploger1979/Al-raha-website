'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { Button } from '@/components/ui/Button';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'الرئيسية', path: '/' },
        { name: 'المنتجات', path: '/products' },
        { name: 'الفيديوهات', path: '/videos' },
        { name: 'من نحن', path: '/about' },
        { name: 'فروعنا', path: '/branches' },
        { name: 'تواصل معنا', path: '/contact' },
    ];

    const navTextColor = scrolled ? 'text-gray-800' : 'text-white';
    const hoverTextColor = scrolled ? 'text-purple-600' : 'text-purple-300';
    const activeTextColor = scrolled ? 'text-purple-600' : 'text-white font-bold';

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md shadow-lg bg-white/80' : 'bg-transparent'
                }`}
            dir="rtl"
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* ✅ اللوجو */}
                    <Link href="/" className="flex items-center">
                        <Logo scrolled={scrolled} />
                    </Link>

                    {/* ✅ روابط سطح المكتب */}
                    <div className="hidden md:flex font-bold items-center gap-8 justify-center absolute left-1/2 -translate-x-1/2">


                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`relative px-3 py-2 text-lg font-medium transition-colors ${pathname === item.path
                                        ? activeTextColor
                                        : `${navTextColor} hover:${hoverTextColor}`
                                    }`}
                            >
                                {item.name}
                                {pathname === item.path && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${scrolled ? 'bg-purple-600' : 'bg-white'}`}
                                    />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* ✅ زر الجوال (قائمة الهامبرغر) */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </Button>
                </div>

                {/* ✅ قائمة الجوال */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white/95 border-t"
                        >
                            <div className="px-4 pt-2 pb-3 space-y-1">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        className={`block px-4 py-2 text-base font-medium rounded-md ${pathname === item.path
                                                ? 'text-purple-600 bg-purple-50'
                                                : 'text-gray-700 hover:text-purple-600 hover:bg-gray-100'
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}
