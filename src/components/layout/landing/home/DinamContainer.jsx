import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Tag from '../../../ui/tag/Tag';
import VideoBackground from '../../../ui/video/VideoBackground';
import './DinamContainer.css';

const DinamContainer = ({ type, videoUrl, tag, title, text  }) => {
  const containerClass = type === 'antfocus' ? 'dinamContainer--antfocus' : 'dinamContainer--default';
  
  useEffect(() => {
    AOS.init({ duration:1500 });
  }, []);

  return (
    <section className={`dinamContainer ${containerClass}`}>
      
      {videoUrl && <VideoBackground videoUrl={videoUrl} />}

      <div className="dinamContainer__content">
        <header className="dinamContainer__header">
            {tag && <Tag tag={tag} />}
            <h2 data-aos="fade-up" className="dinamContainer__title">{title}</h2>
            <p data-aos="fade-up" className="dinamContainer__text">{text}</p>
        </header>
      </div>
    </section>
  );
};

export default DinamContainer;