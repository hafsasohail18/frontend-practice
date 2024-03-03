import React from 'react'
import logo from "../assets/ableton-logo.png";

const Navbar = () => {
  const links = ["Live", "Push", "Note", "Shop", "Help"];
  const subLinks = ["About", "Jobs", "Apprenticeships"];
  return (
    <>
    <div className="flex align-middle justify-between px-10 py-5 border-b-2">
    <div className="flex row gap-12 align-middle">
      <div className="w-16">
        <img src={logo} alt="" className="object-contain" />
      </div>

      {links.map((title, index) => (
        <span className="text-lg font-medium" key={index}>
          {title}
        </span>
      ))}
      <span className="text-lg font-medium text-brand">More +</span>
    </div>
    <div className="flex gap-9">
        <span className="text-lg font-medium text-blue">Try live for free</span>
        <span className="text-base font-medium">Log in or register</span>
    </div>
    </div>
    {/* <hr className='font-bold' /> */}
    <div className='flex row gap-10 px-10 py-6'>
      {subLinks.map((title, index) => (
        <span key={index} className="text-sm font-medium">{title}</span>
      ))}
      

    </div>
    </>
  )
}

export default Navbar
