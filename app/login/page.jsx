// import LoginForm from "../ui/login/loginForm/loginForm";

// const LoginPage = () => {
//   return (
//     <div >
//       <LoginForm/>
//     </div>
//   );
// };

// export default LoginPage;

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page

// 'use client'
// import React from 'react'
// import { signIn, useSession } from 'next-auth/react'

// const LoginPage = () => {

//   const {data: session} = useSession()
//   console.log(session)


//   return (

//     <main className='bg-purple h-screen flex flex-col items-center align-middle justify-center'>
//       <section className='w-80 bg-white text-black p-4 gap-y-10 h-4/5 flex flex-col items-center align-middle justify-center'>
//         <h1>Login</h1>
//         <section className='flex flex-col gap-y-4'>
//           <div className="mb-4 border-gray-500 border   p-2 w-full">
//             <label htmlFor="username" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Username (required): </label>
//             <input type="text" id="username" name='username' onChange={handleChange} className="border-neutral-500 border   p-2 w-full " />
//           </div>
//           <div className="mb-4 border-gray-500 border   p-2 w-full">
//             <label htmlFor="password" className="text-small-semibold block text-gray-400 font-bold mb-2 ">Password (required): </label>
//             <input type="password" id="password" name='password' onChange={handleChange} className="border-neutral-500 border   p-2 w-full " />
//           </div>
//           <p className='w-full text-end'>forgot password?</p>
//           <button
//             className="bg-blue-1 w-full hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
//             onClick={handleUpload}
//           >
//             Submit
//           </button>
//         </section>
//         <section className='flex flex-col gap-y-4 justify-center align-middle items-center'>
//           <p>Or Sign up using Google</p>
//           <button
//             className="bg-blue-1 w-full hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
//             onClick={()=>signIn({
//               callbackUrl: '/'
//             })}
//           >
//             Google
//           </button>
//         </section>

//       </section>
//     </main>
//   )
// }

// export default LoginPage