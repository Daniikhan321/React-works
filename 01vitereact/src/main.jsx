import React from 'react'
import ReactDOM  from 'react-dom/client'
import App from './App.jsx'
import Danii from './danii.jsx'

function Myapp(){
  return(
    <div>
      <h1>this is custom app</h1>
    </div>
  )
}
// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children:'click me to visit  google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>
    go to google</a>
)

const anotheruser = "hyeeeeeeeeeeeeee"

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com',target: '_blank',
    
  },
  'click me and  go to google',
  anotheruser
)

ReactDOM.createRoot(document.getElementById('root'))
.render(
         // direct element inject in render 

         reactElement
        

    
  
  
   
)
