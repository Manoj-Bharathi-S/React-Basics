import { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {

    const [pwd1,setPwd1] = useState("")
    const [pwd2,setPwd2] = useState("")
    const [pwdMatch,setPwdmatch] = useState(true);

    function onChangePwd1(event){
        setPwd1(event.target.value);
        };
    function onChangePwd2(event){
        setPwd2(event.target.value);
        if (pwd1 == event.target.value){
            setPwdmatch(true);
        }
        else{
            setPwdmatch(false);
        }
    };

  return (
    <><Link className="btn btn-primary" to="/">Home</Link>
    <form className='my-5' style={{width:"50%",margin:"auto"}}>
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
            <label className="form-label">Password</label>
            <input value={pwd1} onChange={onChangePwd1} type="password" className="form-control" />
        </div>
            <div className="mb-3">
            <label className="form-label">Re-enter Password</label>
            <input value={pwd2} onChange={onChangePwd2} type="password" className="form-control" />
            {!pwdMatch && <p>Password's don't match</p>}
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label">Check me out</label>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
</form>
</>
  );
}

export default Login;