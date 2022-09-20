import React from 'react'
import Button from './Button'

const SecondRow = () => {
   return (
      <section className="row second">

         <Button type='small' sign={4} />          
         <Button type='small' sign={5} />          
         <Button type='small' sign={6} />          

      </section>
   )
}

export default SecondRow