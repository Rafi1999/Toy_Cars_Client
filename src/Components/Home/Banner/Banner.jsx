import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const Banner = () => {
    return (
        <div data-aos="fade-up" data-aos-zoom="zoom-in" className="hero h-[550px] my-5 rounded-md" style={{ backgroundImage: `url("https://media.istockphoto.com/id/876439184/photo/vintage-toy-cars.jpg?s=612x612&w=0&k=20&c=84hv4E1GlkTAL1n_NgdD8ZGBNzYfhbwL3H5J32dpgJw=")` }}>
  <div className="hero-overlay bg-opacity-50 rounded-md"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-cyan-50">
Welcome to Toy Cars Store website!</h1>
    </div>
  </div>
</div>
    );
};

export default Banner;