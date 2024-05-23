import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import {charmander} from './bases/05-decorators'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <img src="${typescriptLogo}" alt="TypeScript logo" width="200" />
    <img src="${viteLogo}" alt="Vite logo" width="200" />
    <h1>Hello Vite!</h1>
    <p>My name is ${charmander.talk()}</p>
    <button id="counter">Increment</button>
    
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
