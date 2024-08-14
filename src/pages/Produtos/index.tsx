import Navbar from "@/Components/Navbar";
import Produto from "@/Components/Produto";
export default function Produtos(){
    return(
        <main>
            <Navbar />
            <div>
                <h1 className="font font-bold text-3xl lg:text-7xl font-sans py-10 text-center text-[#fff]">
                    OS NOSSOS PRODUTOS
                </h1>
                <Produto />
            </div>
        </main>
    )
}