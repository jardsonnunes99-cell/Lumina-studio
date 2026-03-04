import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const Agradecimento = () => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Se não houver estado de sucesso passando na navegação ou sessionStorage, volta ao início.
        const hasSuccessState = location.state?.success || sessionStorage.getItem("lumina_submitted") === "true";

        if (!hasSuccessState) {
            navigate("/", { replace: true });
            return;
        }

        // Marca como submetido para persistir caso o usuário recarregue na página de agradecimento em si
        sessionStorage.setItem("lumina_submitted", "true");

        // Bloqueia o botão "voltar" do navegador (empurra um novo estado vazio que se sobrepõe)
        const pushState = () => {
            window.history.pushState(null, "", window.location.href);
        };

        // Configura o state bloqueador duas vezes para impedir que apenas 1 clique no botão de voltar funcione
        pushState();
        window.addEventListener("popstate", pushState);

        return () => {
            window.removeEventListener("popstate", pushState);
        };
    }, [location, navigate]);

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[20%] left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[40%] h-[60%] rounded-full bg-primary/5 blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-md w-full flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="w-24 h-24 mb-10 rounded-full bg-gradient-to-br from-black to-black/40 border border-primary/30 flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.2)]">
                    <CheckCircle className="w-12 h-12 text-primary drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]" strokeWidth={1.5} />
                </div>

                <h1 className="font-display text-4xl md:text-5xl font-light tracking-wide text-gold-gradient mb-8 leading-tight">
                    Obrigado pela sua seleção!
                </h1>

                <p className="font-body text-base md:text-lg text-white/90 leading-relaxed mb-10 font-light">
                    Dentro de <span className="text-primary font-medium">30 minutos a 1 hora</span>, nossa equipe Lumina Studio enviará suas fotos diretamente para o seu WhatsApp.
                </p>

                <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-10" />

                <p className="font-body text-sm md:text-base tracking-[0.15em] uppercase text-primary font-medium bg-black/40 px-6 py-3 rounded-full border border-primary/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
                    Fique atento às mensagens para não perder o contato.
                </p>
            </div>
        </div>
    );
};

export default Agradecimento;
