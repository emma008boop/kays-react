import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import Button from '../../../ui/button/Button';
import './Hero.css';

const Hero = ({ label, tittle, gradientText, subtext, buttonText }) => {
    const containerRef = useRef(null);
    const labelRef = useRef(null);
    const titleRef = useRef(null);
    const subtextRef = useRef(null);
    const buttonRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(containerRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.5 }
        )
        .fromTo(labelRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8 },
            '-=0.2'
        )
        .fromTo(titleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1 },
            '-=0.5'
        )
        .fromTo(lineRef.current,
            { scaleX: 0, opacity: 0 },
            { scaleX: 1, opacity: 1, duration: 0.6 },
            '-=0.5'
        )
        .fromTo(subtextRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8 },
            '-=0.3'
        )
        .fromTo(buttonRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8 },
            '-=0.4'
        );

    }, []);

    const [particles] = useState(() => 
        [...Array(20)].map((_, i) => ({
            id: i,
            delay: `${Math.random() * 5}s`,
            x: `${Math.random() * 100}%`,
            duration: `${3 + Math.random() * 4}s`
        }))
    );

    return (
        <section className="hero-wrapper" ref={containerRef}>
            <div className="hero-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
            <div className="hero-content">
                <span className="hero-label" ref={labelRef}>{label}</span>
                <h1 className="hero-headline" ref={titleRef}>
                    {gradientText ? (
                        <>
                            {tittle}
                            <span className="gradient-text">{gradientText}</span>
                        </>
                    ) : tittle}
                </h1>
                <div className="hero-line" ref={lineRef}></div>
                <p className="hero-subtext" ref={subtextRef}>
                    {subtext}
                </p>
                <div className="hero-actions" ref={buttonRef}>
                    <Button variant='primary' animation='animation'>{buttonText}</Button>
                </div>
            </div>  
            <div className="hero-particles">
                {particles.map((p) => (
                    <div key={p.id} className="particle" style={{
                        '--delay': p.delay,
                        '--x': p.x,
                        '--duration': p.duration
                    }}></div>
                ))}
            </div>
        </section>        
    );
};

export default Hero;