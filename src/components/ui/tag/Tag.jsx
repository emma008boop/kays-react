import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './Tag.css';

const Tag = ({ tag }) => {
  
  useEffect(() => {
      AOS.init({ duration:1500 });
  }, []);

  return (
    <span data-aos="fade-up" className="dinamContainer__tag">{tag}</span>
  );
};

export default Tag;