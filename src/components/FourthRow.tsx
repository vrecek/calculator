import React from 'react'
import Button from './Button'

const FourthRow = () => {
   return (
      <section className="row fourth">

         <Button type='small' sign='C' />
         <Button type='small' sign={0} />

      </section>
   )
}

export default FourthRow