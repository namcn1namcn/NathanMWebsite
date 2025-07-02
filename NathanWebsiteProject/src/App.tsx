import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/textstyles.css'
import './styles/pagestyles.css'
import ObjectPreviewBook from './components/object-preview-book'
import { Button } from 'react-bootstrap'

var useEffectLock: boolean

function App() {
    const [count, setCount] = useState(0)

    useEffect(() => {

        if (!useEffectLock) {
            console.log("YAHOO");
            useEffectLock = true;
        }

    }, [])


  return (
    <div className="page-parent" >
        <div className="custom-text-title" >
              List View
              {count}
          </div>

          <Button onClick={() => { setCount(count + 1) } }>
                Increase count
          </Button>


        <ObjectPreviewBook given_bookFileName={'crimepunish.jpg'} given_bookTitle={'Crime and Punishment'} given_bookDesc={'Book written by Dostoevsky'}  />
    </div>
  )
}

export default App
