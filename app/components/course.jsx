

const Course = ({course}) => {
    const {title, content, image} = course;
    const imageUrl = image.data.attributes.url;
    console.log(imageUrl);
    return (
        <section className="course">
            <style jsx="true">{`
                .course{
                    background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imageUrl});
                }
            `}</style>
            <div className="course-grid container">
                <div className="content">
                    <h2 className="heading">{title}</h2>
                    <p className="text">{content}</p>
                </div>
            </div>
        </section>
    )
}

export default Course
