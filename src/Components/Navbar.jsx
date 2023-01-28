import '../Styles/Navbar.css'
import { FaSun, FaMoon } from 'react-icons/fa';

export default function Navbar({mode="dark", setMode=null,  activated='home'}) {
  const handleClick = () => {
    if(mode=="dark") {
      setMode("light");
    }else {
      setMode("dark");
    }
  }
  return (
    <div className={"nav-bar"}>
      <img 
        src="logo.png" 
        className='logo' 
        height="40px" 
        width="40px" 
        alt="logo"
      />
      <div className='container'>
        <div className='signup'>
          <div className="btn-txt">LOGIN</div>
          <div className="arrow">{">>"}</div>
        </div>
        <p className={(activated=='home')?"activated":null}>HOME</p>
        <p className={(activated=='lab')?"activated":null}>LAB</p>
        <div className='mode-btn'>
          <div className='ball' style={{left: `${(mode=='dark')?"100":"0"}%`}} onClick={handleClick}>
            <FaMoon size={20} className={(mode=="dark")?"":"hide"}/>
            <FaSun size={20} className={(mode=="dark")?"hide":""}/>
          </div>
        </div>
      </div>
    </div>
  )
}

