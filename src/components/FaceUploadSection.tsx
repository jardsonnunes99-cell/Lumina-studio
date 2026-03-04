import { useCallback, useState } from "react";
import { Upload, X, Camera } from "lucide-react";

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
          Upload 3 Face Photos
        </h2>
        <p className="text-muted-foreground font-body text-sm tracking-widest uppercase">
          Front-facing, well-lit photos without accessories
        </p>
      </div>

      <div className="grid grid-cols-3 gap-3 md:gap-6 max-w-2xl mx-auto">
        {[0, 1, 2].map((index) => {
          const photo = facePhotos[index];
          return (
            <div key={index} className="relative aspect-square">
              {photo ? (
                <div className="relative w-full h-full rounded border border-primary/40 overflow-hidden group">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt={`Face photo ${index + 1}`}
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
                  className={`flex flex-col items-center justify-center w-full h-full rounded border-2 border-dashed cursor-pointer transition-all duration-300 ${
                    dragOver
                      ? "border-primary bg-primary/5"
                      : "border-muted-foreground/30 hover:border-primary/50 hover:bg-muted/30"
                  }`}
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
                >
                  <Camera className="w-8 h-8 text-muted-foreground mb-2" />
                  <span className="text-xs text-muted-foreground font-body">Photo {index + 1}</span>
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
          {3 - facePhotos.length} more photo{3 - facePhotos.length > 1 ? "s" : ""} required
        </p>
      )}
      {facePhotos.length === 3 && (
        <p className="text-center text-sm text-primary font-body flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-primary" />
          All 3 photos uploaded
        </p>
      )}
    </section>
  );
};

export default FaceUploadSection;
