import React from 'react';
import Button from './components/Button';
import Displayer from './components/Displayer';
import FifthRow from './components/FifthRow';
import FirstRow from './components/FirstRow';
import FourthRow from './components/FourthRow';
import SecondRow from './components/SecondRow';
import ThirdRow from './components/ThirdRow';
import './css//index.css';
import Calculator from './functions/Calculator';
import { HE, Ref } from './interfaces/CalculatorInterface';

function App() {
   const mainRef: Ref = React.useRef<HTMLDivElement>(null)
   const [calculator, setCalculator] = React.useState<Calculator | null>(null)

   React.useEffect(() => {
      const main: HTMLElement = mainRef.current!
      const [prev, curr] = Array.from(main.children[0].children as HE)

      const calc: Calculator = new Calculator(curr, prev)
      const allBtns = Array.from(document.getElementsByClassName('button') as HE)

      for(let x of allBtns) {
         x.addEventListener('click', () => {
            if(x.classList.contains('equals')) {
               calc.animateClick(x, 200, 'blue')
               calc.calculateResult()
            }

            else if(x.classList.contains('dot')) {
               calc.animateClick(x, 200, 'dark')
               calc.addDot()
            }

            else if(x.classList.contains('delete')) {
               calc.animateClick(x, 200, 'red')
               calc.deleteSign()
            }

            else {
               calc.animateClick(x, 200, 'dark')
               calc.addSign(x.textContent!)
            }

            calc.display()
         })
      }

      setCalculator(calc)
   }, [])

   return (
      <div className="App">

         <main ref={mainRef} className="calculator">

            <Displayer />
            
            <section className="button-container">

               <section className="left">

                  <FirstRow />
                  <SecondRow />
                  <ThirdRow />
                  <FourthRow />
                  <FifthRow />

               </section>

               <section className="right">

                  <Button type='big_height' sign='+' />
                  <Button type='big_height' sign='-' />
                  <Button type='small' sign='*' />

               </section>

            </section>

         </main>

      </div>
   )
}

export default App;
