interface ServiceGalleryProps {
  images: {
    url: string;
    alt: string;
  }[];
}

export default function ServiceGallery({ images }: ServiceGalleryProps) {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative h-64 overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}