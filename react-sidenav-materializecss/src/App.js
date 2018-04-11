import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import Sidebar from './Sidebar'

const Dashboard = () => <h2>Dashboard</h2>
const Survey = () => <h2>Survey</h2>
const Landing = () => <h2>Landing</h2>
const Home = () => <h2>Home</h2>

const App = () => {
    return (
            <div>
                <BrowserRouter>
                    <div>
                        <Sidebar />
                        <Route exact path="/" component={Home} />
                        <Route path="/surveys" component={Dashboard} />
                    </div>
                </BrowserRouter>
                Hi There!
            </div>
        )
}

export default App;