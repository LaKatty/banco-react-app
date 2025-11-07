//import { Badge } from "@/components/ui/badge";


export const Mision = () => (
    <div className="w-full pb-3 pt-32">
        <div className="container mx-auto">
            <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
                <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">
                    <img src="./src/assets/img.jpg" alt="temporal" />
                </div>
                <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
                    <div className="flex gap-2 flex-col">
                        <h2 className="text-xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                        Mision
                        </h2>
                        <p className="text-lg max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left pt-10">
                            Impulsar el crecimiento del sector Agropecuario y artesanal de Colombia fortaleciendo la innovación y el emprendimiento al desarrollo sostenible.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Mision