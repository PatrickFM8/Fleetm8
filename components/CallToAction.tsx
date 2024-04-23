import React from 'react'
import { Button } from './ui/button'

const CallToAction = () => {
  return (
    <div className="mt-4 py-4  w-full flex flex-col justify-center items-center bg-black text-white">
      <h2 className="text-2xl font-medium mb-4 mt-4">CALL TO ACTION</h2>
      <p className=" mb-4 justify-center items-center pl-20 pr-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quod,
        facilis voluptatem hic impedit asperiores soluta non quia eveniet nulla,
        ipsum ea. Quo dolorum placeat repudiandae deleniti! Quidem, numquam
        autem.
      </p>
      <Button variant="secondary" className="mb-4">
        CALL TO ACTION
      </Button>
    </div>
  )
}

export default CallToAction
