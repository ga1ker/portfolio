import { useState, useEffect, SetStateAction } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectSliderProps {
  images?: string[];
  title: string;
  className?: string;
}

// Componente del Slider
export const ProjectSlider = ({ images, title, className }: ProjectSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imagesArray = images || ["/aromantial_home.png", "/aromantial_app.png"];

  const goToNext = () => {
    setCurrentSlide((prev) => 
      prev === imagesArray.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? imagesArray.length - 1 : prev - 1
    );
  };
  // Auto-slide cada 5 segundos (opcional)
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  
  const goToSlide = (index: SetStateAction<number>) => {
    setCurrentSlide(index);
  };

  return (
    <div className={"relative w-full h-full group " + (className ? ` ${className}` : '')}>
      {/* Contenedor del slider */}
      <div className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-lg bg-slate-900/50">
        {/* Slides */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {imagesArray.map((image, index) => (
            <div 
              key={index}
              className="w-full h-full flex-shrink-0"
            >
              <div className="relative w-full h-full p-4">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${title} - Imagen ${index + 1}`}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Flecha izquierda */}
        <button
          onClick={goToPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/70 hover:bg-slate-900/90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:shadow-lg z-10"
          aria-label="Imagen anterior"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Flecha derecha */}
        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/70 hover:bg-slate-900/90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:shadow-lg z-10"
          aria-label="Siguiente imagen"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Indicadores (bolitas) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {imagesArray.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-cyan-400 scale-125' 
                  : 'bg-slate-500 hover:bg-slate-400'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>

        {/* Contador de imágenes */}
        <div className="absolute top-4 right-4 bg-slate-900/70 text-white text-xs sm:text-sm px-2 py-1 rounded-full z-10">
          {currentSlide + 1} / {imagesArray.length}
        </div>
      </div>
    </div>
  );
};