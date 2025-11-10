import './App.css';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  return (
    // BAR
    <>
      <div className='bar'>
        <img src="/assets/images/logo.svg" />
        <div className='sun'>
          <img src="/assets/images/icon-sun.svg" />
        </div>
      </div>

      {/*TITLE AND FILTERS*/}
      <div className='titleFilterWrapper'>
        <h1>Extensions List</h1>

        <div className='buttonsWrapper'>
          <Button text="All" />
          <Button text="Active" />
          <Button text="Inactive" />
        </div>
      </div>

      {/* GRID */}
      <div className="cardGrid">
        <Card 
        imageUrl='/assets/images/'
        text=''
        paragraph=''
        />
         <Card 
        imageUrl='/assets/images/'
        text=''
        paragraph=''
        /> <Card 
        imageUrl='/assets/images/'
        text=''
        paragraph=''
        /> <Card 
        imageUrl='/assets/images/'
        text='asdsad'
        paragraph='asdasdsad'
        /> <Card 
        imageUrl='/assets/images/'
        text=''
        paragraph=''
        /> <Card 
        imageUrl='/assets/images/'
        text=''
        paragraph=''
        /> <Card 
        imageUrl='/assets/images/'
        text=''
        paragraph=''
        /> <Card 
        imageUrl='/assets/images/'
        text=''
        paragraph=''
        /> <Card 
        imageUrl='/assets/images/'
        text=''
        paragraph=''
        /> <Card 
        imageUrl='/assets/images/'
        text=''
        paragraph=''
        /> <Card 
        imageUrl='/assets/images/'
        text=''
        paragraph=''
        /> <Card 
        imageUrl='/assets/images/'
        text=''
        paragraph=''
        />
      </div>

    </>
  );
}

export default App;
