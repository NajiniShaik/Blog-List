import './index.css'

const BlogItem = props => {
  const {blogDetails} = props

  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog">
      <div className="card">
        <h1 className="blog-title">{title}</h1>
        <p className="date">{publishedDate}</p>
      </div>
      <p className="about-blog">{description}</p>
    </li>
  )
}

export default BlogItem
