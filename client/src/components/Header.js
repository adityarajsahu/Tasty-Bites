import logoImg from "../assets/logo.jpg";

const Header = () => {
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="Food App" />
                <h1>Tasty Bites</h1>
            </div>
            <nav>
                <button>Cart (0)</button>
            </nav>
        </header>
    );
};

export default Header;
