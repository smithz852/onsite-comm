import { useContext } from 'react';
import { FetchContext } from '../store/fetch-context';
import './FormModal.css'
import './CategoryPage.css'


export default function ProfileModal({onClose}) {

  //Need to add get request for post data next...
  const { postData } = useContext(FetchContext)
  console.log('postData', postData.posts)
  const posts = postData.posts

  function handleClose() {
    onClose(false)
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
            <div className='modal-flex'>
          <div className='content-box'>
          <h2 className="modal-sub-header">{post.title}</h2>
          <h4 className='profilePostDesc'>{post.category}: {post.subCategory}</h4>
          </div>
          <div className='postDeleteBtn'><button>Delete</button></div>
          </div>
            )
           }
          )}
        </div>
      </div>
    </>
  );
}