
export const Footer1 = () => {
    /*const navigationItems = [
        {
            title: "Home",
            href: "/",
            description: "",
        },
        {
            title: "Product",
            description: "Managing a small business today is already tough.",
            items: [
                {
                    title: "Reports",
                    href: "/reports",
                },
                {
                    title: "Statistics",
                    href: "/statistics",
                },
                {
                    title: "Dashboards",
                    href: "/dashboards",
                },
                {
                    title: "Recordings",
                    href: "/recordings",
                },
            ],
        },
        {
            title: "Company",
            description: "Managing a small business today is already tough.",
            items: [
                {
                    title: "About us",
                    href: "/about",
                },
                {
                    title: "Fundraising",
                    href: "/fundraising",
                },
                {
                    title: "Investors",
                    href: "/investors",
                },
                {
                    title: "Contact us",
                    href: "/contact",
                },
            ],
        },
    ];
*/
    return (
        <div className="w-full py-20 lg:py-40 bg-foreground text-background bg-gray-100">
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="flex gap-8 flex-col items-start">
                        <div className="flex gap-2 flex-col">
                            <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                                AgroCoop366
                            </h2>
                            <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                                Te puede interesar
                            </p>
                        </div>
                        <div className="flex gap-20 flex-row">
                            <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                                <p>Acerca de nosotros</p>
                                <p>Puntos de atención</p>
                                <p>Centro de ayuda</p>
                            </div>
                            <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                                <p>Términos y condiciones</p>
                                <p>Políticas de privacidad</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Footer1