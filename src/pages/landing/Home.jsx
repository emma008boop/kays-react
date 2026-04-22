import savingVideo from '../../assets/video/count_savings.mp4';
import Hero from '../../components/layout/landing/home/Hero';
import DinamContainer from '../../components/layout/landing/home/MainContent';
import './Home.css';

const Home = () => {
    const HERO_CONTENT = {
        label : "Controll the caos, one click at time",
        tittle : "Put your wallet ",
        gradient : "under managament",
        subtext : "Define your goal. Track every cent. Reach it faster.",
        buttonText : "Create account"
    };
    const tag = "Precision Tracking";
    const title = (
        <>
            Stop guessing,
            <br />
            {"\u00A0\u00A0"}{"\u00A0\u00A0"}{"\u00A0\u00A0"}start knowing.
        </>
    );
    const text = "Manage your finances with surgical precision, because clearly your current intuition isn't working";

    return (
            <main className="home-page">
                <Hero 
                    label={HERO_CONTENT.label}
                    tittle={HERO_CONTENT.tittle} 
                    gradientText={HERO_CONTENT.gradient}
                    subtext={HERO_CONTENT.subtext}
                    buttonText={HERO_CONTENT.buttonText}
                />
                <DinamContainer videoUrl={savingVideo} tag={tag} text={text} title={title} type='antfocus'></DinamContainer>
            </main>
    );
};

export default Home;