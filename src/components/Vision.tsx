import React from "react";
import Visionimg from "../assets/Visionimg.png"

const Vision: React.FC = () => {
    return (
        <div className="w-full pb-3 pt-32">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
                    <div className="flex gap-4 flex-col flex-1">

                        <div className="flex gap-2 flex-col">
                            <h2 className="text-xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                                Visión
                            </h2>
                            <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left pt-10">
                                Ser reconocida en el 2030 como la entidad financiera más accesible para el crecimiento y fortalecimiento del campo agropecuario y artesanal del país
                            </p>
                        </div>
                    </div>
                    <div className="bg-muted rounded-md w-fulls h-full flex-1">
                        <img src={Visionimg} alt="vision" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vision