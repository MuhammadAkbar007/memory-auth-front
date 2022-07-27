import './App.css'

import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getPosts } from './actions/postsActions'

import Posts from "./components/Posts/Posts"
import Form from './components/Form/Form'

import memories from './images/memories.png'

function App() {

  const dispatch = useDispatch()

  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <div className="container mb-3">
      <div className="my-3 shadow">
        <div className="card bg-light text-info">
          <div className="card-body">
            <div className="row">
              <div className="col-9">
                <h1 className="text-center"><b>Memories</b></h1>
              </div>
              <div className="col-3">
                <img src={memories} alt="memories" className='img-responsive mx-auto d-block img-memories' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mobile">
        <div className="col-md-8 col-sm-12">
          <Posts setCurrentId={setCurrentId} />
        </div>
        <div className="col-md-4 col-sm-12">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
        
    </div>
  )
}

export default App