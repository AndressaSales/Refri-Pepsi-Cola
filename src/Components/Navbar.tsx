import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function Navbar(){

    const [menu, setMenu] = useState<boolean>(false)

    const toogleMenu = () =>{
        setMenu(!menu)
    }

    return(
        <main>
            <div className="navbar justify-between flex py-7">
                <div className="flex items-center justify-center  flex-shrink-0 pl-6">
                    <Link href={'/'}>
                        <Image 
                            src="/assets/logo.png"
                            alt="logo"
                            width={80}
                            height={70}
                            className="img"
                        />
                    </Link>
                </div>

                <div className="block lg:hidden">
                    <button onClick={toogleMenu} className="btn">
                        {
                            menu ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                            )
                        }
                    </button>
                </div>

                <div className="link block sm:hidden lg:items-center lg:flex grow lg:w-auto">
                    <div className="text-center flex lg:grow">
                        <Link href={'/Produtos'} className="ho pt-4 font text-2xl lg:ml-80 lg:mr-32">PRODUTOS</Link>
                        <Link href={'/Passatempo'} className="ho lg:pt-4 text-2xl lg:mr-32 font">PASSATEMPO</Link>
                        <Link href={'/Contatos'} className="ho lg:pt-4 text-2xl font">CONTATOS</Link>
                    </div>

                </div>
            </div>
            {
                menu && (
                    <div className="block flex-grow lg:hidden text-center">
                       <div className="grid grid-cols-1 text-center flex">
                            <Link href={'/Produtos'} className="ho font sm:p-4 text-2xl">
                                PRODUTOS
                            </Link>
                            <Link href={'/Passatempo'} className="ho sm:pb-4 font text-2xl">
                                PASSATEMPO
                            </Link>
                            <Link href={'/Contatos'} className="text-2xl font ho">
                                CONTATOS
                            </Link>
                       </div>
                    </div>
                )
            }
        </main>
    )
}