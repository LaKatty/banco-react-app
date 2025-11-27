import fondo from "../assets/fondo1.jpeg"

export const Encabezado = () => (
    <div className="w-full py-10 lg:py-40 bg-[#4C4E4D] relative min-h-screen ">
        <div
            className="absolute inset-0 bg-cover bg-center blur-sm z-0"
            style={{ backgroundImage: `url(${fondo})` }}
        ></div>
        <div className="container mx-auto z-10">
            <div className="flex flex-col text-center py-14 gap-4 items-center rounded-xl">
                <div className="flex flex-col gap-2 relative z-0 ">
                    <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-white ">
                        AGROCOOP366
                    </h3>
                </div>
            </div>
        </div>
    </div>
);

export default Encabezado