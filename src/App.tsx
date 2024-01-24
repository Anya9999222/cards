import  Card  from './Components/Card'
import './App.css'


function App() {

  return (
    <>
      <Card img={'https://dummyimage.com/300x150/9c979c/b8b8bf.png&text=image+cap'}>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </Card>
      <Card>  
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      </Card>
    </>
  )
}

export default App
