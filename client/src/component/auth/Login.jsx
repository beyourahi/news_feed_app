import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthState";

const Login = props => {
    const { login, isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        if (isAuthenticated) props.history.push("/");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        login({ email, password });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-7 p-10 rounded-lg shadow-2xl">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Hop right in! 🥳
                    </h2>
                </div>

                <form className="mt-8 space-y-6" onSubmit={onSubmit}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm space-y-2.5">
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                autoComplete="email"
                                required
                                onChange={onChange}
                                className="appearance-none rounded-none relative block w-full px-3.5 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-base"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                autoComplete="current-password"
                                required
                                onChange={onChange}
                                className="appearance-none rounded-none relative block w-full px-3.5 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 text-base"
                                placeholder="Password"
                            />
                        </div>
                    </div>

                    {/* <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-900"
                            >
                                Remember me
                            </label>
                        </div>

                        <div className="text-sm">
                            <a
                                href="/"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Forgot your password?
                            </a>
                        </div>
                    </div> */}

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 duration-500 transition-all transform active:scale-90 active:outline-none appearance-none"
                        >
                            Log In
                        </button>
                    </div>
                </form>
                <h4 className="mt-2 text-center text-lg font-medium text-gray-600">
                    New here?{" "}
                    <Link
                        to="/register"
                        className="text-indigo-600 hover:text-indigo-800 duration-500 transition-colors"
                    >
                        Sign Up
                    </Link>
                </h4>
            </div>
        </div>
    );
};

export default Login;
