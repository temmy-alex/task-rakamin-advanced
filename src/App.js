import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import List from './components/List';
import Navigation from './components/Navigation';
import './Style.css';

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(function () {
    (async function () {
      const response = await fetch('https://prod-qore-app.qorebase.io/8ySrll0jkMkSJVk/allItems/rows?limit=7&offset=0&$order=asc', {
        headers: {
          "Content-Type": "application/json",
          "accept": "application/json",
          "x-api-key": process.env.REACT_APP_APIKEY
        }
      });
      const { nodes } = await response.json();
      setItems(nodes);
      console.log(nodes)
    })();
  }, []);

  return (
    <>
      <Navigation />
      <Header />
      <List items={items} />
      <Footer />
    </>
  );
}

export default App;
