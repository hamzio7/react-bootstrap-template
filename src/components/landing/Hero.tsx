import {Button, Container} from "react-bootstrap";

function Hero() {
    return (
        <div className="hero-glow py-5">
            <Container className="py-5 text-center">
                <span className="tag mb-3">v1.1 · 20 Themes · 1 Contract</span>
                <div className="text-eyebrow mb-2">Design System</div>
                <h1 className="text-display display-3 mb-4">
                    One component set.<br/>
                    Twenty distinct <span className="accent-text">identities.</span>
                </h1>
                <p className="lead mx-auto mb-4" style={{maxWidth: '44rem'}}>
                    Twenty curated themes — from brutalist to baroque — each sharing
                    the same utility contract. Your markup never changes; only the
                    style does. Use the arrows above, or tap ← / → to tour the full
                    collection.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Button size="lg" variant="primary" className="glow">
                        Get Started
                    </Button>
                    <Button size="lg" variant="outline-primary" href="#components">
                        Explore Components
                    </Button>
                </div>
            </Container>
        </div>
    );
}

export default Hero;