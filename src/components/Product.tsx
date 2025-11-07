export const Product = () => (
    <div className="w-full py-20 lg:py-40 pt-40">
        <div className="container mx-auto ">
            <div className="flex flex-col gap-10">
                <div className="flex gap-4 flex-col items-start">
                    <div className="flex gap-2 flex-col">
                        <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                            Productos diseñados para ti!
                        </h2>
                        <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left pt-5">
                            Descubre nuestra gama completa de productos financieros, creados para adaptarse a cada etapa de tu vida
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-2">
                        <div className="bg-muted rounded-md aspect-video mb-2">
                            <img src="./src/assets/tarjetaCredito.jpg" alt="tarjeta Credito" />
                        </div>
                        
                        <h3 className="text-xl tracking-tight">AgroVerde</h3>
                        <p className="text-muted-foreground text-base">
                            Siendo una tarjeta de Credito es una herramienta financiera especializada que centra su propuesta de valor en impulsar el desarrollo económico de los productores, facilitando acceso a crédito flexible, beneficios exclusivos y apoyo integral al crecimiento sostenible del sector rural.
                        </p>
                        <button className="pt-10">Solicitar</button>
                    </div>
                    {/**Vacio */}
                    <div className="flex flex-col gap-2">
                        <div className="bg-muted rounded-md aspect-video mb-2"></div>
                        <h3 className="text-xl tracking-tight"></h3>
                        <p className="text-muted-foreground text-base">                    
                        </p>
                    </div>
                    {/**Cierra vacio */}
                    <div className="flex flex-col gap-2">
                        <div className="bg-muted rounded-md aspect-video mb-2">
                            <img src="./src/assets/tarjetaDebito.jpg" alt="tarjeta Debito" />
                        </div>
                        <h3 className="text-xl tracking-tight">AgroVerde</h3>
                        <p className="text-muted-foreground text-base">
                            La Cuenta de Ahorro Rural “Mi Tierra” es un producto financiero diseñado especialmente para campesinos, agricultores, ganaderos y familias del sector rural, con el objetivo de fomentar el hábito del ahorro y facilitar el acceso a servicios financieros en zonas alejadas..
                        </p>
                        <button className="pt-10">Solicitar</button>
                    </div>
                    {/**Mas productos */}
                    {/*<div className="flex flex-col gap-2">
                        <div className="bg-muted rounded-md aspect-video mb-2"></div>
                        <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                        <p className="text-muted-foreground text-base">
                            Our goal is to streamline SMB trade, making it easier and faster
                            than ever.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="bg-muted rounded-md aspect-video mb-2"></div>
                        <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                        <p className="text-muted-foreground text-base">
                            Our goal is to streamline SMB trade, making it easier and faster
                            than ever.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="bg-muted rounded-md aspect-video mb-2"></div>
                        <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                        <p className="text-muted-foreground text-base">
                            Our goal is to streamline SMB trade, making it easier and faster
                            than ever.
                    </div>
                        </p>*/}
                </div>
            </div>
        </div>
    </div>
);

export default Product