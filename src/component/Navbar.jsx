import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-200 text-white '>
        <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

    <div className="logo font-bold text-white text-2xl">
        <span className="text-green-700">&lt;</span>
        <span>Pass</span>
        <span className="text-green-700">OP/&gt;</span>
      


    </div>
    <ul className='flex gap-4'>
        <li className=''>
            <a className='hover:font-bold' href="#">Home</a>
        </li>
        <li className=''>
            <a className='hover:font-bold' href="#">About</a>
        </li>
        <li className=''>
            <a className='hover:font-bold' href="#">Contact</a>
        </li>
    </ul>
     <button className='flex justify-center item-center bg-indigo-500 p-2 rounded-full'>
        <img className='w-5' src="github.svg" alt="github-log " />
        GitHub
        </button>

        </div>
</nav>
 
  )
}

export default Navbar
