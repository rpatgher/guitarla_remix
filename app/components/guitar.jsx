import { Link } from '@remix-run/react';

const Guitar = ({guitar}) => {
    const { name, price, description, image, url } = guitar;
    const imageUrl = image.data.attributes.formats.medium.url;
    return (
        <div className="guitar">
            <img src={imageUrl} alt={`${name} Guitar Image`} />
            <div className="content">
                <h3>{name}</h3>
                <p className="description">{description}</p>
                <p className="price">${price}</p>

                <Link className="link" to={`/guitars/${url}`}>View Details</Link>
            </div>
        </div>
    )
}

export default Guitar
