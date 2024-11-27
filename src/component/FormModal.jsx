import "./FormModal.css";
import FormInput from "./FormInput";

export default function FormModal({ onClose }) {
  function handleSubmit(event) {
    event.preventDefault();
    console.log("form submitted");
  }

  function handleClose() {
    onClose(false);
  }

  return (
    <>
      <div className="modal-overlay" onClick={handleClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h1 className="modal-main-header">Main Header</h1>
          <h2 className="modal-sub-header">Smaller Header</h2>
          <div className="modal-input-container">
            <form onSubmit={handleSubmit}>
              <div>
                <FormInput
                  id="post-title"
                  label="Post Title"
                  inputType="text"
                  name="post-title"
                  // value={null}
                />
                <FormInput
                  id="post-descr"
                  label="Post Description"
                  inputType="text"
                  name="post-descr"
                  // value={null}
                />
              </div>
              <div>
                <FormInput
                  id="hobbiest"
                  label="Hobbiest"
                  inputType="checkbox"
                  name="acquisition"
                  value="hobbiest"
                />
                <FormInput
                  id="professional"
                  label="Professional"
                  inputType="checkbox"
                  name="acquisition"
                  value="professional"
                />
                <FormInput
                  id="amateur"
                  label="Amateur"
                  inputType="checkbox"
                  name="acquisition"
                  value="amateur"
                />
                <FormInput
                  id="diy-enthusiast"
                  label="DIT Enthusiast"
                  inputType="checkbox"
                  name="acquisition"
                  value="diy-enthusiast"
                />
              </div>
              <div className="modal-footer">
                <button onClick={handleClose} className="modal-button">
                  Close
                </button>
                <button className="modal-button" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
