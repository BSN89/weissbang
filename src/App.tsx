import React from 'react';
import './App.css';
import Footer from "./Footer";
import {NeonButton} from "./NeonButton";


function App() {
    const handleNavigationClick = (section: string) => {
        alert(`Clicked on ${section}`);
        // здесь вы можете добавить логику для открытия новых разделов
    };

    return (

        <div className="App">
            <NeonButton/>
            <img src="https://i.pinimg.com/750x/d2/fe/de/d2fede981cb7271a4e985e9e671ef3da.jpg" alt="My img"/>
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
