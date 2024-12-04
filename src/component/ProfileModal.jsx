import { useContext, useState, useEffect } from 'react';
import { FetchContext } from '../store/fetch-context';
import { useMutation } from "@apollo/client";
import { DELETE_POST } from "../utils/mutations";
import './FormModal.css'
import './CategoryPage.css'


export default function ProfileModal({onClose}) {
  const [fetched, setFetched] = useState()

  const [deletePost, { error }] = useMutation(DELETE_POST)

  const { postData, refetchPosts } = useContext(FetchContext)
  console.log('postData', postData.posts)
  const posts = postData.posts

  useEffect(() => {
    setFetched(true)
    refetchPosts()
  }, [fetched])

  function handleClose() {
    onClose(false)
    setFetched(false)
  }

  function handleDelete(event) {
    console.log(event.target.value)
    let id = event.target.value
    try {
      const { data } = deletePost({
        variables: {
          _id: id
        }
      })
      console.log(data)
    } catch (err) {
      console.error(err)
    }
  setFetched(false)
  }

  return (
    <>
      <div className="modal-overlay" onClick={handleClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className='xBtn'>
        <button onClick={handleClose}><span className='xFont'>X</span></button>
      </div>
          <h1 className="modal-main-header">Post Summary</h1>
          {posts.map((post) => {
            return (
            <div className='modal-flex' id={post._id}>
          <div className='content-box'>
          <h2 className="modal-sub-header">{post.title}</h2>
          <h4 className='profilePostDesc'>{post.category}: {post.subCategory}</h4>
          </div>
          <div className='postDeleteBtn'>
            <button onClick={handleDelete} value={post._id} >Delete</button>
            </div>
          </div>
            )
           }
          )}
        </div>
      </div>
    </>
  );
}