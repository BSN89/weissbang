import React from 'react';
import './App.css';
import Footer from "./Footer";


function App() {
    const handleNavigationClick = (section: string) => {
        alert(`Clicked on ${section}`);
        // здесь вы можете добавить логику для открытия новых разделов
    };

    return (

        <div className="App">
            <a href="" className='btn'>
                <span className='button__line button__line--top'></span>
                <span className='button__line button__line--right'></span>
                <span className='button__line button__line--bottom'></span>
                <span className='button__line button__line--left'></span>
                WEISS BANG
            </a>
            <img src="https://bipbap.ru/wp-content/uploads/2017/08/1375998858_1953444020.jpg" alt="My img"/>
            <div className="navigation">
                <div
                    className="navigation__section"
                    onClick={() => handleNavigationClick("Gallery")}
                >
                    Gallery
                </div>
                <div
                    className="navigation__section"
                    onClick={() => handleNavigationClick("Sounds")}
                >
                    Sounds
                </div>
                <div
                    className="navigation__section"
                    onClick={() => handleNavigationClick("Education")}
                >
                    Education
                </div>
                <div
                    className="navigation__section"
                    onClick={() => handleNavigationClick("Basket")}
                >
                    Basket
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default App;
