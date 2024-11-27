import './FormModal.css'

export default function FormModal({onClose}) {

function handleClose() {
    onClose(false)
  }

  return (
    <>
      <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h1 className="modal-main-header">Main Header</h1>
        <h2 className="modal-sub-header">Smaller Header</h2>
        <div className="modal-input-container">
          <input type="text" placeholder="Input 1" className="modal-input" />
          <input type="text" placeholder="Input 2" className="modal-input" />
        </div>
        <div className="modal-footer">
          <button onClick={handleClose} className="modal-button">Close</button>
          <button className="modal-button">Submit</button>
        </div>
      </div>
    </div>
    </>
  )
}