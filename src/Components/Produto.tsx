import Image from "next/image"
import Link from "next/link"

export default function Produtos(){
    return(
        <main>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mx-auto max-w-6xl mb-16 mt-10">
                <div>
                    <div className="flex items-center justify-center">
                        <Link href={'/produtos/pepsi-zero-acucar'}>
                            <Image 
                                src="/assets/PEP-ZERO.png"
                                alt="zero"
                                width={230} height={200}
                                className="hover:scale-100 duration-200"
                            />
                        </Link>
                    </div>

                    <div className="text-center p-8">
                        <Link href={'/Produtos/pepsi-zero-acucar'} className="font-mono font font-bold text-4xl hover:underline hover:decoretion-[#fff]">
                            PEPSI <br /> ZERO AÇÚCAR<sup>®</sup>
                        </Link>
                    </div>
                    <p className="text-sm p-6 text-center">MÁXIMO SABOR, ZERO AÇÚCAR</p>

                    <div className="text-center">
                        <Link className="font bg-[#0025ff] font-bold text-center p-3 w-80 rounded-lg text-lg" href={'/Produtos/pepsi-zero-acucar'}>INFO PRODUTO</Link>
                    </div>
                </div>

                <div className="sm:p-12 lg:p-0">
                    <div className="flex items-center justify-center">
                       <Link href={'/Produtos/pepsi-zero-acucar-lima'}>
                            <Image 
                                src="/assets/PEP-LIMA.png"
                                width={230} height={200}
                                alt="LIMA"
                                className="hover:scale-100 duration-200"
                            />
                       </Link>
                    </div>

                    <div className="text-center p-8">
                        <Link href={'/Produtos/pepsi-zero-acucar-lima'} className="font font-bold text-4xl font-mono hover:underline hover:decoration-[#fff]">
                            PEPSI <br /> ZERO AÇÚCAR LIMA<sup>®</sup>
                        </Link>
                    </div>
                    <p className="text-sm pb-6 text-center">MÁXIMO SABOR,  ZERO A AÇÚCAR COM UM REFRESCANTE TOQUE DE LIMA</p>
                    <div className="text-center">
                        <Link className="font bg-[#0025ff] font-bold text-center p-3 w-80 rounded-lg text-lg" href={'/Produtos/pepsi-zero-acucar-lima'}>INFO PRODUTO</Link>
                    </div>
                </div>
                
                <div>
                    <div className="flex items-center justify-center">
                        <Link href={'/Produtos/pepsi'}>
                            <Image 
                                src="/assets/PEP-REGULAR-.png"
                                width={230} height={200}
                                alt="pepsi"
                                className="hover:scale-100 duration-200"
                            />
                        </Link>
                    </div>

                    <div className="text-center p-8">
                        <Link href={'/Produtos/pepsi'} className="font-mono font font-bold text-4xl hover:underline hover:decoretion-[#fff]">
                            PEPSI<sup>®</sup>
                        </Link>
                    </div>
                    <p className="text-sm pt-9 pb-12 text-center">SABOR ORIGINAL</p>

                    <div className="text-center">
                        <Link className="font bg-[#0025ff] font-bold text-center p-3 w-80 rounded-lg text-lg" href={'/Produtos/pepsi'}>INFO PRODUTO</Link>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-sm mb-16 mt-10">
                <div className="flex items-center justify-center">
                    <Link href={'/Produtos/pepsi-zero-cafeina'}>
                        <Image
                            src="/assets/ZERO.png"
                            alt="ZERO"
                            width={230} height={200}
                            className="hover:scale-100 duration-200"
                        />
                    </Link>
                </div>

                <div className="text-center p-8">
                    <Link className="font font-bold text-4xl font-mono hover:underline hover:decoration-white" href={'/Produtos/pepsi-zero-cafeina'}>
                        PEPSI <br /> ZERO AÇÚCAR ZERO CAFEÍNA
                    </Link>
                </div>
                <p className="text-sm pt-9 pb-12 text-center">MÁXIMO SABOR, ZARO AÇÚCAR ZERO CAFEÍNA<sup>®</sup></p>

                <div className="text-center">
                    <Link className="font bg-[#0025ff] font-bold text-center p-3 w-80 rounded-lg text-lg" href={'/Produtos/pepsi-zero-cafeina'}>INFO PRODUTO</Link>
                </div>
            </div>
        </main>
    )
}