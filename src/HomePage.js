import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
            <h1>Главная страница</h1>
            <Link to={"/about"}>Перейти в "О нас"</Link>
        </>
    );
}

export default HomePage;