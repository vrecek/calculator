import React from 'react'
import { IButton } from '../interfaces/CalculatorInterface'

const Button = ({sign, type}: IButton) => {
   return (
      <div className={`button ${type}`}>

         {sign}

      </div>
   )
}

export default Button