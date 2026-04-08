import { useState } from "react";
import { Drawer } from "vaul";
import { X, MessageCircle, CreditCard, Smartphone, Clock, ShieldCheck, Loader2, CheckCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/hooks/use-toast";

interface CheckoutDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    selectedCount: number;
    totalPrice: number;
    selectedPhotoIds: string[];
}

const CheckoutDrawer = ({
    isOpen,
    onClose,
    selectedCount,
    totalPrice,
    selectedPhotoIds,
}: CheckoutDrawerProps) => {
    const [nome, setNome] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [referencia, setReferencia] = useState("");
    const [paymentMethod, setPaymentMethod] = useState<"pix" | "cartao" | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const { toast } = useToast();

    const isFormValid = nome.trim().length >= 2 && whatsapp.replace(/\D/g, "").length >= 10 && paymentMethod !== null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isFormValid) return;
        setSubmitting(true);

        try {
            const cleanPhone = whatsapp.replace(/\D/g, "");
            const { error } = await supabase.from("pedidos_vitrine").insert([{
                nome_cliente: nome.trim(),
                telefone_cliente: cleanPhone,
                referencia: referencia.trim() || null,
                fotos_selecionadas: selectedPhotoIds,
                quantidade_fotos: selectedCount,
                valor_total: totalPrice,
                forma_pagamento: paymentMethod,
                status: "aguardando_pagamento",
            }]);

            if (error) throw error;

            setSuccess(true);
        } catch {
            toast({
                title: "Erro ao registrar pedido",
                description: "Tente novamente ou entre em contato via Instagram.",
                variant: "destructive",
            });
        } finally {
            setSubmitting(false);
        }
    };

    const handleReset = () => {
        setNome("");
        setWhatsapp("");
        setReferencia("");
        setPaymentMethod(null);
        setSuccess(false);
        onClose();
    };

    return (
        <Drawer.Root open={isOpen} onOpenChange={(open) => !open && handleReset()}>
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40" />
                <Drawer.Content className="bg-white border-t border-slate-200 rounded-t-3xl fixed bottom-0 left-0 right-0 z-50 max-h-[92vh] overflow-y-auto shadow-2xl">
                    {/* Handle */}
                    <div className="flex justify-center pt-4 pb-2">
                        <div className="w-12 h-1.5 rounded-full bg-slate-200" />
                    </div>

                    <div className="px-5 pb-10 max-w-lg mx-auto">
                        {/* Close button */}
                        <button
                            onClick={handleReset}
                            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
                        >
                            <X className="w-4 h-4 text-slate-400" />
                        </button>

                        {!success ? (
                            <>
                                {/* Header */}
                                <div className="text-center mb-7">
                                    <Drawer.Title className="font-display text-2xl font-light tracking-wide text-slate-900">
                                        Finalizar Pedido
                                    </Drawer.Title>
                                    <p className="text-slate-500 font-body text-[10px] tracking-[0.2em] uppercase mt-1">
                                        Confirme seus dados para concluir
                                    </p>
                                </div>

                                {/* Order Summary */}
                                <div className="mb-6 p-4 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-sm">
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-body text-slate-500">Quantidade</span>
                                        <span className="font-display text-lg text-primary font-medium">
                                            {selectedCount} {selectedCount === 1 ? "foto" : "fotos"}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-body text-slate-500">Total</span>
                                        <span className="font-display text-2xl text-primary font-medium">
                                            R$ {totalPrice.toFixed(2).replace(".", ",")}
                                        </span>
                                    </div>
                                    <div className="h-px bg-slate-100" />
                                    <div className="flex items-center gap-2 text-primary">
                                        <Clock className="w-4 h-4 shrink-0" />
                                        <span className="text-[10px] font-body uppercase tracking-wider">Entrega em até 24h no WhatsApp</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-primary">
                                        <ShieldCheck className="w-4 h-4 shrink-0" />
                                        <span className="text-[10px] font-body uppercase tracking-wider">Satisfação garantida ou seu dinheiro de volta</span>
                                    </div>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Nome */}
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-body tracking-[0.2em] uppercase text-slate-400">
                                            Nome <span className="text-primary">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={nome}
                                            onChange={(e) => setNome(e.target.value)}
                                            placeholder="Seu nome completo"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-body text-sm placeholder:text-slate-300 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/10 transition-all"
                                        />
                                    </div>

                                    {/* WhatsApp */}
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-body tracking-[0.2em] uppercase text-slate-400">
                                            WhatsApp <span className="text-primary">*</span>
                                        </label>
                                        <div className="relative">
                                            <MessageCircle className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                                            <input
                                                type="tel"
                                                value={whatsapp}
                                                onChange={(e) => setWhatsapp(e.target.value)}
                                                placeholder="(11) 9XXXX-XXXX"
                                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-body text-sm placeholder:text-slate-300 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/10 transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Referência */}
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-body tracking-[0.2em] uppercase text-slate-400">
                                            Referência <span className="text-slate-300">(opcional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            value={referencia}
                                            onChange={(e) => setReferencia(e.target.value)}
                                            placeholder="Ex: estilo boho, cores quentes..."
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-body text-sm placeholder:text-slate-300 focus:outline-none focus:border-primary/40 focus:ring-1 focus:ring-primary/10 transition-all"
                                        />
                                    </div>

                                    {/* Payment */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-body tracking-[0.2em] uppercase text-slate-400">
                                            Forma de pagamento <span className="text-primary">*</span>
                                        </label>
                                        <div className="grid grid-cols-2 gap-3">
                                            <button
                                                type="button"
                                                onClick={() => setPaymentMethod("pix")}
                                                className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition-all duration-300 cursor-pointer ${paymentMethod === "pix"
                                                    ? "border-primary bg-primary/[0.05] text-primary shadow-sm"
                                                    : "border-slate-200 bg-slate-50 text-slate-400 hover:border-slate-300"
                                                    }`}
                                            >
                                                <Smartphone className="w-4 h-4" />
                                                <span className="font-body text-sm">Pix</span>
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setPaymentMethod("cartao")}
                                                className={`flex items-center justify-center gap-2 py-3 rounded-xl border transition-all duration-300 cursor-pointer ${paymentMethod === "cartao"
                                                    ? "border-primary bg-primary/[0.05] text-primary shadow-sm"
                                                    : "border-slate-200 bg-slate-50 text-slate-400 hover:border-slate-300"
                                                    }`}
                                            >
                                                <CreditCard className="w-4 h-4" />
                                                <span className="font-body text-sm">Cartão</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={!isFormValid || submitting}
                                        className={`w-full mt-2 relative overflow-hidden flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-body text-sm tracking-[0.2em] uppercase transition-all duration-500 group ${isFormValid && !submitting
                                            ? "bg-gold-gradient text-white shadow-md hover:shadow-xl cursor-pointer font-semibold hover:-translate-y-0.5"
                                            : "bg-slate-100 text-slate-300 border border-slate-200 cursor-not-allowed"
                                            }`}
                                    >
                                        {isFormValid && !submitting && (
                                            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
                                        )}
                                        <span className="relative z-10 flex items-center gap-2">
                                            {submitting ? (
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                            ) : (
                                                <CheckCircle className="w-4 h-4" />
                                            )}
                                            {submitting ? "Registrando pedido..." : "Finalizar Pedido"}
                                        </span>
                                    </button>

                                    <p className="text-center text-[10px] text-slate-400 font-body pt-1 uppercase tracking-[0.1em]">
                                        Você será contactada via WhatsApp para confirmação do pagamento
                                    </p>
                                </form>
                            </>
                        ) : (
                            /* Success State */
                            <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in-95 duration-500">
                                <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto shadow-sm">
                                    <CheckCircle className="w-10 h-10 text-primary" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="font-display text-3xl font-light text-primary">Pedido registrado!</h3>
                                    <p className="text-slate-500 font-body text-sm leading-relaxed">
                                        Em breve entraremos em contato via WhatsApp para confirmar o pagamento e iniciar seu ensaio.
                                    </p>
                                </div>
                                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-2">
                                    <p className="text-[10px] font-body tracking-[0.2em] uppercase text-primary font-bold">Resumo</p>
                                    <p className="text-sm font-body text-slate-700">{selectedCount} {selectedCount === 1 ? "foto" : "fotos"} — R$ {totalPrice.toFixed(2).replace(".", ",")}</p>
                                    <p className="text-xs font-body text-slate-400">Forma: {paymentMethod === "pix" ? "Pix" : "Cartão"}</p>
                                </div>
                                <button
                                    onClick={handleReset}
                                    className="px-8 py-3 rounded-xl border border-primary/30 text-primary font-body text-sm tracking-widest uppercase hover:bg-primary/10 transition-all"
                                >
                                    Fechar
                                </button>
                            </div>
                        )}
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
};

export default CheckoutDrawer;
