import { Link } from "react-router-dom";

const About = () => {
    
 
    return (
        <>
            <div className="about__container">
                <h1>
                    About Page &nbsp;
                    <Link to="/">Home</Link>
                </h1>
            </div>
        </>
    );
}
 
export default About;