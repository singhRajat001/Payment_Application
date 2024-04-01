import React from 'react'
import { useState } from "react"
import { BottoWarning } from "/components/BottoWarning"
import { Button } from "/components/Button"
import { Heading } from "/components/Heading"
import { InputBox } from "/components/InputBox"
import { SubHeading } from "/components/Subheading"
import {Link} from 'react-router-dom'
import TopBar from '../components/TopBar'
const Portfolio = () => {
    
  return (
    <div className={''}>
        <div><Front/></div>
    </div>
  )
}
function Front(){
    return <div className={'w-full h-screen bg-green-50 overflow-x-hidden'}> 
        <TopBar />
        <div className={' relative top-28 xl:h-3/6 sm:h-3/6 min-[400px]:h-2/4 min-[320px]:h-2/4  min-[260px]:h-2/4 grid  justify-center'}>
            <div className={'shadow-lg border bg-white/5 rounded-xl xl:w-96 sm:w-80 min-[400px]:w-60  min-[320px]:p-5 min-[300px]:p-5 min-[260px]:p-5 text-center  relative top-10 h-5/6'}>
                <div className={'xl:text-xl sm:text-base min-[400px]:text-xs min-[320px]:text-xs  relative min-[400px]:top-6 min-[260px]:top-4 font-bold'}>Dummy Payment Section</div>
                <div className={'xl:text-xl sm:text-base min-[400px]:text-xs min-[320px]:text-xs relative min-[400px]:top-10  min-[260px]:top-6'}>
                    If you are new to here...Login first
                </div>
                <div className={'flex justify-evenly relative min-[400px]:top-20 min-[320px]:top-20'}>
                    <div className={'xl:text-lg sm:text-base min-[400px]:text-xs min-[320px]:text-xs relative min-[400px]:top-16 min-[320px]:top-16 min-[260px]:top-16 bg-green-500 text-white xl:w-24  min-[400px]:w-16 min-[320px]:w-16 p-2 rounded-lg hover:bg-gray-900'}><Link to={'/signup'}>SignUp</Link></div>
                    <div className={'xl:text-lg sm:text-base min-[400px]:text-xs min-[320px]:text-xs relative min-[400px]:top-16 min-[320px]:top-16 min-[260px]:top-16  bg-green-500  text-white xl:w-24 min-[400px]:w-16 min-[320px]:w-16  p-2 rounded-lg hover:bg-gray-900'}><Link to={'/signin'}>SignIn</Link></div>
                </div>
            </div>
           
        </div>
    </div>
}
function Body(){
    
}

export default Portfolio
