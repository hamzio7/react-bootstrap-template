import {Button, Col, Container, ListGroup, ProgressBar, Row, Spinner} from "react-bootstrap";

function Tokens() {
    return (
        <Container id="tokens" className="py-5">
            <div className="divider">◇</div>

            <div className="text-center mb-5 mt-4">
                <div className="text-eyebrow mb-2">Design Tokens</div>
                <h2 className="text-display">The shared contract</h2>
            </div>

            <Row className="g-4">
                <Col md={6}>
                    <div className="surface h-100">
                        <div className="text-eyebrow mb-3">Utility Classes</div>
                        <ListGroup variant="flush">
                            {[
                                ['.divider', 'Ornamental separator'],
                                ['.text-eyebrow', 'Small uppercase label'],
                                ['.text-display', 'Display heading'],
                                ['.surface', 'Elevated panel'],
                                ['.accent-text', 'Accent-colored text'],
                                ['.hero-glow', 'Radial glow backdrop'],
                                ['.tag', 'Small uppercase pill'],
                                ['.glow', 'Glow / elevation effect'],
                            ].map(([cls, desc]) => (
                                <ListGroup.Item
                                    key={cls}
                                    className="d-flex justify-content-between align-items-center px-0 bg-transparent"
                                >
                                    <code>{cls}</code>
                                    <span className="text-secondary small">{desc}</span>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </div>
                </Col>

                <Col md={6}>
                    <div className="surface h-100">
                        <div className="text-eyebrow mb-3">Live Demo</div>

                        <div className="mb-4">
                            <div className="text-eyebrow mb-1">Eyebrow</div>
                            <div className="text-display h3 mb-0">Display heading</div>
                        </div>

                        <div className="mb-4">
                            <span className="tag">Tag</span>
                            {' '}
                            <span className="accent-text fw-semibold">Accent text</span>
                        </div>

                        <div className="divider">◆</div>

                        <div className="d-flex gap-2 mb-4">
                            <Button variant="primary" size="sm" className="glow">Glowing</Button>
                            <Button variant="outline-primary" size="sm">Outline</Button>
                        </div>

                        <ProgressBar now={65} label="65%" className="mb-3"/>

                        <div className="d-flex align-items-center gap-2">
                            <Spinner animation="border" size="sm"/>
                            <span className="text-secondary small">Loading indicator</span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Tokens;