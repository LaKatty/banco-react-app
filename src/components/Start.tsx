import Socios from "../assets/socios.jpeg"
import Seguros from "../assets/Seguro.jpeg"
import Artesanos from "../assets/Artesanos.jpeg"


export const Start = () => (
    <div>
        <div className="w-full py-20 lg:py-40 bg-muted bg-[#8EA82D]">
            <div className="container mx-auto">
                <div className="flex flex-col text-center py-14 gap-4 items-center text-white text-xl">
                    <div>
                        <h3>¿Qué esperas para empezar?</h3>
                    </div>
                    <div className="flex flex-col gap-2 ">
                        <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
                            Más que una cooperativa, un aliado en tus metas
                        </h3>
                        <p className="leading-relaxed tracking-tight text-muted-foreground max-w-xl text-xl">
                            Gestiona tus productos financieros con agilidad, confianza y respaldo.
                        </p>
                    </div>
                    {/* <div className="flex flex-row gap-4">
                    <button className="gap-20 bg-gray-400 rounded-xl border-8 border-gray-400 ">
                        Debito
                    </button>
                    <button className="gap-4 bg-gray-400 rounded-xl border-8 border-gray-400">
                        Credito
                    </button>
                </div> */}
                </div>
            </div>
        </div>
        {/** Socios */}
        <div className="w-full  py-20 lg:py-40 bg-muted  ">
            <div className="container mx-auto">
                <div className="flex flex-col text-center py-14 gap-4 items-center text-black text-xl pr-50 pl-50">
                    <div className="flex flex-col gap-2 mx-auto">
                        <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular ">
                            Ofertas y Beneficios
                        </h3>
                        <p className="leading-relaxed tracking-tight text-muted-foreground max-w-xl text-xl">
                        _______________________________________
                        </p>
                        
                    </div>
                    <div className="h-50 w-72 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 m-5">
                        
                    <img className="h-30 w-30 rounded-xl mx-auto" src={Seguros} alt="aliados" />
        
                            
                    <img className="h-30 w-30 rounded-xl" src={Artesanos} alt="aliados" />
                    </div>
                    <img className="rounded-xl" src={Socios} alt="aliados" />
                </div>
            </div>
        </div>
    </div>
);

export default Start