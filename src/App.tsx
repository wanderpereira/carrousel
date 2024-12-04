import { Carousel } from './components/ui/carousel/carousel';
import { CarouselItem } from './components/ui/carousel/carousel-item';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    title: "Nature's Beauty",
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
    title: 'Mountain Lake',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
    title: 'Sunset Valley',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-white-100 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-xl overflow-hidden shadow-2xl bg-white">
          <Carousel className="h-[600px]">
            {slides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className="relative w-full h-full">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h2 className="text-3xl font-bold text-white mb-4">
                        {slide.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default App;
