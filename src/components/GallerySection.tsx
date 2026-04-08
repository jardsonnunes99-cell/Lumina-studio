import { Check } from "lucide-react";

interface GalleryImage {
  id: string;
  src: string;
  name: string;
}

interface GallerySectionProps {
  images: GalleryImage[];
  selectedIds: string[];
  maxSelections: number;
  onToggle: (id: string) => void;
  disabled: boolean;
}

const GallerySection = ({ images, selectedIds, maxSelections, onToggle, disabled }: GallerySectionProps) => {
  const limitReached = selectedIds.length >= maxSelections;

  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-slate-900">
          Selecione Seus Estilos
        </h2>
        <p className="text-slate-500 font-body text-[10px] tracking-[0.2em] uppercase">
          Escolha seus retratos favoritos da nossa coleção premium
        </p>
      </div>

      {/* Contador */}
      <div className="text-center">
        <span className="font-display md:text-2xl text-xl tracking-wider text-primary bg-white px-6 py-2 rounded-full inline-block border border-primary/20 shadow-sm">
          Selecionadas: {selectedIds.length} / {maxSelections}
        </span>
      </div>

      {limitReached && (
        <p className="text-center text-sm text-primary font-body animate-pulse font-medium">
          ✧ Você atingiu o limite de seleção do seu plano ✧
        </p>
      )}

      {/* Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-10 max-w-5xl mx-auto">
        {images.map((image) => {
          const isSelected = selectedIds.includes(image.id);
          const isDisabled = disabled || (!isSelected && limitReached);

          return (
            <button
              key={image.id}
              onClick={() => !isDisabled && onToggle(image.id)}
              disabled={isDisabled}
              style={{ animationDelay: `${(parseInt(image.id.split('-')[1]) % 10) * 100}ms` }}
              className={`relative aspect-[3/4] rounded-lg overflow-hidden group transition-all duration-700 ease-out animate-in fade-in slide-in-from-bottom-4 zoom-in-95 fill-mode-both border border-slate-100 ${isSelected
                ? "ring-[2px] ring-primary shadow-md scale-[0.98]"
                : isDisabled
                  ? "opacity-40 cursor-not-allowed grayscale-[50%]"
                  : "hover:ring-1 hover:ring-primary/40 hover:shadow-lg cursor-pointer hover:-translate-y-2"
                }`}
            >
              <img
                src={image.src}
                alt={image.name}
                className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${isSelected ? "scale-100" : "group-hover:scale-110"
                  }`}
                loading="lazy"
              />

              {/* Overlay Gradient */}
              <div
                className={`absolute inset-0 transition-all duration-500 ${isSelected
                  ? "bg-primary/20 backdrop-brightness-95 mix-blend-multiply"
                  : "bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60"
                  }`}
              />

              {/* Checkmark Premium */}
              {isSelected && (
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.6)] transform scale-in-center animate-in zoom-in-50 spin-in-12 duration-500 ring-2 ring-white/50 z-10">
                  <Check className="w-5 h-5 text-black drop-shadow-sm stroke-[3]" />
                </div>
              )}

              {/* Image Title */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black sm:from-black/90 to-transparent">
                <span className={`text-sm md:text-base font-display tracking-widest uppercase transition-colors duration-300 ${isSelected ? "text-[#D4AF37] font-medium" : "text-white/90"
                  }`}>
                  {image.name}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default GallerySection;
