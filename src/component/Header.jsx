import './Header.css'
import ProfileModal from './ProfileModal';
import { useContext, useState } from 'react';
import { FetchContext } from '../store/fetch-context';

export default function Header() {

const [profileModal, setProfileModal] = useState(false)
  const { showModal, handleModal } = useContext(FetchContext);

function handleProfileModal(isShowing) {
  if (showModal) {
    handleModal(false)
  } 
setProfileModal(isShowing)
}

  return (
    <>
    {profileModal && <ProfileModal onClose={handleProfileModal} />}
    <div className='headerFlex'>
      <div className="headerItemFlex">
         <h4>Onsite Communications</h4>
         <button>Discover</button>
      </div>
      <div className="headerItemFlex">
        <input type="text" id='searchBar'/>
         <button onClick={() => handleProfileModal(true)}>Profile</button>
         <button id='loginBtnMargin'>Login</button>
      </div>
      </div>
    </>
  )
}