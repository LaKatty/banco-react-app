import { useState } from "react";

const ChatBotFloating = () => {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "¡Hola! 👋 ¿En qué puedo ayudarte hoy?" },
    ]);
    const [input, setInput] = useState("");

    const respuestasSimples = [
        { key: "saldo", resp: "Para consultar tu saldo, ingresa a la banca virtual 💳" },
        { key: "producto", resp: "Ofrecemos CDT, créditos, ahorro y más 🌱" },
        { key: "horario", resp: "Horario: Lunes a Viernes, 8am a 5pm 🕒" },
        { key: "contacto", resp: "Llámanos al 01 8000 123 456 o usa el formulario 📞" },
    ];

    const enviarMensaje = () => {
        if (!input.trim()) return;

        const nuevo = { sender: "user", text: input };
        const texto = input.toLowerCase();

        let respuesta = "No entendí bien 🤔, ¿puedes repetirlo?";

        for (const item of respuestasSimples) {
            if (texto.includes(item.key)) {
                respuesta = item.resp;
                break;
            }
        }

        setMessages((prev) => [...prev, nuevo]);

        setTimeout(() => {
            setMessages((prev) => [...prev, { sender: "bot", text: respuesta }]);
        }, 700);

        setInput("");
    };

    return (
        <>
            {/* BOTÓN FLOTANTE */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-5 right-5 bg-[#8EA82D] text-white rounded-full w-14 h-14 shadow-xl 
                flex items-center justify-center text-2xl hover:bg-green-800 transition"
            >
                💬
            </button>

            {/* VENTANA DEL CHAT */}
            {open && (
                <div className="fixed bottom-20 right-5 w-80 bg-white border rounded-xl shadow-2xl flex flex-col h-[450px]">
                    <div className="p-4 bg-emerald-900 text-white rounded-t-xl flex justify-between items-center">
                        <h3 className="font-bold">Asistente Virtual</h3>
                        <button onClick={() => setOpen(false)} className="text-white text-lg">✖</button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-3 bg-gray-50 space-y-3">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                <div
                                    className={`px-3 py-2 rounded-xl max-w-[75%] text-sm ${msg.sender === "user"
                                            ? "bg-emerald-100 text-emerald-800"
                                            : "bg-white border text-gray-800"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="p-3 flex gap-2 border-t bg-white">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && enviarMensaje()}
                            className="flex-1 border rounded-xl px-3 py-2 text-sm focus:ring-2 focus:ring-emerald-400 outline-none"
                            placeholder="Escribe tu mensaje…"
                        />
                        <button
                            onClick={enviarMensaje}
                            className="bg-[#8EA82D] text-white px-4 rounded-xl hover:bg-green-800 transition"
                        >
                            ➤
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBotFloating;
