import React, { Fragment, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {getPosts} from '../store/posts/PostSlice.js'



const Posts = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Fragment>
        <div className='container d-flex mt-5'>
        {/* <button type="button" className="btn btn-primary">Fetch Posts</button> */}
        <button type="button" className="btn btn-outline-primary mx-3" onClick={()=>navigate('/CreatePost')}>Create Posts</button>
        </div>
    </Fragment>
  )
}

export default Posts
