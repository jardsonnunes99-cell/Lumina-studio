import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AlertTriangle, Send, Loader2 } from "lucide-react";
import FaceUploadSection from "@/components/FaceUploadSection";
import GallerySection from "@/components/GallerySection";
import { useToast } from "@/hooks/use-toast";

const VALID_PLANS = [3, 5, 10] as const;

const GALLERY_IMAGES = Array.from({ length: 12 }, (_, i) => ({
  id: `estilo-${i + 1}`,
  src: `/images/gallery-${i + 1}.jpg`,
  name: `Estilo ${i + 1}`
}));

const WEBHOOK_URL = "https://your-webhook-endpoint.com/submit";

const Index = () => {
  const [searchParams] = useSearchParams();
  const planParam = searchParams.get("plan");
  const planNumber = planParam ? parseInt(planParam, 10) : NaN;
  const isValidPlan = VALID_PLANS.includes(planNumber as 3 | 5 | 10);
  const maxSelections = isValidPlan ? planNumber : 0;

  const [facePhotos, setFacePhotos] = useState<File[]>([]);
  const [selectedGallery, setSelectedGallery] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const toggleGallery = (id: string) => {
    setSelectedGallery((prev) =>
    prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const canSubmit =
  isValidPlan &&
  facePhotos.length === 3 &&
  selectedGallery.length === maxSelections &&
  emailValid &&
  !submitting;

  const handleSubmit = async () => {
    if (!canSubmit) return;
    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("plan", String(maxSelections));
      formData.append("email", email.trim());
      formData.append("whatsapp", whatsapp.trim());
      facePhotos.forEach((file, i) => formData.append(`face_photo_${i + 1}`, file));
      formData.append("selected_gallery_images", JSON.stringify(selectedGallery));

      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        body: formData
      });

      if (!response.ok) throw new Error("Falha no envio");

      toast({
        title: "Sucesso!",
        description: "Suas fotos foram enviadas com sucesso."
      });
    } catch {
      toast({
        title: "Erro",
        description: "Algo deu errado. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Cabeçalho */}
      <header className="pt-12 pb-8 md:pt-20 md:pb-12 text-center px-4">
        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-full border border-primary/30 flex items-center justify-center">
          <span className="font-display text-2xl md:text-3xl text-gold-gradient font-bold">​o</span>
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
        <section className="max-w-md mx-auto space-y-6">
          <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-gold-gradient text-center">
            Seus Dados
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-2">
                E-mail <span className="text-primary">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full px-4 py-3 rounded border border-border bg-card text-foreground font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all" />
              
            </div>
            <div>
              <label className="block text-xs font-body tracking-widest uppercase text-muted-foreground mb-2">
                WhatsApp <span className="text-muted-foreground/50">(opcional)</span>
              </label>
              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="+55 (11) 99999-0000"
                className="w-full px-4 py-3 rounded border border-border bg-card text-foreground font-body text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all" />
              
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
            <span className={emailValid ? "text-primary" : ""}>
              E-mail: {emailValid ? "✓" : "obrigatório"}
            </span>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!canSubmit}
            className={`inline-flex items-center gap-3 px-10 py-4 rounded font-body text-sm tracking-[0.2em] uppercase transition-all duration-300 ${
            canSubmit ?
            "bg-gold-gradient text-primary-foreground shadow-gold-lg hover:shadow-gold cursor-pointer" :
            "bg-muted text-muted-foreground cursor-not-allowed"}`
            }>
            
            {submitting ?
            <Loader2 className="w-4 h-4 animate-spin" /> :

            <Send className="w-4 h-4" />
            }
            Enviar Seleção
          </button>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="py-8 text-center">
        <div className="w-16 h-px mx-auto mb-4 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <p className="text-xs text-muted-foreground/50 font-body tracking-widest uppercase">
          Experiência Premium de Fotografia
        </p>
      </footer>
    </div>);

};

export default Index;