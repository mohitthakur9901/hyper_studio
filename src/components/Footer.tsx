
import { GoArrowUpRight } from 'react-icons/go';
import SocialLinks from './SocialLinks';

function Footer() {
  return (
    <div className='rounded-t-2xl bg-gray-100 py-10 px-5'>
      <div className="flex flex-col lg:flex-row items-center justify-between lg:items-start lg:px-20 mb-10">
        <div className="text-center lg:text-left mb-5 lg:mb-0">
          <h1 className="text-2xl font-bold">LOGO</h1>
          <p className="mt-2">Design better digital experiences with Hyper Studio</p>
          <button className="mt-4 py-2 px-4 bg-white rounded-2xl flex justify-center items-center gap-2 text-black">
            Let's Talk <GoArrowUpRight />
          </button>
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <h2 className="text-xl font-semibold mb-2">Services</h2>
          <ul className="text-center lg:text-left">
            {services.map((service, index) => (
              <li key={index} className="mb-1 hover:underline">{service}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center lg:justify-start">
        <SocialLinks />
      </div>
    </div>
  );
}

const services = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Landing Page",
  "1v1 Talk"
];

export default Footer;
