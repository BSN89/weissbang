import React from 'react';
import './App.css';
import Footer from "./Footer";
import {NeonButton} from "./NeonButton";
import Header from "./Components/Header";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
    return (

        <div className="App">
            <Header/>
            <img className='imgtitle' src="https://kartinkin.net/uploads/posts/2021-04/1617282533_57-p-fon-dlya-prezentatsii-muzika-58.jpg"
                 width={700}
                 height={500}
                 alt="My img"/>
            <Footer/>
        </div>
    );
}

export default App;
