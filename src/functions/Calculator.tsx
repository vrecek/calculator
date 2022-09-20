export interface IDisplayerObj {
   current: HTMLElement,
   previous: HTMLElement
}

export type IAnimBackground = 'dark' | 'red' | 'blue'

export default class Calculator {
   private currentOperation: string
   private previousResult: string
   private operators: string[]
   private displayerElements: IDisplayerObj

   private determineColor(clr: IAnimBackground, type: 'on' | 'off'): string {
      if(type === 'on') {
         switch(clr) {
            case 'dark': return '#171717'
            case 'blue': return 'cornflowerblue'
            case 'red': return 'red'
            default: return ''
         }
      }

      switch(clr) {
         case 'dark': return '#202020'
         case 'blue': return 'royalblue'
         case 'red': return 'crimson'
         default: return ''
      }
   }

   private isLastOperator(sign?: string): boolean {
      if(sign) return this.operators.includes(sign)

      const co: string = this.currentOperation
      return this.operators.includes(co[co.length - 1])
   }

   private handleDoubleDifferentOperators(sign: string): boolean {
      const co: string = this.currentOperation
      const len: number = co.length - 1
      const isSignOperator: boolean = this.isLastOperator(sign)

      if(isSignOperator && co[len] === '.') return true

      if(this.isLastOperator() && isSignOperator) {
         if(sign !== co[len]) {
            this.currentOperation = co.slice(0, len) + sign
         }

         return true
      }

      return false
   }

   private handleFirstOperator(sign: string): boolean {
      const co: string = this.currentOperation
      const {length} = co

      if(length) return false
      if(this.isLastOperator(sign) && sign !== '-') return true

      return false
   }

   public constructor(displayerCurrent: HTMLElement, displayerPrevious: HTMLElement) {
      this.displayerElements = {
         current: displayerCurrent,
         previous: displayerPrevious
      }
      this.currentOperation = ''
      this.previousResult = ''
      this.operators = ['+', '-', '*', '/']
   }

   public addDot(): boolean {
      const co: string = this.currentOperation
      const {length} = co

      if(this.isLastOperator() || co[length - 1] === '.') return true
      
      // @ts-ignore
      const indexToOperator: number = co.split('').findLastIndex(x => this.operators.includes(x))
      if(co.slice(indexToOperator).includes('.')) return true

      this.currentOperation += '.'

      return false
   }

   public addSign(sign: string): void {
      if(this.currentOperation.length >= 32) return
      if(this.handleFirstOperator(sign)) return
      else if(this.handleDoubleDifferentOperators(sign)) return

      this.currentOperation += sign
   }

   public calculateResult(): void {
      if(this.isLastOperator()) return

      const resultNum: number = +Function(`return (${this.currentOperation})`)().toFixed(2)
      let result: string = resultNum.toString()

      if(result === 'Infinity') result = '0'

      this.previousResult = result
      this.currentOperation = ''
   }

   public deleteSign(): void {
      const co: string = this.currentOperation
      const {length} = co

      if(!length) return

      this.currentOperation = co.slice(0, length - 1)
   }

   public display(): void {
      const {current, previous} = this.displayerElements

      current.textContent = this.currentOperation
      previous.textContent = this.previousResult 
   }

   public animateClick(element: HTMLElement, transitionMs: number, backClr: IAnimBackground): void {
      const label: HTMLElement = element.children[0] as HTMLElement

      label.style.transform = 'scale(.7)'
      element.style.background = this.determineColor(backClr, 'on')

      setTimeout(() => {
         label.style.transform = 'scale(1)'
         element.style.background = this.determineColor(backClr, 'off')
      }, transitionMs)
   }
}
