import { Link, useNavigate, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        signIn(email, password)
        .then(result => {
            console.log(result.user);
            // navigate after login 
            navigate(location?.state ? location.state : '/');
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="my-12">
                <h2 className="text-center text-4xl font-bold my-8">Please Login</h2>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="text-sm mt-4">Dont have an account ? <Link className="text-red-500 font-bold" to="/register">Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;