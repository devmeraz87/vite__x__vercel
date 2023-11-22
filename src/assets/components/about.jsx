import { Link } from "react-router-dom";

const About = () => {
    
 
    return (
        <>
            <div className="about__container">
                <h1>
                    About Page &nbsp;
                    <Link href="/">Home</Link>
                </h1>
            </div>
        </>
    );
}
 
export default About;