"use client"
import { SignIn } from '@clerk/nextjs'
import Lottie from"lottie-react";
import React from 'react'

import animationData from "@/assets/animation1.json";

const SignInPage = () => {
  return (
    <div className="relative h-screen w-full bg-center" style={{ backgroundImage: 'url(/assets/images/bg2.jpg)' }}>
      <div className="absolute inset-0  opacity-50"></div>
        <div className='flex w-full justify-center'>
          <div className="p-4 text-card-foreground">
            <div className="mt-4 flex justify-between"> 
              <div className="hidden md:block"> 
                <Lottie animationData={animationData} /> 
              </div>
              <div className="mt-10">  
              <SignIn /> 
              </div>             
            </div>            
          </div>
        </div>
      
    </div>
  )
}

export default SignInPage
