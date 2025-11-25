
export const Start = () => (
    <div className="w-full py-20 lg:py-40 bg-muted bg-[#8EA82D]">
        <div className="container mx-auto">
            <div className="flex flex-col text-center py-14 gap-4 items-center text-white text-xl">
                <div>
                    <h3>¿Qué esperas para empezar?</h3>
                </div>
                <div className="flex flex-col gap-2 ">
                    <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
                        Más que un banco, un aliado en tus metas
                    </h3>
                    <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-xl">
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
);

export default Start