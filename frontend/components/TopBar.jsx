import React from 'react'
import { Link } from 'react-router-dom'
const TopBar = () => {
  return (
    <div className={'xl:w-full sm:w-full min-[320px]:w-full flex justify-between items-center xl:p-4 xl:px-12 min-[400px]:p-4 min-[400px]:px-12 min-[320px]:p-3 min-[320px]:px-8 min-[260px]:p-3 min-[260px]:px-4 bg-green-50 text-white shadow'}>
        <div className={'lg:text-2xl font-bold text-black'}>Payment App</div>
        <div>
            <ul className={'list-none flex sm:gap-4 xl:gap-8  min-[400px]:gap-4 min-[320px]:gap4-3 min-[260px]:gap-2 lg:text-lg text-black'}>
                <li className={'hover:font-medium'}><Link to={"/"}>Home</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default TopBar
