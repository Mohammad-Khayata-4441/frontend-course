 import {   useLocation, useNavigate } from 'react-router-dom'


export default function Navbar() {
    const { pathname } = useLocation()
    const navigate  = useNavigate()





    

    return (
        <div>
            <div className=" w-full max-w-7xl">
                <div className="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                 
                    <nav className="flex-col flex-grow hidden md:flex md:justify-start md:flex-row">
                        <ul className="space-y-2 list-none lg:space-y-0 lg:items-center lg:inline-flex">
                            <li>
                                <button onClick={()=>navigate('/')} className="px-2 lg:px-6 py-6 text-sm border-b-2 border-transparent hover:border-blue-600 leading-[22px] md:px-3 text-gray-500 hover:text-blue-500"> Home
                                </button>
                            </li>
                            <li>
                                <button onClick={()=>navigate('/about')} className="px-2 lg:px-6 py-6 text-sm border-b-2 border-transparent leading-[22px] md:px-3 text-gray-500 hover:text-blue-500 hover:border-blue-600"> About </button>
                            </li>
                            
                        </ul>

                        {pathname}
                    </nav>
                </div>
            </div>
        </div>

    )
}
