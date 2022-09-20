import React from 'react';
import Button from './components/Button';
import Displayer from './components/Displayer';
import FifthRow from './components/FifthRow';
import FirstRow from './components/FirstRow';
import FourthRow from './components/FourthRow';
import SecondRow from './components/SecondRow';
import ThirdRow from './components/ThirdRow';
import './css//index.css';

function App() {
   const s = [1,2,3,4,5,6,7,8,9]

   return (
      <div className="App">

         <main className="calculator">

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
   );
}

export default App;
