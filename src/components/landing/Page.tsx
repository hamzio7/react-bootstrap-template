import Hero from "./Hero.tsx";
import Features from "./Features.tsx";
import Divider from "../UI/Divider.tsx";
import ComponentsShowcase from "./ComponentsShowcase.tsx";
import Tokens from "./Tokens.tsx";
import CTA from "./CTA.tsx";
import Footer from "./Footer.tsx";
import AppModal from "../UI/Modal.tsx";
import {Form} from "react-bootstrap";

function Page() {
    return (
        <>
            {/* ================= HERO ================= */}
            <Hero/>

            {/* ================= FEATURES ================= */}
            <Features/>

            {/* ================= DIVIDER ================= */}
            <Divider/>

            {/* ================= COMPONENT SHOWCASE ================= */}
            <ComponentsShowcase/>

            {/* ================= TOKENS ================= */}
            <Tokens/>

            {/* ================= CTA ================= */}
            <CTA/>

            {/* ================= FOOTER ================= */}
            <Footer/>

            {/* ================= MODAL ================= */}
            <AppModal onConfirm={() => alert('Hello World!')}>
                <p className="mb-3">
                    This modal adapts to all twenty themes — surface color, borders,
                    shadows, and typography all shift while the content stays put.
                </p>
                <Form.Control placeholder="Try typing here…"/>
            </AppModal>
        </>
    );
}

export default Page;