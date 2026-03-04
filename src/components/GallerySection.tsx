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
        <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-gold-gradient">
          Select Your Styles
        </h2>
        <p className="text-muted-foreground font-body text-sm tracking-widest uppercase">
          Choose your favorite portraits from our collection
        </p>
      </div>

      {/* Live Counter */}
      <div className="text-center">
        <span className="font-display text-2xl tracking-wider text-gold-gradient">
          Selected images: {selectedIds.length} / {maxSelections}
        </span>
      </div>

      {limitReached && (
        <p className="text-center text-sm text-primary font-body animate-pulse">
          You have reached your selection limit
        </p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {images.map((image) => {
          const isSelected = selectedIds.includes(image.id);
          const isDisabled = disabled || (!isSelected && limitReached);

          return (
            <button
              key={image.id}
              onClick={() => !isDisabled && onToggle(image.id)}
              disabled={isDisabled}
              className={`relative aspect-[3/4] rounded overflow-hidden group transition-all duration-300 ${
                isSelected
                  ? "ring-2 ring-primary shadow-gold"
                  : isDisabled
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:ring-1 hover:ring-primary/50 cursor-pointer"
              }`}
            >
              <img
                src={image.src}
                alt={image.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 transition-all duration-300 ${
                  isSelected
                    ? "bg-primary/10"
                    : "bg-background/0 group-hover:bg-background/20"
                }`}
              />

              {/* Check badge */}
              {isSelected && (
                <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-gold-gradient flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
              )}

              {/* Name label */}
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-background/80 to-transparent">
                <span className="text-xs font-body tracking-wider text-foreground/80 uppercase">
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
