import Image from "next/image"

export default function Banner(){
    return(
        <main>
            <div className="item">
                <div className="font-bold title">Pepsi</div>
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