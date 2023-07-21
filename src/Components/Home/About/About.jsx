import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
const About = () => {
    return (
        <div className="hero h-[450px] bg-slate-100 rounded-md">
  <div className="hero-content flex-col lg:flex-row"  data-aos="fade-up">
    <img src="https://mumsgrapevine.com.au/site/wp-content/uploads/2016/11/storage-toy-cars-se.jpg" className="md:max-w-2xl rounded-lg shadow-xl h-full" />
    <div>
      <h1 className="text-xl md:text-5xl text-cyan-500 font-bold">About Us</h1>
      <p className="py-2 text-sm  md:text-base md:py-6 text-slate-500">At our store, we are passionate about all things related to toy cars. Whether you are a collector, a hobbyist, or a parent looking for the perfect gift, we have a wide range of options to cater to your needs. Our goal is to provide a delightful shopping experience and offer high-quality products that bring joy to children and enthusiasts alike..</p>
      <Link to='/allToys' className="btn h-3 md:h-10 text-xs md:text-base bg-blue-600 border-none">Get Started</Link>
    </div>
  </div>
</div>    );
};

export default About;