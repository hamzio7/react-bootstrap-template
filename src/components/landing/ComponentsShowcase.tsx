import {
    Accordion,
    Alert,
    Badge,
    Button,
    Card,
    Col,
    Container,
    Dropdown,
    DropdownButton,
    Form,
    Row,
    Tab,
    Tabs
} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {modalActions} from "../../store/slices/Modal.tsx";

function ComponentsShowcase() {
    const dispatch = useDispatch();

    const toggleModal = () => {
        dispatch(modalActions.toggleModal());
    }


    return (
        <Container id="components" className="py-5">
            <div className="text-center mb-5">
                <div className="text-eyebrow mb-2">Showcase</div>
                <h2 className="text-display">Every component, one theme at a time</h2>
            </div>

            <Row className="g-4">
                {/* --- Left column: buttons, alerts, form --- */}
                <Col lg={6}>
                    <div className="surface mb-4">
                        <div className="text-eyebrow mb-3">Buttons</div>
                        <div className="d-flex flex-wrap gap-2 mb-3">
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="outline-primary">Outline</Button>
                            <Button variant="dark">Dark</Button>
                            <Button variant="primary" className="glow">Glowing</Button>
                        </div>
                        <Button variant="primary" size="lg" className="w-100 glow">
                            Full Width CTA
                        </Button>
                    </div>

                    <div className="surface mb-4">
                        <div className="text-eyebrow mb-3">Alerts</div>
                        <Alert variant="primary" className="mb-2">Primary — a hero message.</Alert>
                        <Alert variant="success" className="mb-2">Success — everything worked.</Alert>
                        <Alert variant="warning" className="mb-0">Warning — check your input.</Alert>
                    </div>

                    <div className="surface">
                        <div className="text-eyebrow mb-3">Form</div>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="you@example.com"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Say hello…"/>
                            </Form.Group>
                            <Form.Check type="switch" id="newsletter" label="Subscribe to updates"
                                        className="mb-3"/>
                            <Button variant="primary" className="w-100">Submit</Button>
                        </Form>
                    </div>
                </Col>

                {/* --- Right column: cards, tabs, accordion, modal --- */}
                <Col lg={6}>
                    <Card className="mb-4 overflow-hidden">
                        <Card.Body>
                            <span className="tag mb-3">Card</span>
                            <Card.Title as="h4" className="mb-2">A themed card</Card.Title>
                            <Card.Text className="text-secondary mb-3">
                                Cards inherit background, border, radius, and shadow from the
                                active theme — no per-theme JSX, no conditional classes.
                            </Card.Text>
                            <div className="d-flex gap-2">
                                <Badge bg="primary">Badge</Badge>
                                <Badge bg="secondary">Another</Badge>
                            </div>
                        </Card.Body>
                    </Card>

                    <div className="surface mb-4">
                        <div className="text-eyebrow mb-3">Tabs</div>
                        <Tabs defaultActiveKey="one" className="mb-3">
                            <Tab eventKey="one" title="One">
                                <p className="mb-0 text-secondary">First tab content.</p>
                            </Tab>
                            <Tab eventKey="two" title="Two">
                                <p className="mb-0 text-secondary">Second tab content.</p>
                            </Tab>
                            <Tab eventKey="three" title="Three">
                                <p className="mb-0 text-secondary">Third tab content.</p>
                            </Tab>
                        </Tabs>
                    </div>

                    <div className="surface mb-4">
                        <div className="text-eyebrow mb-3">Accordion</div>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>How does switching work?</Accordion.Header>
                                <Accordion.Body>
                                    A single link tag is swapped at runtime. Fonts for the
                                    incoming theme load on demand — no reload, no flash.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Does state persist?</Accordion.Header>
                                <Accordion.Body>
                                    Yes. React state — open modals, typed input, active
                                    tabs — is completely untouched by the CSS swap.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                    <div className="surface">
                        <div className="text-eyebrow mb-3">Interaction</div>
                        <div className="d-flex flex-wrap gap-2">
                            <Button variant="primary" onClick={toggleModal}>
                                Open Modal
                            </Button>
                            <DropdownButton variant="outline-primary" title="Dropdown">
                                <Dropdown.Item href="#/a">Action</Dropdown.Item>
                                <Dropdown.Item href="#/b">Another</Dropdown.Item>
                                <Dropdown.Divider/>
                                <Dropdown.Item href="#/c">Something else</Dropdown.Item>
                            </DropdownButton>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* --- Stats strip --- */}
            <Row className="g-4 mt-2">
                {[
                    {value: '20', label: 'Themes'},
                    {value: '8', label: 'Shared Utilities'},
                    {value: '1', label: 'Markup'},
                    {value: '0', label: 'Reloads'},
                ].map((s) => (
                    <Col xs={6} md={3} key={s.label}>
                        <div className="surface text-center h-100">
                            <div className="text-display display-4 accent-text mb-1">{s.value}</div>
                            <div className="text-eyebrow">{s.label}</div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ComponentsShowcase;