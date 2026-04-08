import { Star, Zap, Package, Trophy } from "lucide-react";

interface Bundle {
  fotos: number;
  price: number;
  label: string;
  highlight?: string;
  icon: React.ReactNode;
  popular?: boolean;
}

const BUNDLES: Bundle[] = [
  {
    fotos: 1,
    price: 9.90,
    label: "1 Foto",
    icon: <Package className="w-5 h-5" />,
  },
  {
    fotos: 3,
    price: 19.90,
    label: "3 Fotos",
    highlight: "Âncora de valor",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    fotos: 5,
    price: 29.90,
    label: "5 Fotos",
    highlight: "Mais escolhido",
    icon: <Star className="w-5 h-5" />,
    popular: true,
  },
  {
    fotos: 10,
    price: 69.90,
    label: "10 Fotos",
    highlight: "Maior escala",
    icon: <Trophy className="w-5 h-5" />,
  },
];

interface BundleSelectorProps {
  selectedBundle: number | null;
  onSelect: (fotos: number) => void;
}

const BundleSelector = ({ selectedBundle, onSelect }: BundleSelectorProps) => {
  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-slate-900">
          Escolha Seu Pacote
        </h2>
        <p className="text-slate-500 font-body text-[10px] tracking-[0.2em] uppercase">
          Quantidade de fotos do seu ensaio premium
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
        {BUNDLES.map((bundle) => {
          const isSelected = selectedBundle === bundle.fotos;
          return (
            <button
              key={bundle.fotos}
              onClick={() => onSelect(bundle.fotos)}
              className={`relative flex flex-col items-center justify-center gap-2 p-4 md:p-6 rounded-2xl border transition-all duration-500 cursor-pointer group
                ${isSelected
                  ? "border-primary bg-primary/[0.05] shadow-md scale-[1.03]"
                  : "border-slate-200 bg-slate-50 hover:border-primary/40 hover:bg-white hover:shadow-lg hover:-translate-y-1"
                }
                ${bundle.popular ? "ring-1 ring-primary/20" : ""}
              `}
            >
              {/* Popular badge */}
              {bundle.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gold-gradient text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full shadow-md">
                  ⭐ Mais escolhido
                </div>
              )}

              {/* Icon */}
              <div className={`transition-colors duration-300 ${isSelected ? "text-primary" : "text-slate-300 group-hover:text-primary/70"}`}>
                {bundle.icon}
              </div>

              {/* Fotos count */}
              <span className={`font-display text-2xl md:text-3xl font-light tracking-wider transition-colors duration-300 ${isSelected ? "text-primary" : "text-slate-900"}`}>
                {bundle.fotos}
              </span>
              <span className={`font-body text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${isSelected ? "text-primary/70" : "text-slate-400"}`}>
                {bundle.fotos === 1 ? "foto" : "fotos"}
              </span>

              {/* Price */}
              <div className={`mt-1 text-center transition-all duration-300 ${isSelected ? "text-primary" : "text-slate-700 font-medium"}`}>
                <span className="font-body text-[10px] text-slate-400 font-normal">R$</span>
                <span className="font-display text-lg font-medium ml-0.5">
                  {bundle.price.toFixed(2).replace(".", ",")}
                </span>
              </div>

              {/* Highlight label */}
              {bundle.highlight && (
                <span className={`text-[10px] font-body tracking-[0.2em] uppercase transition-colors duration-300 ${isSelected ? "text-primary/70" : "text-slate-400"}`}>
                  {bundle.highlight}
                </span>
              )}

              {/* Selected indicator */}
              {isSelected && (
                <div className="absolute inset-0 rounded-2xl ring-[2px] ring-primary/60 pointer-events-none animate-in zoom-in-95 duration-300" />
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export { BUNDLES };
export default BundleSelector;
