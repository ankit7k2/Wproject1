import React from 'react'

const Footer = () => {
  return (
    <div className="bg-slate-300 rounded container mx-auto border border-black-110 my-20"> <p className="mb-2">&copy; 2024 PassOP. All rights reserved.</p> <p className="mb-2">Your privacy is our top priority. <a href="/privacy-policy" className="text-green-400 underline">Privacy Policy</a></p> <p className="mb-2"> Follow us on <a href="https://twitter.com/PassOP" target="_blank" rel="noopener noreferrer" className="text-green-400 underline ml-1">Twitter</a>, <a href="https://facebook.com/PassOP" target="_blank" rel="noopener noreferrer" className="text-green-400 underline ml-1">Facebook</a>, and <a href="https://instagram.com/PassOP" target="_blank" rel="noopener noreferrer" className="text-green-400 underline ml-1">Instagram</a> </p> <p> Have questions? <a href="/contact" className="text-green-400 underline">Contact Us</a> </p></div>
  )
}

export default Footer
