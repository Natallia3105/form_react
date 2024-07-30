import '../../../App.css'
const Login = () => {
    return (
        <div className="min-h-screen mt-72 pb-8 flex justify-center items-center bg-custom-gradient">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <div className="flex flex-col justify-center items-center w-full mt-8 pb-8">
                    <div className="text-purple-800 text-4xl font-bold">Sign Up</div>
                    <div className="w-20 h-2 bg-purple-800 rounded-lg mt-3"></div>
                </div>
                <div className="mt-7 flex flex-col">
                    <div className="flex justify-center items-center w-full m-auto h-1/2 rounded-lg mb-4 gap-1">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </span>
                        <input
                            type="text"
                            id="name"
                            placeholder="Name"
                            className="border bg-neutral-100 p-2 rounded-md w-full"/>
                    </div>
                    <div className="flex justify-center items-center w-full m-auto h-1/2 rounded-lg mb-4 gap-1">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
            </span>
                        <input
                            type="email"
                            id="email"
                            placeholder="Email"
                            className="border bg-neutral-100 p-2 rounded-md w-full"/>
                    </div>
                    <div className="flex justify-center items-center w-full m-auto h-1/2 rounded-lg mb-4 gap-1">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </span>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            className="border bg-neutral-100 p-2 rounded-md w-full"/>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <div className="text-gray-400">Lost password?</div>
                        <span className="text-gray-400 cursor-pointer">Click Here</span>
                    </div>
                    <div className="flex justify-center gap-10 mt-10">
                        <button className="bg-transparent border border-gray-400 rounded-lg px-4 py-2 text-gray-400">Sign Up</button>
                        <button className="bg-transparent border border-gray-400 rounded-lg px-4 py-2 text-gray-400">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
