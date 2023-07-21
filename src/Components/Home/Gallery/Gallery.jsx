import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Gallery = () => {

    const images = [
        'https://i.postimg.cc/hv4BMZYP/10-ways-to-play-with-toy-cars-FB.jpg',
        'https://i.postimg.cc/W3TLbfT6/cars-construction-benefit-your-child-1200x1200.webp',
        'https://i.postimg.cc/0yZW4MqP/image.png', 'https://www.siku.de/media/48/2d/23/1666683815/PKW_01.jpg',
    ];

    return (
        <div className="grid md:grid-cols-2 gap-4"  
        >
            {images.map((src, index) => (
                <div data-aos="fade-up" data-aos-zoom="zoom-in"
          key={index} className="card rounded-md">
                    <div  className="card-body h-64 flex items-center justify-center">
                        <img  src={src} alt={`Image ${index + 1}`} className="object-contain w-96 ax-h-full" />
                    </div>
                </div>
            ))}
        </div>
    );

};

export default Gallery;