import React, { Component } from 'react';
import MenuUtama from './Page/MenuUtama';
import MenuProduct from './Page/MenuProduct';
import MenuKontak from './Page/MenuKontak';
import MenuTentangKami from './Page/MenuTentangKami';

class App extends Component {
  render(){
    return(
      <div>
        <Header />
        <MenuUtama />
        <MenuProduct />
        <MenuKontak />
        <MenuTentangKami />
        <Footer />
      </div>
    );
  }
}

const Header = (props) => {
  return(
    <h1>Ini Halaman Untuk Header</h1>
  );
}

const Footer = (props) => {
  return(
    <h1>Ini Halaman Untuk Footer</h1>
  );
}

export default App;
