import Image from "next/image"

export default function Banner(){
    return(
        <main>
            <div className="item">
                <div className="text-[12rem] text-[#fff] font-bold text-center title">Pepsi</div>
                <Image 
                    src="/assets/PEP-REGULAR-.png"
                    alt="pepsi"
                    width={300} height={300}
                    className="refri"
                />
            </div>
        </main>
    )
} 