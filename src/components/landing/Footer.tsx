import {Container} from "react-bootstrap";

export default function Footer() {
    return <footer className="py-4 border-top">
        <Container>
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
                <span className="text-secondary small">
                    ◆ Theme Lab — twenty themes, one contract.
                </span>
                <div className="d-flex gap-3">
                    <a href="#" className="text-secondary small text-decoration-none">Docs</a>
                    <a href="#" className="text-secondary small text-decoration-none">Source</a>
                    <a href="#" className="text-secondary small text-decoration-none">License</a>
                </div>
            </div>
        </Container>
    </footer>
}