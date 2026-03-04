import { useState, useEffect, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { AlertTriangle, Send, Loader2, Instagram } from "lucide-react";
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import FaceUploadSection from "@/components/FaceUploadSection";
import GallerySection from "@/components/GallerySection";
import { useToast } from "@/hooks/use-toast";

const VALID_PLANS = [3, 5, 10] as const;

const GALLERY_IMAGES = Array.from({ length: 59 }, (_, i) => ({
  id: `premium-${i + 1}`,
  src: `/images/ensaio-${i + 1}.jpg`,
  name: `Ensaio ${i + 1}`
}));

const WEBHOOK_URL = "https://your-webhook-endpoint.com/submit";

const Index = () => {
  const [searchParams] = useSearchParams();
  const planParam = searchParams.get("plan");
  const defaultPlan = 10;
  const planNumber = planParam ? parseInt(planParam, 10) : defaultPlan;
  const isValidPlan = VALID_PLANS.includes(planNumber as 3 | 5 | 10) || planNumber === defaultPlan;
  const maxSelections = isValidPlan ? (VALID_PLANS.includes(planNumber as 3 | 5 | 10) ? planNumber : defaultPlan) : 0;

  const [facePhotos, setFacePhotos] = useState<File[]>([]);
  const [selectedGallery, setSelectedGallery] = useState<string[]>([]);
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [age, setAge] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const { toast } = useToast();
  const { width, height } = useWindowSize();
  const formRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedGallery.length === maxSelections && maxSelections > 0) {
      setShowSuccessMsg(true);

      // Auto-scroll after a short delay to let the user see the success message
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 1500);

      const timer = setTimeout(() => setShowSuccessMsg(false), 3000);
      return () => clearTimeout(timer);
    } else {
      setShowSuccessMsg(false);
    }
  }, [selectedGallery.length, maxSelections]);

  const toggleGallery = (id: string) => {
    setSelectedGallery((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const nomeValid = nome.trim().length > 1;
  const whatsappValid = whatsapp.trim().length > 8;
  const ageValid = age.trim().length > 0;

  // O botão fica "vivo" assim que os dados de contato estiverem presentes.
  const isButtonActive = nomeValid && whatsappValid && !submitting;

  const handleSubmit = async () => {
    // Bloqueia se o nome ou whatsapp estiver faltando
    if (!isButtonActive) return;

    if (!isValidPlan) {
      toast({ title: "Atenção", description: "Plano inválido ou ausente. Não é possível continuar.", variant: "destructive" });
      return;
    }

    if (facePhotos.length < 3) {
      toast({ title: "Faltam Fotos do Rosto", description: `Envie 3 fotos de rosto. Você enviou ${facePhotos.length}, faltam ${3 - facePhotos.length} foto(s).`, variant: "destructive" });

      // Rola suave de volta para a seção do rosto
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (!ageValid) {
      toast({ title: "Idade não informada", description: "Por favor, preencha quantos anos você irá fazer no campo de texto.", variant: "destructive" });
      return;
    }

    if (selectedGallery.length < maxSelections) {
      toast({ title: "Galeria Incompleta", description: `Selecione ${maxSelections} fotos na sua galeria. Você selecionou apenas ${selectedGallery.length}.`, variant: "destructive" });
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("plan", String(maxSelections));
      formData.append("nome", nome.trim());
      formData.append("whatsapp", whatsapp.trim());
      formData.append("age", age.trim());
      facePhotos.forEach((file, i) => formData.append(`face_photo_${i + 1}`, file));
      formData.append("selected_gallery_images", JSON.stringify(selectedGallery));

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        body: formData
      });

      if (!response.ok) throw new Error("Falha no envio");

      sessionStorage.setItem("lumina_submitted", "true");
      navigate("/agradecimento", { replace: true, state: { success: true } });

    } catch {
      toast({
        title: "Erro",
        description: "Algo deu errado. Tente novamente.",
        variant: "destructive"
      });
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      {showSuccessMsg && (
        <>
          <Confetti
            width={width}
            height={height}
            colors={['#D4AF37', '#F3E5AB', '#AA771C', '#8A5A19', '#FFDF00']}
            recycle={false}
            numberOfPieces={400}
            gravity={0.15}
            className="z-[60]"
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none animate-in fade-in duration-500">
            <div className="bg-black/80 backdrop-blur-md border border-primary/50 text-gold-gradient px-10 py-8 rounded-2xl shadow-[0_0_50px_rgba(212,175,55,0.4)] animate-out fade-out zoom-out duration-1000 delay-[2500ms] flex items-center justify-center gap-3 transform scale-in-center">
              <span className="font-display text-4xl md:text-6xl tracking-widest uppercase font-light text-center">Ótimas escolhas</span>
            </div>
          </div>
        </>
      )}

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      {/* Cabeçalho */}
      <header className="pt-12 pb-8 md:pt-20 md:pb-12 text-center px-4 relative z-10">
        <div className="mx-auto mb-8 w-48 h-48 md:w-64 md:h-64 relative rounded-full overflow-hidden border-2 border-primary/20 shadow-[0_0_40px_rgba(212,175,55,0.15)] flex items-center justify-center bg-black/40">
          <img src="/images/logo.png" alt="Lumina Studio" className="w-full h-full object-cover" />
        </div>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-light tracking-wide text-gold-gradient mb-4">
          Escolha Suas Fotos
        </h1>
        <p className="text-muted-foreground font-body text-sm md:text-base tracking-[0.2em] uppercase max-w-xl mx-auto">
          Envie suas fotos do rosto e selecione seus estilos favoritos
        </p>
        <div className="mt-6 w-24 h-px mx-auto bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </header>

      {/* Aviso de plano inválido */}
      {!isValidPlan &&
        <div className="max-w-lg mx-auto px-4 mb-12">
          <div className="flex items-center gap-3 p-4 rounded border border-destructive/40 bg-destructive/5">
            <AlertTriangle className="w-5 h-5 text-destructive shrink-0" />
            <p className="text-sm font-body text-destructive">
              Plano inválido ou ausente. Use um link válido com <code className="text-foreground">?plan=3</code>, <code className="text-foreground">?plan=5</code> ou <code className="text-foreground">?plan=10</code>.
            </p>
          </div>
        </div>
      }

      <main className={`max-w-6xl mx-auto px-4 pb-20 space-y-16 ${!isValidPlan ? "opacity-40 pointer-events-none select-none" : ""}`}>
        {/* Upload de Fotos */}
        <FaceUploadSection facePhotos={facePhotos} onFacePhotosChange={setFacePhotos} />

        {/* Input Quantos Anos Irá Fazer */}
        <div className="max-w-md mx-auto mt-6">
          <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-2 text-center">
            Quantos anos irá fazer? <span className="text-primary">*</span>
          </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Ex: 30"
            className="w-full px-4 py-3 text-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-md text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 hover:bg-white/10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)]" />
        </div>

        <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Galeria */}
        <GallerySection
          images={GALLERY_IMAGES}
          selectedIds={selectedGallery}
          maxSelections={maxSelections}
          onToggle={toggleGallery}
          disabled={!isValidPlan} />


        <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        {/* Dados de Contato */}
        <section ref={formRef} className="max-w-md mx-auto space-y-6 pt-4">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-gold-gradient text-center">
            Preencha para receber as fotos no seu WhatsApp
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-2">
                Nome <span className="text-primary">*</span>
              </label>
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome"
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 hover:bg-white/10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)]" />
            </div>
            <div>
              <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-2">
                WhatsApp <span className="text-primary">*</span>
              </label>
              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="Ex: (11) 9XXXX-XXXX"
                className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md text-white font-body text-sm placeholder:text-white/30 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 hover:bg-white/10 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)]" />

            </div>
          </div>
        </section>

        {/* Botão Enviar */}
        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4 text-xs font-body tracking-wider uppercase text-muted-foreground">
            <span className={facePhotos.length === 3 ? "text-primary" : ""}>
              Fotos do rosto: {facePhotos.length}/3
            </span>
            <span className="text-border">|</span>
            <span className={selectedGallery.length === maxSelections ? "text-primary" : ""}>
              Estilos: {selectedGallery.length}/{maxSelections}
            </span>
            <span className="text-border">|</span>
            <span className={nomeValid && whatsappValid ? "text-primary" : ""}>
              Contato: {nomeValid && whatsappValid ? "✓" : "obrigatório"}
            </span>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!isButtonActive}
            className={`relative overflow-hidden inline-flex items-center justify-center gap-3 px-10 py-4 rounded-lg font-body text-sm tracking-[0.2em] uppercase transition-all duration-500 group ${isButtonActive ?
              "bg-gold-gradient text-black shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] cursor-pointer hover:-translate-y-1 font-semibold" :
              "bg-white/5 text-white/30 border border-white/10 cursor-not-allowed backdrop-blur-sm"}`
            }>

            {isButtonActive && (
              <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
            )}

            <span className="relative flex items-center gap-3 z-10">
              {submitting ?
                <Loader2 className="w-5 h-5 animate-spin" /> :
                <Send className="w-5 h-5" />
              }
              Confirmar
            </span>
          </button>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="py-10 text-center relative z-10">
        <div className="w-16 h-px mx-auto mb-6 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://instagram.com/luminaa_studi0"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary/80 hover:text-primary transition-colors duration-300 group"
          >
            <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-body text-sm tracking-widest">@luminaa_studi0</span>
          </a>
          <p className="text-xs text-muted-foreground/50 font-body tracking-widest uppercase">
            Experiência Premium de Fotografia
          </p>
        </div>
      </footer>
    </div>);

};

export default Index;