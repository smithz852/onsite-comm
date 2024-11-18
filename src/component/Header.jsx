import './Header.css'

export default function Header() {
  return (
    <>
    <div className='headerFlex'>
      <div className="headerItemFlex">
         <h4>Onsite Communications</h4>
         <button>Discover</button>
      </div>
      <div className="headerItemFlex">
        <input type="text" id='searchBar'/>
         <button>Profile</button>
         <button id='loginBtnMargin'>Login</button>
      </div>
      </div>
    </>
  )
}