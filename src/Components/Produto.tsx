import Image from "next/image"
import Link from "next/link"

export default function Produtos(){
    return(
        <main>
            <div className="mx-auto max-w-6xl mb-16 mt-10 grid sm:grid-cols-1 grid-cols-3">
                <div>
                    <div className="flex items-center justify-center">
                        <Link href={'/Produtos/pepsi-zero-acucar'}>
                            <Image 
                                src="/assets/PEP-ZERO.png"
                                alt="zero"
                                width={230} height={200}
                                className="duration-200 hover:scale-110"
                            />
                        </Link>
                    </div>

                    <div className="text-center p-8">
                        <Link href={'/Produtos/pepsi-zero-acucar'} className="font-mono font-bold font text-4xl hover:underline hover:decoration-white">
                                PEPSI <br /> ZERO AÇÚCAR <sup>®</sup>
                        </Link>
                    </div>
                    <p className="text-sm p-6 text-center">MÁXIMO SABOR, ZERO ACÚCAR</p>

                  <div className="text-center">
                        <Link href={'/Produtos/pepsi-zero-acucar'} className="font font-bold w-80 p-3 text-center bg-[#0025ff] rounded-lg text-lg">
                            INFO PRODUTO
                        </Link>
                  </div>
                </div>

                <div className="sm:p-12 lg:p-0">
                    <div className="flex items-center justify-center">
                       <Link href={'/Produtos/pepsi-zero-acucar-lima'}>
                            <Image 
                                src="/assets/PEP-LIMA.png"
                                width={230} height={200}
                                alt="LIMA"
                                className="duration-200 hover:scale-110"
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
                        <Link href={'/Produtos/pepsi-zero-lima'} className="bg-[#0025ff] font font-bold text-center text-lg w-80 p-3 rouded-lg">
                            INFO PRODUTOS
                        </Link>
                    </div>
                </div>
                
                <div>
                    <div className="flex items-center justify-center">
                        <Link href={'/Produtos/pepsi'}>
                            <Image 
                                src="/assets/PEP-REGULAR-.png"
                                width={230} height={200}
                                alt="pepsi"
                                className="duration-200 hover:scale-110"
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
                        <Link href={'/Produtos/pepsi'} className="rouded-lg text-lg bg=[#0025ff] text-center font font-bold">
                            INFO PRODUTOS
                        </Link>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-sm mb-16 mt-10">
                <div className="flex items-center justify-center">
                    <Link href={'/Produtos/pepsi-zero-cafeina'}>
                        <Image
                            src="/assets/zero.png"
                            alt="ZERO"
                            width={230} height={200}
                            className="duration-200 hover:scale-110"
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
                    <Link href={'/Produtos/pepsi-zero-cafeina'} className="rounded-lg text-lg text-center bg-[#0025ff] font-bold font">
                        INFO PRODUTOS
                    </Link>
                </div>
            </div>
        </main>
    )
}