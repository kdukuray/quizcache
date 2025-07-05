"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar(){

    return (
    <nav className="w-full h-24 px-8 flex flex-row justify-between border-b-2 border-b-gray-200">
        <div className=" h-full">
            <Link href="/">
            <Image src="/quizcache-logo.png" height={90} width={90} alt="quizcahce-logo"></Image>
            </Link>
        </div>
        <div className="flex flex-row justify-between items-center text-md w-3/5">
            <Link href="/search" className="text-md">Search</Link>
            <Link href="/upload-paper">Upload</Link>
            <Link href="/requests">Requests</Link>
            <Link href="/trending">Trending</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
        </div>
        
        <div className="flex items-center">
            <Button className="w-32 text-md bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg transition-all mx-2">Login</Button>
            <Button className="w-32 text-md bg-white text-black border-2 border-blue-600  hover:border-blue-700 hover:shadow-lg transition-all mx-2">Sign Up</Button>

        </div>

    </nav>
    )
}
// import { useState } from 'react';
// import Link from 'next/link';
// import { Menu } from 'lucide-react'; // for hamburger icon

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-nav shadow-md fixed top-0 w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <Link href="/">
//             className="flex items-center"
//               <img src="/logo.png" alt="Quiz Cache" className="h-8 w-auto" />
//               <span className="ml-2 font-semibold text-xl text-link">Quiz Cache</span>
            
//           </Link>

//           {/* Desktop Links */}
//           <div className="hidden md:flex space-x-8">
//             <Link href="/"
//                className="text-link hover:text-link-hover px-1 border-b-2 border-transparent hover:border-active transition">
//                 Home
            
//             </Link>
//             <Link href="/browse"
//                className="text-link hover:text-link-hover px-1 border-b-2 border-transparent hover:border-active transition">
//                 Browse All
              
//             </Link>
//             <div className="relative group">
//               <button className="text-link hover:text-link-hover px-1 flex items-center">
//                 By Subject
//                 <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                   <path d="M5 8l5 5 5-5H5z" />
//                 </svg>
//               </button>
//               <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded hidden group-hover:block">
//                 {/* Replace with dynamic subjects */}
//                 <Link href="/subject/math"className="block px-4 py-2 text-sm text-link hover:bg-blue-50">Math </Link>
//                 <Link href="/subject/physics" className="block px-4 py-2 text-sm text-link hover:bg-blue-50">Physics </Link>
//                 <Link href="/subject/chemistry" className="block px-4 py-2 text-sm text-link hover:bg-blue-50">Chemistry </Link>
//               </div>
//             </div>
//             <Link href="/upload"
//                 className="text-link hover:text-link-hover px-1 border-b-2 border-transparent hover:border-active transition">
//                 Upload Paper
              
//             </Link>
//           </div>

//           {/* Right side */}
//           <div className="flex items-center space-x-4">
//             {/* Search */}
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search exams..."
//                 className="hidden sm:block bg-gray-100 text-sm rounded-full pl-8 pr-4 py-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
//               />
//               <svg className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M8 4a4 4 0 104 4 4 4 0 00-4-4zM2 8a6 6 0 1110.293 4.707l4.147 4.147-1.414 1.414-4.147-4.147A6 6 0 012 8z" clipRule="evenodd"/>
//               </svg>
//             </div>

//             {/* Profile / Login */}
//             <Link href="/login">
//               className="text-sm font-medium text-link hover:text-link-hover">
//                 Login
              
//             </Link>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2 rounded hover:bg-gray-100"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               <Menu className="h-6 w-6 text-link" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-white border-t border-gray-200">
//           <Link href="/" className="block px-4 py-2 text-link hover:bg-blue-50">Home</Link>
//           <Link href="/browse" className="block px-4 py-2 text-link hover:bg-blue-50">Browse All</Link>
//           <Link href="/upload" className="block px-4 py-2 text-link hover:bg-blue-50">Upload Paper</Link>
//           <Link href="/login" className="block px-4 py-2 text-link hover:bg-blue-50">Login</Link>
//         </div>
//       )}
//     </nav>
//   );
// }
