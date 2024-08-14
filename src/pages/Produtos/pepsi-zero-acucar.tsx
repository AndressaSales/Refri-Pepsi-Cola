import Navbar from "@/Components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function PepsiZeroAcura(){
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
                        src="/assets/PEP-ZERO.png"
                        alt="ZERO"
                        width={400} height={300}
                        className="lg:w-[900px]"
                    />
                </div>

                <div>
                    <h1 className="font text1 font-bold text-7xl lg:text-left text-center pb-5 ">
                        PEPSI ZERO AÇÚCAR<sup>®</sup>
                    </h1>
                    <p className="font font-mono text-center text-2xl lg:text-left ">
                        MÁXIMO SABOR, ZERO AÇÚCAR
                    </p>
                    <div className="font font-bold text-center text-3xl p-3">
                        INGREDIENTS
                    </div>
                    <p className="lg:text-left text-center text-2xl text-sm font">
                        Água gaseificada, corante: E 150d, reguladores de acidez: ácido fosfórico, citrato de sódio e ácido cítrico, edulcorantes: aspartame e acessulfame K, aromas (cafeína, extratos e aromas naturais).
                        Contém uma fonte de fenilalanina.
                    </p>
                    <h1 className="lg:text-left text-center font font-bold p-3 text-3xl">
                        TAMANHOS
                    </h1>

                    <div className="flex items-center justify-center">
                        <Image 
                            src="/assets/tamanho.png"
                            alt="tamanho"
                            width={300} height={300}
                        />
                    </div>
                </div>

                <div>
                    <h3 className="lg:text-left font text-center font-bold p-3 text-3xl">Declaração Nutricioanal</h3>
                    <div>
                        <div>
                            <table className="borda border-2 border-white w-full rounded">
                                <thead>
                                    <tr >
                                        <th className="">&nbsp;</th>
                                        <th className="border-white border-2 border-r-transparent border-t-transparent border-b-transparent text-xs">100 ml</th>
                                        <th className="border-white border-2 border-r-transparent border-t-transparent border-b-transparent text-xs">200 ml</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-white border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">Energia</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">2kj/0.5kcal</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">5kj/1kcal</td>
                                    </tr>
                                    <tr>
                                        <td className="border-white border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">Lípidios</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">0g</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">0g (0%)</td>
                                    </tr>
                                    <tr>
                                        <td className="border-white border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">dos quais saturados</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">0g</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">0g (0%)</td>
                                    </tr>
                                    <tr>
                                        <td className="border-white border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">Hidratados de carbono</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center ">0g</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center ">0g (-1%)</td>
                                    </tr>
                                    <tr>
                                        <td className="border-white border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">dos quais açúcares</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">0%</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">0% (0%)</td>
                                    </tr>
                                    <tr>
                                        <td className="border-white border-2 border-l-transparent border-t-transparent border-r-transparent text-left pl-4">Proteína</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">0g</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent text-center">0g (-1%)</td>
                                    </tr>
                                    <tr>
                                        <td className="border-white border-2 border-l-transparent border-t-transparent border-r-transparent border-b-transparent text-left pl-4">sal</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent border-b-transparent text-center">0,01g</td>
                                        <td className="border-white border-2 border-t-transparent border-r-transparent border-b-transparent text-center">0,03g</td>
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