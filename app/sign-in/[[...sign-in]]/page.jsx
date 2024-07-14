"use client"
import { SignIn } from '@clerk/nextjs'
import Lottie from"lottie-react";
import React from 'react'

import animationData from "@/assets/animation1.json";

const SignInPage = () => {
  return (
    <div className="flex justify-between"> 
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
