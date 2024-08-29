import React from 'react'
import Link from 'next/link'
import styles from '../../styles/commoon/Layout.module.css'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <div className={styles.layoutContainer}>
            <header className={styles.header}>
                <div className='container mx-auto flex justify-between items-center'>
                    <h1 className='text-xl font-bold'>
                        <Link href="/">Seoul Metro</Link>
                    </h1>
                    <nav>
                        <ul className='flex space-x-4'>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            {/* li 태그를 이용하여 다른 링크도 추가 */}
                        </ul>
                    </nav>
                </div>
            </header>
            <main className={styles.mainContanier}>
                {children}
            </main>
            <footer className={styles.footer}>
                <p>&copy; 2024 Seoul Metro. All rights reserved.</p>
                <p>Seoul Metro St, Seoul, South Korea</p>
                <p>Contact: coderkihoon@gmail.com</p>
            </footer>
        </div>
    )
}

export default Layout