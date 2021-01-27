import React from 'react';

import {Cards, Chart, Picker} from './components';
import styles from './app.module.css';

class App extends React.Component {
    render() {
        return (
        <div className = {styles.container}>
            <Cards />
            <Picker />
            <Chart />
        </div>
        )
    }
}


export default App;