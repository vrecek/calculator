import React from 'react'
import Button from './Button'

const FirstRow = () => {
   return (
      <section className="row first">

         <Button type='small' sign={1} />          
         <Button type='small' sign={2} />          
         <Button type='small' sign={3} />          

      </section>
   )
}

export default FirstRow