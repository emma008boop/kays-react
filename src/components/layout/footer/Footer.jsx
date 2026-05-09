import './Footer.css';

const Footer = () => {
    return(
        <>
            <footer className="main-footer">
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-brand">
                            <span className="logo-text">KAYS</span>
                            <p>Engineered for clarity.</p>
                        </div>
                        <nav className="footer-nav">
                            <div className="nav-col">
                                <h4>Internal</h4>
                                <a href="index.html">Product</a>
                                <a href="./pages/public/about.html">About</a>
                            </div>
                            <div className="nav-col">
                                <h4>Compliance</h4>
                                <a href="legal.html">Privacy</a>
                                <a href="legal.html">Terms</a>
                            </div>
                        </nav>
                    </div>
                    
                    <div className="footer-bottom">
                        <p className="copyright">&copy; 2026 KAYS Project.</p>
                        <div className="social-links">
                            <a href="#">X / Twitter</a>
                            <a href="#">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;