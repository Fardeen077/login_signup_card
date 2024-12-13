import { UserIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { LockClosedIcon } from '@heroicons/react/24/solid';

function LoginSignup() {
    return (
        <div className='flex flex-col justify-center items-center m-auto mt-40 myfont rounded-lg shadow-2xl max-w-xl gap-7 text-black p-10 '>
            <div className='p-5 text-2xl font-bold'>
                Sign Up
                <span className='w-10 h-2 bg-white '></span>
            </div>

            {/* Name Input */}
            <div className="flex items-center justify-center m-auto w-full h-20 bg-slate-200 rounded-lg">
                <UserIcon className="h-6 w-6 m-3" />
                <input
                    type="text"
                    placeholder="Name"
                    className='h-12 w-full  bg-transparent border-none outline-none text-lg '
                />
            </div>

            {/* Email Input */}
            <div className="flex items-center justify-center m-auto w-full h-20 bg-slate-200 rounded-lg">
                <EnvelopeIcon className="h-6 w-6 m-3" />
                <input
                    type="email"
                    placeholder='Email ID'
                    className='h-12 w-full  bg-transparent border-none outline-none text-lg '
                />
            </div>

            {/* Password Input */}
            <div className="flex items-center justify-center m-auto w-full h-20 bg-slate-200 rounded-lg">
                <LockClosedIcon className="h-6 w-6 m-3" />
                <input
                    type="password"
                    placeholder='Password'
                    className='h-12 w-full  bg-transparent border-none outline-none text-lg '
                />
            </div>

            {/* Lost Password */}
            <div className='gap-1 text-black text-sm flex'>
                <h1>Lost Password?</h1>
                <span className='gap-3 text-blue-700 cursor-pointer'>Click Here!</span>
            </div>

            {/* Buttons */}
            <div className='flex gap-3'>
                <button className='rounded-lg px-4 py-2 bg-black text-white hover:bg-gray-800'>
                    Sign Up
                </button>
                <button className='rounded-lg px-4 py-2 bg-gray-300 text-black hover:bg-gray-400'>
                    Login
                </button>
            </div>
        </div>
    );
}
export default LoginSignup;
