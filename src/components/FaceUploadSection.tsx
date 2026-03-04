import { useCallback, useState } from "react";
import { X, Camera } from "lucide-react";

interface FaceUploadSectionProps {
  facePhotos: File[];
  onFacePhotosChange: (files: File[]) => void;
}

const FaceUploadSection = ({ facePhotos, onFacePhotosChange }: FaceUploadSectionProps) => {
  const [dragOver, setDragOver] = useState(false);

  const handleFiles = useCallback(
    (files: FileList | null) => {
      if (!files) return;
      const accepted = Array.from(files).filter((f) =>
        ["image/jpeg", "image/jpg", "image/png"].includes(f.type)
      );
      const combined = [...facePhotos, ...accepted].slice(0, 3);
      onFacePhotosChange(combined);
    },
    [facePhotos, onFacePhotosChange]
  );

  const removePhoto = (index: number) => {
    onFacePhotosChange(facePhotos.filter((_, i) => i !== index));
  };

  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="font-display text-3xl md:text-4xl font-light tracking-wide text-gold-gradient">
          Envie 3 Fotos do Rosto
        </h2>
        <p className="text-muted-foreground font-body text-sm tracking-widest uppercase">
          Fotos frontais, bem iluminadas e sem acessórios
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-2xl mx-auto">
        {[0, 1, 2].map((index) => {
          const photo = facePhotos[index];
          return (
            <div key={index} className="relative aspect-square group animate-in fade-in zoom-in duration-500" style={{ animationDelay: `${index * 150}ms` }}>
              {photo ? (
                <div className="relative w-full h-full rounded-xl border border-primary/40 shadow-[0_0_15px_rgba(212,175,55,0.1)] overflow-hidden group-hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] transition-all duration-500">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt={`Foto do rosto ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removePhoto(index)}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-background/80 text-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-background/60 to-transparent" />
                </div>
              ) : (
                <label
                  className={`flex flex-col items-center justify-center w-full h-full rounded-xl border border-dashed cursor-pointer transition-all duration-500 overflow-hidden relative ${dragOver
                      ? "border-primary bg-primary/10 shadow-[0_0_30px_rgba(212,175,55,0.2)] scale-[1.02]"
                      : "border-white/20 bg-black/40 backdrop-blur-sm hover:border-primary/60 hover:bg-black/60 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] hover:-translate-y-1"
                    }`}
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                  <Camera className={`w-8 h-8 md:w-10 md:h-10 mb-3 transition-colors duration-500 ${dragOver ? "text-primary" : "text-white/50 group-hover:text-primary/80"}`} />
                  <span className="text-xs md:text-sm text-white/70 font-display tracking-widest uppercase">Foto {index + 1}</span>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    className="hidden"
                    onChange={(e) => handleFiles(e.target.files)}
                  />
                </label>
              )}
            </div>
          );
        })}
      </div>

      {facePhotos.length > 0 && facePhotos.length < 3 && (
        <p className="text-center text-sm text-primary/70 font-body">
          Falta{3 - facePhotos.length > 1 ? "m" : ""} {3 - facePhotos.length} foto{3 - facePhotos.length > 1 ? "s" : ""}
        </p>
      )}
      {facePhotos.length === 3 && (
        <p className="text-center text-sm text-primary font-body flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-primary" />
          3 fotos enviadas com sucesso
        </p>
      )}
    </section>
  );
};

export default FaceUploadSection;
