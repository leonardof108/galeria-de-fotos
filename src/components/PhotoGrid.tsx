import type { Photo } from "@/data/photos";
import PhotoCard from "./PhotoCard";
import { ImageOff } from "lucide-react";

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid = ({ photos }: PhotoGridProps) => {
  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="mb-4 rounded-full bg-muted p-6">
          <ImageOff className="h-12 w-12 text-muted-foreground" />
        </div>
        <h3 className="font-display text-xl font-semibold text-foreground">
          Nenhuma foto encontrada
        </h3>
        <p className="mt-2 max-w-sm text-muted-foreground">
          Tente buscar por outro termo ou limpe a busca para ver todas as fotos.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {photos.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoGrid;
