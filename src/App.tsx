import { Carousel } from './components/ui/carousel/carousel';
import { CarouselItem } from './components/ui/carousel/carousel-item';

const slides = [
  {
    id: 1,
    image: 'https://www.unimed.coop.br/site/documents/18240778/49476400/13.png/82c3e7b3-01bc-73df-588c-fd6cb1d95037?t=1732891595677',
    title: "",
  },
  {
    id: 2,
    image: 'https://www.unimed.coop.br/site/documents/18240778/49476400/3.png/fc335af0-d2ef-3610-e61f-3ed284e0262e?t=1732891593264',
    title: '',
  },
  {
    id: 3,
    image: 'https://www.unimed.coop.br/site/documents/18240778/49476400/11.png/7e31f3c0-1ee6-87d3-f04b-5ea3bee7db71?t=1732891595193',
    title: '',
  },
  {
    id: 4,
    image: 'https://www.unimed.coop.br/site/documents/18240778/49476400/5.png/dc4a7f5d-f89d-9e3e-3b30-83b5f082f3b8?t=1732891593770',
    title: '',
  },
  {
    id: 5,
    image: 'https://www.unimed.coop.br/site/documents/18240778/49476400/2.png/905a8567-2d23-b50c-a7e6-7eda1d4ea5a3?t=1732891593038',
    title: '',
  },
  {
    id: 6,
    image: 'https://www.unimed.coop.br/site/documents/18240778/49476400/6.png/c743ec24-0e5d-b421-63e6-566c6f6e8e65?t=1732891594017',
    title: '',
  },
  {
    id: 7,
    image: 'https://www.unimed.coop.br/site/documents/18240778/49476400/10.png/58ee4b67-211e-6076-2a90-593d7a396a5b?t=1732891594962',
    title: '',
  },
  {
    id: 8,
    image: 'https://www.unimed.coop.br/site/documents/18240778/49476400/15.png/46df1805-bda5-d2af-1184-f9fa14e72eea?t=1732911807445',
    title: '',
  },
  {
    id: 9,
    image: 'https://www.unimed.coop.br/site/documents/18240778/49476400/8.png/b4d9dfb7-ad2e-d6fa-339c-6c3287781d48?t=1732891594490',
    title: '',
  },
  {
    id: 10,
    image: 'https://www.unimed.coop.br/site/documents/18240778/49476400/4.png/995a2c6e-3d9c-57c3-333b-0951232bdff0?t=1732891593512',
    title: '',
  },
  {
    id: 11,
    image: 'https://www.unimed.coop.br/site/documents/18240778/49476400/9.png/ba8ff065-a7d0-88fa-da09-05cc80291c22?t=1732891594736',
    title: '',
  },
  {
    id: 12,
    image: 'https://www.unimed.coop.br/site/documents/18240778/49476400/7.png/ea0db2d5-ffb7-84c6-1db5-e5e640eab007?t=1732891594257',
    title: '',
  },
  {
    id: 13,
    image: 'https://www.unimed.coop.br/site/documents/18240778/49476400/12.png/ac9095c1-f8ac-4113-4507-2b039a7ea7ea?t=1732891595426',
    title: '',
  },
  {
    id: 14,
    image: 'https://www.unimed.coop.br/site/documents/18240778/49476400/1.png/8b634365-c525-9357-c49e-d01be2acecd2?t=1732891592777',
    title: '',
  }
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
