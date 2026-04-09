import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Tag from '../../../ui/tag/Tag';
import VideoBackground from '../../../ui/video/VideoBackground';
import './MainContent.css';

const MainContent = ({ type, videoUrl, tag, title, text  }) => {
  const containerClass = type === 'antfocus' ? 'mainContent--antfocus' : 'mainContent--default';
  
  useEffect(() => {
    AOS.init({ duration:1500 });
  }, []);

  return (
    <section className={`mainContent ${containerClass}`}>
      
      {videoUrl && <VideoBackground videoUrl={videoUrl} />}

      <div className="mainContent__content">
        <header className="mainContent__header">
            {tag && <Tag tag={tag} />}
            <h2 data-aos="fade-up" className="mainContent__title">{title}</h2>
            <p data-aos="fade-up" className="mainContent__text">{text}</p>
        </header>
      </div>
    </section>
  );
};

export default MainContent;