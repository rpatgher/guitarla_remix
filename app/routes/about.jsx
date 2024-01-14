import image from '../../public/img/nosotros.jpg';
import styles from "../styles/about.css";

export function meta(){
    return [
        {
            title: "GuitarLA - About Us",
            description: "GuitarLA is a website for guitar lovers. We have a wide variety of guitars, accessories, and more.",
        }
    ]
}

export function links(){
    return [
        {rel: "stylesheet", href: styles},
        {rel: "preload", href: image, as: "image"}
    ]
}

const About = () => {
    return (
        <main className="container about">
            <h2 className="heading">About Us</h2>
            <div className="content">
                <img src={image} alt="About Us Image"  />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet quod esse assumenda itaque tenetur dolorem! Voluptas, eveniet tenetur assumenda autem eos reprehenderit beatae nihil impedit nam placeat, laboriosam consequatur?</p>
                    <p>Veritatis, obcaecati eos mollitia vel animi nam temporibus itaque harum porro molestiae at! Placeat vero possimus impedit commodi, quaerat maiores. Quia dignissimos libero pariatur nostrum ut eligendi? Quasi ducimus vel repellat mollitia autem quas sint rerum sed exercitationem molestiae praesentium</p>
                </div>
            </div>
        </main>
    )
}

export default About
