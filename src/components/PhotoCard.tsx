import type { Photo } from "@/data/photos";

interface PhotoCardProps {
  photo: Photo;
}

const PhotoCard = ({ photo }: PhotoCardProps) => {
  return (
    <article className="photo-card group cursor-pointer">
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={photo.url}
          alt={photo.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="bg-card p-3">
        <h3 className="text-center font-body text-sm font-medium text-card-foreground md:text-base">
          {photo.name}
        </h3>
      </div>
    </article>
  );
};

export default PhotoCard;
