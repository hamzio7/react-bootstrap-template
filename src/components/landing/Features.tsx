import {Col, Container, Row} from "react-bootstrap";

function Features() {
    return (
        <Container id="features" className="py-5">
            <div className="text-center mb-5">
                <div className="text-eyebrow mb-2">Why it works</div>
                <h2 className="text-display">Built for consistency</h2>
            </div>

            <Row className="g-4">
                {[
                    {
                        tag: 'Contract',
                        title: 'Shared Class Names',
                        body: 'Every utility — .divider, .tag, .surface, .glow — exists in all twenty themes with identical naming. Write once, re-skin everywhere.',
                    },
                    {
                        tag: 'Runtime',
                        title: 'Live Switching',
                        body: 'Swap full Bootstrap themes without a reload or state loss. Only the stylesheet link changes — your forms, tabs, and modals stay exactly as they were.',
                    },
                    {
                        tag: 'Typography',
                        title: 'Font-Lazy',
                        body: 'The default theme ships with zero external requests. Each switch fetches only that theme\u2019s fonts — and repeats are cached by the browser.',
                    },
                ].map((f) => (
                    <Col md={4} key={f.title}>
                        <div className="surface h-100">
                            <span className="tag mb-3">{f.tag}</span>
                            <h4 className="mb-2">{f.title}</h4>
                            <p className="mb-0 text-secondary">{f.body}</p>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Features;