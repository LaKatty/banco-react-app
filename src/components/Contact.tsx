

export const Contact = () => {

    return (
        <div className="w-full py-20 lg:py-40">
            <div className="container max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <div>
                                <h2>¿Dudas?</h2>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                                    Puedes contactarnos
                                </h4>
                                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                                Contamos con confidencialidad y proteccion de datos
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="justify-center flex items-center">
                        <div className=" max-w-sm flex flex-col border-2 rounded-xl border-[#714930] p-8 gap-4">
                            <p>Ingresa los siguientes datos</p>
                            <div className="grid w-full max-w-sm items-center gap-1">
                                <label htmlFor="firstname">Nombre</label>
                                <input className="border-2 rounded-md border-[#714930]" id="firstname" type="text" />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1">
                                <label htmlFor="lastname">Correo</label>
                                <input className="border-2 rounded-md border-[#714930]" id="lastname" type="text" />
                            </div>
                            <div className="grid w-full max-w-sm items-center gap-1">
                                <label htmlFor="picture">Adjuntar archivo</label>
                                <input id="picture" type="file" />
                            </div>

                            <button className="gap-4 w-full">
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact