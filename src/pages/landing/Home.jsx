import AOS from 'aos';
import { useEffect } from 'react';
import videoUrl from '../../assets/video/count_savings.mp4';
import Hero from '../../components/layout/landing/home/Hero';
import Tag from '../../components/ui/tag/Tag';
import VideoBackground from '../../components/ui/video/VideoBackground';
import About from './About';
import './Home.css';
import './storySection.css';
import './valueProposal.css';

const Home = () => {
    const HERO_CONTENT = {
        label : "Controll the caos, one click at time",
        tittle : "Put your wallet ",
        gradient : "under managament",
        subtext : "Define your goal. Track every cent. Reach it faster.",
        buttonText : "Create account"
    };

    useEffect(() => {
        AOS.init({ duration:1500 });
    }, []);

    return (
            <main className="home-page">
                <Hero 
                    label={HERO_CONTENT.label}
                    tittle={HERO_CONTENT.tittle} 
                    gradientText={HERO_CONTENT.gradient}
                    subtext={HERO_CONTENT.subtext}
                    buttonText={HERO_CONTENT.buttonText}
                />
                <section className="value__proposal">
                    {videoUrl && <VideoBackground videoUrl={videoUrl} />}

                    <div className="value__proposal-content">
                        <Tag></Tag>
                        <h2 data-aos="fade-up"  className="value__proposal-tittle">
                            Stop guessing, start knowing.
                        </h2>
                        <p data-aos="fade-up" className="value_proposal-text">
                            Manage your finances with surgical precision, because clearly your current intuition isn't working
                        </p>
                    </div>
                </section>

                <section className='story'>
                    <div className="story__container">
                    {/* DRAINAGE */}
                        <div className="story-layer story-drainage">
                            <div className="story-elevation__img"></div>
                            <div data-aos="fade-up" className="story-elevation__content">
                                <h3 className="story-elevation__title title">DRAINAGE</h3>
                                <p className="story-elevation__text text">
                                    I was in the same position as many others: I had some money, but my balance would vanish without a trace. There were no big splurges or impulsive purchases costing thousands of dollars—the money just wasn't there at the end of the month. I had a leak, but I couldn't find the hole.
                                </p>
                            </div>
                        </div>

                        {/* EXPENSES */}
                        <div className="story-layer story-expenses">
                            <div className="story-elevation__img"></div>
                            <div data-aos="fade-up" className="story-elevation__content">
                                <h3 className="story-elevation__title title">EXPENSES</h3>
                                <p className="story-elevation__text text">
                                    I started looking under the rug, and there they were: the little everyday expenses. That subscription I never used, the coffee I bought on the go, the hidden bank fees. Individually, they didn't amount to much; but added up, they were the reason my savings had stalled.
                                </p>
                            </div>
                        </div>

                        {/* FRICTION */}
                        <div className="story-layer story-friction">
                            <div className="story-elevation__img"></div>
                            <div data-aos="fade-up" className="story-elevation__content">
                                <h3 className="story-elevation__title title">FRICTION</h3>
                                <p className="story-elevation__text text">
                                    I tried the usual finance apps and endless spreadsheets. The problem was the friction: they were either too slow or too complicated for everyday use. If logging an expense took more than three seconds, I simply stopped doing it. I needed something more efficient, not more work.
                                </p>
                            </div>
                        </div>

                        {/* SYSTEM */}
                        <div className="story-layer story-system">
                            <div className="story-elevation__img"></div>
                            <div data-aos="fade-up" className="story-elevation__content">
                                <h3 className="story-elevation__title title">SYSTEM</h3>
                                <p className="story-elevation__text text">
                                    Since I couldn't find a tool that combined simplicity with hard data, I decided to build one myself. I shifted my focus from "administration" to "engineering." I designed a system where every penny serves a purpose and where precision isn't seen as a burden, but as a competitive advantage.
                                </p>
                            </div>
                        </div>

                        {/* FLOW */}
                        <div className="story-layer story-flow">
                            <div className="story-elevation__img"></div>
                            <div data-aos="fade-up" className="story-elevation__content">
                                <h3 className="story-elevation__title title">FLOW</h3>
                                <p className="story-elevation__text text">
                                    Now, the money no longer escapes; it moves where I decide. The app was born from that personal need to stop guessing and start managing with real numbers. In the end, wealth isn't about how much you earn, but how well you understand where what you have flows.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <About></About>

            </main>
    );
};

export default Home;