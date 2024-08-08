import Link from 'next/link'
import react from 'react'

const Header: React.FC = () => {

    return (
        <div>
            <header className='bg-blue-600 text-white p-4 shadow-md'>
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
        </div>
    )
}

export default Header