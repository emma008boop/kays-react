import './About.css';

const About = () => {
    return (
       <>
            <section className="about-hero">
                <div className="container">
                    <h1 className="display-title">
                        Precision in every<br />
                    </h1>
                    <h1 className='display-title title-smaller'> Economic FAILURE.</h1>
                    <p className="hero-text">
                        KAYS was born from the obsession to fix what your emotional spending leaks skills couldn't. 
                        We don’t just track expenses; we audit your lifestyle to make sure you actually afford 
                        your ambitions before the month runs out.
                    </p>
                </div>
            </section>

            <section className="about-dna">
                <div className="container">
                    <div className="dna-grid">
                        <div className="dna-item mission">
                            <span className="card-tag">Our Mission</span>
                            <p>
                                We exist to eradicate the “I don't know where my money went” syndrome. 
                                We want you to transform your financial chaos into a structure so clean 
                                that even your accountant will cry with joy.
                            </p>
                        </div>
                        <div className="dna-item vision">
                            <span className="card-tag">Our Vision</span>
                            <p>
                                To engineer a reality where your financial goals don't die on the 20th of each month. 
                                We're here to optimize your economy so you can actually afford what you planned.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
       </>
    );
}

export default About;