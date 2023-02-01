import CallToAction from "./CallToAction";
import CustomersSay from "./CustomersSay";
import Specials from "./Specials";
import Chicago from "./Chicago";
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

export default function HomePage() {
    return (
        <>
            <Header></Header>
            <Nav></Nav>
            <main>
                <CallToAction></CallToAction>
                <Specials></Specials>
                <CustomersSay></CustomersSay>
                <Chicago></Chicago>
            </main>
            <Footer></Footer>
        </>
    )
}