import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Navbar(){

    const [btnMenu, setBtnMenu] = useState<boolean>(false)

    const menu = () => {
        setBtnMenu(!btnMenu)
    }

    return(
        <main>
            <nav className="justify-between flex py-7 navbar">
                
                <div className="items-center flex justify-center pl-3">
                    <Link href={'/'}>
                        <Image 
                            src="/assets/logo.png"
                            alt="logo"
                            width={80} height={70}
                            className="img"
                        />
                    </Link>
                </div>

                <div className="lg:hidden block">
                    <button
                        className="btn" 
                        onClick={menu}
                    >
                        {btnMenu ? 
                            (
                                <Image 
                                    src="/assets/close.svg"
                                    alt="close"
                                    width={30} height={30}
                                />
                            ) : (
                                <Image 
                                    src="/assets/menu.svg"
                                    alt="menu"
                                    width={30} height={30}
                                />
                            )}
                    </button>
                </div>

                <div className="lg:items-center lg:flex flex-grow w-full lg:w-auto block sm:hidden">
                    <div className="lg:flex-grow text-center">
                            <Link className="text-2xl lg:mr-32 pt-4 ho" href={'/Produtos'}>
                                PRODUTOS
                            </Link>
                            <Link className="lg:pt-4 text-2xl lg:mr-32 ho" href={'/Passatempo'}>
                                PASSATEMPO
                            </Link>
                            <Link className="lg:pt-4 text-2xl ho" href={'/Contatos'}>
                                CONTATOS
                            </Link>
                    </div>
                </div>
            </nav>
            {
                btnMenu && (
                    <div className="flex-grow lg:hidden text-center block">
                        <div className="grid grid-cols-1 text-center flex">
                            <Link className="sm:p-4 text-2xl ho" href={'/Produtos'}>
                                PRODUTOS
                            </Link>
                            <Link className="text-2xl sm:pb-4" href={'/Passatempo'}>
                                PASSATEMPO
                            </Link>
                            <Link className="text-2xl ho" href={'/Contatos'}>
                                CONTATOS
                            </Link>
                        </div>
                    </div>
                )
                }
        </main>
    )
}