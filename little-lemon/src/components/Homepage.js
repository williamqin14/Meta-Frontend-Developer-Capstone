import CallToAction from "./CallToAction";
import CustomersSay from "./CustomersSay";
import Specials from "./Specials";
import Chicago from "./Chicago";

export default function Homepage() {
    return (
        <main>
            <CallToAction></CallToAction>
            <Specials></Specials>
            <CustomersSay></CustomersSay>
            <Chicago></Chicago>
        </main>
    )
}