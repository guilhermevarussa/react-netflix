import React from 'react';
import categories from './api/api';
import './App.css';
import Row from './components/Row';

function App() {
    return (
        <div className="App" >
            { /*navbar*/}
            { /*destaque*/}
            { /*em alta*/}
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