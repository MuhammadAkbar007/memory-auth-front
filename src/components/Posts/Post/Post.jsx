import moment from 'moment'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/postsActions'
import { AiFillLike, AiFillDelete } from 'react-icons/ai'

const Post = ({ post, setCurrentId }) => {

  const dispatch = useDispatch()

  return (
    <div>
      <div className="card shadow">
        <img src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}
          alt="chosenImage" className='card-img' style={{ height: '25vh' }} />
        <div className="card-img-overlay text-white">
          <div className="row">
            <div className="col-10">
              <h6 className="card-title">{post.creator}</h6>
              <p className="card-text small">{moment(post.createdAt).fromNow()}</p>
            </div>
            <div className="col-2">
              <p className="card-text" role="button" onClick={() => setCurrentId(post._id)}>...</p>
            </div>
          </div>
        </div>

        <p className='text-secondary'>{post.tags.map(tag => `#${tag} `)}</p>
        <h5><b>{post.title}</b></h5>
        <p className='text-secondary'>{post.message}</p>

      </div>
      
      <div className="card-footer shadow text-white rounded">
        <div className="row">
          <div className="col-4 d-flex align-items-center my_icon" onClick={() => dispatch(likePost(post._id))} >
            <AiFillLike />
            Like {post.likeCount}
          </div>
          <div className="col-4 d-flex align-items-center my_icon" onClick={() => dispatch(deletePost(post._id))} >
            <AiFillDelete />
            Delete
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Post