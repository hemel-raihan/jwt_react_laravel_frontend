
import {Routes, Route, Link} from 'react-router-dom';
import Home from '../home';
import Dashboard from '../dashboard';
import AuthUser from '../AuthUser';

function Auth() {

  const {token,logout} = AuthUser();

  const logoutUser = () =>{
    if(token !== undefined){
      logout();
    }
  }
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
              <Link className="nav-item nav-link" to="/dashboard">Dashboard</Link>
              <span role="button" className="nav-item nav-link" onClick={logoutUser}>Logout</span>
            </div>
          </div>
       </nav>
       <div className="container">
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/dashboard" element={<Dashboard />} />
         </Routes>
       </div>
    </div>
  );
}

export default Auth;
