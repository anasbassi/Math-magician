import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <div>
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="quote" element={<Quote />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
