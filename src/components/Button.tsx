import React from 'react'
import { IButton } from '../interfaces/CalculatorInterface'

const Button = ({sign, type, cname}: IButton) => {
   return (
      <div className={`button ${cname ?? ''} ${type}`}>

         <label>{sign}</label>

      </div>
   )
}

export default Button