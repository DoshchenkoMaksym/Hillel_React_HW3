import style from './App.module.css';
import React from 'react';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import Header from './components/header/header';

class App extends React.Component {

  render() {
    return (
      <div className={style.wrapper}>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  };

}

export default App;
