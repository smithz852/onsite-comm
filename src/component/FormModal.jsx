import { useMutation } from "@apollo/client";
import { ADD_POST } from "../utils/mutations";
import "./FormModal.css";
import FormInput from "./FormInput";

export default function FormModal({ onClose, subcategory, category }) {

const [addPost, { error }] = useMutation(ADD_POST);

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const aquisitionData = fd.getAll('aquisition')
    const entryData = Object.fromEntries(fd.entries())
    entryData.aquisition = aquisitionData
    console.log(entryData);
    console.log("form submitted");

    try {
      const { data } = addPost({
        variables: {
          title: entryData["post-title"],
          description: entryData["post-descr"],
          subCategory: subcategory,
          category: category
        }
      })
    } catch (error) {
      console.error(error);
    }
    handleClose()
  }

  function handleClose() {
    onClose(false);
  }

  return (
    <>
      <div className="modal-overlay" onClick={handleClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h1 className="modal-main-header">Create A Post</h1>
          <h2 className="modal-sub-header">{subcategory}</h2>
          <div className="modal-input-container">
            <form onSubmit={handleSubmit}>
              <div>
                <FormInput
                  id="post-title"
                  label="Post Title"
                  inputType="text"
                  name="post-title"
                  
                />
                <FormInput
                  id="post-descr"
                  label="Post Description"
                  inputType="text"
                  name="post-descr"
                  
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
