import React from 'react'
import Button from './Button'

const FourthRow = () => {
   return (
      <section className="row fourth">

         <Button cname='delete' type='small' sign='C' />
         <Button cname='dot' type='small' sign='.' />
         <Button type='small' sign={0} />

      </section>
   )
}

export default FourthRow