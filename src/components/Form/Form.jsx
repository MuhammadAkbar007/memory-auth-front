import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FileBase64 from 'react-file-base64'
import { createPost, updatePost } from '../../actions/postsActions'

const Form = ({ currentId, setCurrentId }) => {

  const dispatch = useDispatch()
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' })

  const post = useSelector(state => currentId ? state.posts.find(p => p._id === currentId) : null)

  useEffect(() => {
    if (post) setPostData(post)
  }, [post])

  const clear = () => {
    setCurrentId(null)
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    if (currentId) {
      dispatch(updatePost(currentId, postData))
    } else {
      dispatch(createPost(postData))
    }
    clear()
  }

  return (
    <div className='container border shadow'>
      <form autoComplete='off' noValidate onSubmit={handleSubmit} className='py-3 px-3' >
        <h4 className='text-center'><b> {currentId ? 'Editing' : 'Creating'} a Memory</b></h4>
        <input type="text" placeholder='Creator' className='form-control' value={postData.creator}
          onChange={e => setPostData({ ...postData, creator: e.target.value })} />
        <input type="text" placeholder='Title' className='form-control my-2' value={postData.title}
          onChange={e => setPostData({ ...postData, title: e.target.value })} />
        <input type="text" placeholder='Message' className='form-control' value={postData.message}
          onChange={e => setPostData({ ...postData, message: e.target.value })} />
        <input type="text" placeholder='Tags' className='form-control my-2' value={postData.tags}
          onChange={e => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className="form-control form-control-sm">
          <FileBase64 multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <div className="row">
          <button className='btn btn-primary my-3 text-white' type='submit'>Submit</button>
        </div>
        <div className="row">
          <button className='btn btn-danger' type='button' onClick={clear}>Clear</button>
        </div>
      </form>
    </div>
  )
}

export default Form