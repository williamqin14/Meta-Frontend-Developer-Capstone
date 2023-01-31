import logo from "../icons_assets/Logo.svg";
export default function Header() {
    return(
        <header>
            <meta name="description" content="Welcome to the Little Lemon Restaurant"/>
            <meta name="og:title" content="Little Lemon Restaurant"/>
            <meta name="og:image" content={logo}/>
            <meta name="og:description" content="Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."/>
        </header>
    )
};

