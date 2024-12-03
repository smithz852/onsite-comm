import './FormModal.css'
import './CategoryPage.css'


export default function ProfileModal({onClose}) {

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
          <div>
          <h2 className="modal-sub-header">Post Title</h2>
          <h4>Category: subcategory</h4>
          </div>
          <div><button>Delete</button></div>
        </div>
      </div>
    </>
  );
}