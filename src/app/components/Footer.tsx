import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="bg-red-600 text-white py-6 text-center">
            <p>© 2025 CloudPracts. All Rights Reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Contact</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            </div>
        </footer>
    </div>
  )
}

export default Footer