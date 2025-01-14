import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blogs-list">
      {blogsList.map(each => (
        <BlogItem blogDetails={each} key={each.id} />
      ))}
    </ul>
  )
}

export default BlogList
