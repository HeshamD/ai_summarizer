/* eslint-disable no-unused-vars */
import './App.css';
import Demo from './components/Demo';
import Hero from './components/Hero';
import { config } from 'dotenv';
const App = () => {
    return (
<main>
    <div className="gradient"></div>
    <div className="app">
        <Hero/>
        <Demo/>
    </div>
</main>    
)
}

export default App