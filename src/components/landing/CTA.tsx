import {Button, Container} from "react-bootstrap";

export default function CTA() {
    return <div className="hero-glow py-5 mt-5">
        <Container className="text-center py-5">
            <div className="text-eyebrow mb-2">Ready?</div>
            <h2 className="text-display display-5 mb-4">
                Try all twenty <span className="accent-text">right now.</span>
            </h2>
            <p className="lead mx-auto mb-4" style={{maxWidth: '38rem'}}>
                Use the arrows at the top — or ← / → — to tour every theme. Each
                component above re-skins instantly, with no reload and no lost state.
            </p>
            <Button size="lg" variant="primary" className="glow">
                Get the Templates
            </Button>
        </Container>
    </div>
}