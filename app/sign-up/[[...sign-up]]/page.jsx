
"use client"
import { SignUp } from '@clerk/nextjs'
import Lottie from"lottie-react";
import React from 'react'

import animationData from "@/assets/animation1.json";

const SignUpPage = () => {
  return (
    <div className="flex justify-between"> 
        <div className='flex w-full justify-center'>
          <div className="p-4 text-card-foreground">
            <div className="mt-4 flex justify-between"> 
              <div className="hidden md:block"> 
                <Lottie animationData={animationData} /> 
              </div>
              <div className="mt-10">  
                <SignUp /> 
              </div>             
            </div>            
          </div>
        </div>
      
    </div>
  )
}

export default SignUpPage

