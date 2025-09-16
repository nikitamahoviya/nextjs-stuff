// import Image from 'next/image'
// import Link from 'next/link'
// import ProductCard from './components/ProductCard'

// export default function Home() {
//   return (
//     <main>
//       <h1> This is the default page</h1>
//       {/* <a href='/users'>Users</a>  => this way no of requests send to the server is way too much, as many css and JS files are getting downloaded on every render , so we will use Link */}
//       <Link href='/users'>Users</Link>
//       <ProductCard/>
//     </main>
//   )
// }

'use client'
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const [inputVal, setInputVal] = useState("");
  const {push} = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${inputVal}`)
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-4 shadow-md bg-white rounded-md">
        <h1 className="text-2xl font-semibold mb-4 text-black">
          Enter Your Name
        </h1>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Enter Your Name"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded text-black"
           />
        <button 
        type="submit"
                    className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"

        >
          Predict Data</button>
      </form>
    </div>
    </div>
  );
}