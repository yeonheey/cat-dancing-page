import DancingCat from './components/DancingCat'
import './styles/global.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>춤추는 고양이</h1>
        <p>고양이가 춤을 춰요! 🐱</p>
      </header>
      <main className="app-main">
        <DancingCat />
      </main>
    </div>
  )
}

export default App
