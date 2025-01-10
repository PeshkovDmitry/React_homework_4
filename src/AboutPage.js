import { Link } from "react-router-dom";

function AboutPage() {
    return (
        <>
            <h1>О нас</h1>
            <Link to={"/home"}>Перейти на главную</Link>    
        </>
    );
}

export default AboutPage;