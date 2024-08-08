import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer: React.FC = () => {

    return (
        <div>
            <footer className='bg-gray-800 text-white p-8 mt-4'>                
                <div className='container mx-auto text-center'>
                    <div className='flex justify-center space-x-4 mb-4'>
                    <a href="https://www.kakaocorp.com" aria-label="KakaoTalk" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8"
                        ><path d="M12 2C6.486 2 2 5.589 2 10.204c0 3.098 2.191 5.81 5.473 7.197-.076.263-.486 1.679-.558 1.969-.071.29-.29 1.142 0 1.025.29-.116 1.617-1.064 2.034-1.387.418-.323.786-.455 1.34-.322.279.07.558.141.837.141 5.514 0 10-3.589 10-8.204C22 5.589 17.514 2 12 2zM12 13.2c-.948 0-1.716-.767-1.716-1.715s.768-1.716 1.716-1.716 1.716.767 1.716 1.716S12.948 13.2 12 13.2zm3.5-.05c-.368 0-.667-.298-.667-.667s.299-.666.667-.666.667.298.667.666-.299.667-.667.667zM8.5 11.784c-.205 0-.378-.173-.378-.378s.173-.378.378-.378.378.173.378.378-.173.378-.378.378zM15.8 11.8c-.29 0-.533-.243-.533-.533s.243-.533.533-.533.533.243.533.533-.243.533-.533.533zm-7.2-.384c-.368 0-.667-.298-.667-.667s.299-.666.667-.666.667.298.667.666-.299.667-.667.667zm6.3 1.1c-.368 0-.667-.298-.667-.667s.299-.666.667-.666.667.298.667.666-.299.667-.667.667zm-6.6-.1c-.29 0-.533-.243-.533-.533s.243-.533.533-.533.533.243.533.533-.243.533-.533.533z"/>
                        </svg>
                    </a>
                    <a href="https://blog.naver.com/kihoonworks" aria-label="Naver Blog" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-8 h-8"
                        ><path d="M3.742 3.742c.818-.818 1.804-.742 2.4-.742h11.716c.596 0 1.582-.076 2.4.742.818.818.742 1.804.742 2.4v11.716c0 .596.076 1.582-.742 2.4-.818.818-1.804.742-2.4.742H6.142c-.596 0-1.582.076-2.4-.742-.818-.818-.742-1.804-.742-2.4V6.142c0-.596-.076-1.582.742-2.4zM11.808 14.12v-3.87l2.545 3.87h1.872V9.879h-1.746v3.87l-2.545-3.87h-1.872v4.242h1.746z" />
                        </svg>
                    </a>
                    <a href="https://instagram.com/kihunism_" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500">
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    </div>
                    <p className="text-gray-400 mb-2">&copy; {new Date().getFullYear()} Seoul Metro. All rights reserved.</p>
                    <p className="text-gray-400">Seoul Metro St, Seoul, South Korea</p>
                    <p className="text-gray-400">Contact: coderkihoon@gmail.com</p>
                </div>

            </footer>
        </div>
    )
}

export default Footer