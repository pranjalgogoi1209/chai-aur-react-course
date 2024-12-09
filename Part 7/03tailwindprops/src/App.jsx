import './App.css'
import Card from './components/Card'

function App() {
  let myObj1 = {
    userName : 'Pranjal Gogoi',
    age : 24,
    id : 1
  }
  let myObj2 = {
    userName : 'Krishna Yadav',
    age : 27,
    id : 2
  }

  return (
    <>
      <h1 className='bg-blue-700 rounded-xl text-white p-4 mb-4'>Tailwind Css</h1>

      {/* Using props */}
      <Card id = {myObj1.id} channel="Reactive Coder" userName={myObj1.userName} age={myObj1.age}/>
      <Card id = {myObj2.id} channel="Nepali Vloger" userName={myObj2.userName} age={myObj2.age}/>
    </>
  )
}

export default App
