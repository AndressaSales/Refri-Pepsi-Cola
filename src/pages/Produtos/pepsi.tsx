import Navbar from "@/Components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Pepsi(){
    return(
        <main>
            <Navbar />
            <div className="pl-20 pt-10">
                <Link href={'/Produtos'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </Link>
            </div>

            <div className="lg:flex lg:float-ledt grid grid-col-1 gap-7 mx-auto p-2 max-w-5xl mb-16 mt-10">
                <div className="flex items-center justify-center">
                    <Image 
                        src="/assets/PEP-REGULAR-.png"
                        alt="PEPSI"
                        width={400} height={300}
                        className="lg:w-[900px]"
                    />
                </div>

                <div>
                    <h1 className="font font-bold text-center lg:text-left lg:text-6xl text-7xl text-[#0891b2] text3 pb-5">
                        PEPSI<sup>®</sup>
                    </h1>
                    <p className="font font-mono lg:text-left text-center text-2xl ">
                        SABOR ORIGINAL
                    </p>
                    <div className="font font-bold text-[#0891b2] text-3xl p-3 text-center">
                        INGREDIENTS
                    </div>
                    <p className="font lg:text-left text-center text-2xl text-sm">
                        Água gaseificada, açúcar, corante: E 150d, aromas (contém cafeína), acidificante: ácido fosfórico, edulcorantes (acessulfame K, sucralose). Não contém alérgenos que devem ser declarados.
                    </p>
                    <h1 className="font font-fold text-[#0891b2] py-3 lg:text-left text-center text-3xl ">
                        TAMANHOS
                    </h1>

                    <div className="flex items-center justify-center">
                        <Image
                            src="/assets/tamanho.png"
                            alt="tamanho"
                            width={600} height={300} 
                        />
                    </div>
                </div>

                <div>
                    <h3 className="lg:text-left font text-[#0891b2] text-center font-bold p-3 text-3xl">Declaração Nutricioanal</h3>
                    <div>
                        <div>
                            <table className="borda border-2 border-[#0025ff] w-full rounded">
                                <thead>
                                    <tr>
                                        <th className="">&nbsp;</th>
                                        <th className="border-[#0891b2] border-2 border-r-transparent border-t-transparent border-b-transparent text-xs">100 ml</th>
                                        <th className="border-[#0891b2] border-2 border-r-transparent border-t-transparent border-b-transparent text-xs">200 ml</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="">
                                        <td className="border-[#0025ff] border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">Energia</td>
                                        <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent text-center">78KJ/18kcal</td>
                                        <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent text-center">196KJ/46kcal (2%*)</td>
                                    </tr>
                                    <tr className="">
                                        <td className="border-[#0891b2] border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">Lípidios</td>
                                        <td className="border-[#0891b2] border-2 border-t-transparent border-r-transparent text-center">0g</td>
                                        <td className="border-[#0891b2] border-2 border-t-transparent border-r-transparent text-center">0g (0%*)</td>
                                    </tr>
                                    <tr>
                                        <td className="border-[#0025ff] border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">dos quais saturados</td>
                                        <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent text-center">4,6g</td>
                                        <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent text-center">12g (4%*)</td>
                                    </tr>
                                    <tr>
                                        <td className="border-[#0891b2] border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">Hidratados de carbono</td>
                                        <td className="border-[#0891b2] border-2 border-t-transparent border-r-transparent text-center">4,6g</td>
                                        <td className="border-[#0891b2] border-2 border-t-transparent border-r-transparent text-center">11g (13%*)</td>
                                    </tr>
                                    <tr>
                                        <td className="border-[#0025ff] border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">dos quais açúcares</td>
                                        <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent text-center">0 g</td>
                                        <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent text-center">0% (0%*)</td>
                                    </tr>
                                    <tr>
                                        <td className="border-[#0891b2] border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">Proteína</td>
                                        <td className="border-[#0891b2] border-2 border-t-transparent border-r-transparent text-center">0g</td>
                                        <td className="border-[#0891b2] border-2 border-t-transparent border-r-transparent text-center">0g (0%*)</td>
                                    </tr>
                                    <tr>
                                        <td className="border-[#0025ff] border-2 border-l-transparent border-t-transparent border-r-transparent border-b-transparent text-left pl-4">sal</td>
                                        <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent border-b-transparent text-center">0g</td>
                                        <td className="border-[#0025ff] border-2 border-t-transparent border-r-transparent border-b-transparent text-center">	0,01g (-1%*)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p className="text-xs p-5">
                        *DR= Dose de Referência para um adulto médio (8400 kJ / 2000 kcal).
                        As necessidades individuais podem variar dependendo da prática de exercício físico e outros fatores.
                    </p>
                    <p className="text-xs p-4">
                        250ml= dose média.
                    </p>
                </div>
            </div>
        </main>
    )
}