//import { Badge } from "@/components/ui/badge";
import React from "react";
import Misionimg from "../assets/Misionimg.png"

const Mision: React.FC = () => {
    return(
    <div className="w-full pb-20 pt-20 bg-[#F3F7E3]">
        <div className="container mx-auto">
            <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
                <div className="bg-muted rounded-md w-full h-full flex-1">
                    <img className="rounded-xl" src={Misionimg} alt="mision" />
                </div>
                <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
                    <div className="flex gap-2 flex-col">
                        <h2 className="text-xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left animate-slideUp delay-300">
                        Misión
                        </h2>
                        <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left pt-10 ">
                            Impulsar el crecimiento del sector Agropecuario y artesanal de Colombia fortaleciendo la innovación y el emprendimiento al desarrollo sostenible.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
};

export default Mision