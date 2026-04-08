import { Check } from "lucide-react";

interface GalleryImage {
    id: string;
    src: string;
    name: string;
}

interface BundleGalleryProps {
    images: GalleryImage[];
    selectedIds: string[];
    onToggle: (id: string) => void;
    count: number;
    isValid: boolean;
    remaining: number;
    nextBundle: number | null;
}

const BundleGallery = ({
    images,
    selectedIds,
    onToggle,
    count,
    isValid,
    remaining,
}: BundleGalleryProps) => {
    return (
        <section className="space-y-6">
            <div className="text-center space-y-2">
                <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-slate-900">
                    Escolha Suas Fotos
                </h2>
                <p className="text-slate-500 font-body text-[10px] tracking-[0.2em] uppercase">
                    Selecione os estilos do seu ensaio premium
                </p>
            </div>

            {/* Status indicators */}
            <div className="flex flex-col items-center gap-2">
                {/* Counter */}
                <span className="font-display md:text-2xl text-xl tracking-wider text-primary bg-white px-6 py-2 rounded-full inline-block border border-primary/20 shadow-sm">
                    Fotos selecionadas: {count}
                </span>

                {/* Bundle status badge */}
                <div
                    className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.1em] font-body transition-all duration-500 ${count === 0
                        ? "bg-slate-50 border border-slate-200 text-slate-400"
                        : isValid
                            ? "bg-primary/[0.05] border border-primary/20 text-primary shadow-sm animate-in zoom-in-95 duration-300"
                            : "bg-red-50 border border-red-100 text-red-500"
                        }`}
                >
                    {count === 0 ? (
                        <span>Selecione suas fotos acima ↑</span>
                    ) : isValid ? (
                        <>
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span>Pacote selecionado: {count} {count === 1 ? "foto" : "fotos"} ✓</span>
                        </>
                    ) : (
                        <>
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                            <span>
                                Falt{remaining === 1 ? "a" : "am"} <strong>{remaining}</strong>{" "}
                                foto{remaining === 1 ? "" : "s"} para liberar o pagamento
                            </span>
                        </>
                    )}
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5 mt-6 max-w-5xl mx-auto">
                {images.map((image) => {
                    const isSelected = selectedIds.includes(image.id);
                    const imgIndex = parseInt(image.id.split("-")[1]) || 0;

                    return (
                        <button
                            key={image.id}
                            onClick={() => onToggle(image.id)}
                            style={{ animationDelay: `${(imgIndex % 12) * 60}ms` }}
                            className={`relative aspect-[3/4] rounded-xl overflow-hidden group transition-all duration-500 ease-out animate-in fade-in slide-in-from-bottom-4 zoom-in-95 fill-mode-both cursor-pointer border border-slate-100 ${isSelected
                                ? "ring-[2px] ring-primary shadow-md scale-[0.97]"
                                : "hover:ring-1 hover:ring-primary/40 hover:shadow-lg hover:-translate-y-2"
                                }`}
                        >
                            <img
                                src={image.src}
                                alt={image.name}
                                className={`w-full h-full object-cover transition-transform duration-700 ease-in-out ${isSelected ? "scale-100" : "group-hover:scale-110"
                                    }`}
                                loading="lazy"
                            />

                            {/* Overlay */}
                            <div
                                className={`absolute inset-0 transition-all duration-500 ${isSelected
                                    ? "bg-primary/20 backdrop-brightness-95 mix-blend-multiply"
                                    : "bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60"
                                    }`}
                            />

                            {/* Checkmark */}
                            {isSelected && (
                                <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#F3E5AB] to-[#AA771C] flex items-center justify-center shadow-[0_0_18px_rgba(212,175,55,0.7)] transform animate-in zoom-in-50 spin-in-12 duration-400 ring-2 ring-white/40 z-10">
                                    <Check className="w-4 h-4 text-black stroke-[3] drop-shadow-sm" />
                                </div>
                            )}

                            {/* Image name */}
                            <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                                <span
                                    className={`text-xs font-display tracking-widest uppercase transition-colors duration-300 ${isSelected ? "text-[#D4AF37]" : "text-white/80"
                                        }`}
                                >
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

export default BundleGallery;
