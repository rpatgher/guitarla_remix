import { Link } from "@remix-run/react";

import { formatDate } from "../utils/helpers";

const Post = ({post}) => {
    const {title, content, image, url, publishedAt} = post.attributes;
    const imageUrl = image.data.attributes.formats.small.url;
    return (
        <article className="post">
            <img className="image" src={imageUrl} alt={`${title} Post Image`} />
            <div className="content">
                <h3>{title}</h3>
                <p className="date">{formatDate(publishedAt)}</p>
                <p className="overview">{content}</p>
                <Link className="link" to={`/posts/${url}`}>Read More</Link>
            </div>
        </article>
    )
}

export default Post
