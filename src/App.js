import React from 'react';
import categories from './api/api';
import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';

function App() {
    return (
        <div className="App" >
            { /*navbar*/}
            <Banner />
            {categories.map((categories) => {
                return <Row
                    key={categories.name}
                    title={categories.title}
                    path={categories.path}
                    isLarge={categories.isLarge}
                />
            })}
        </div>
    )
}

export default App;