
import { useCallback, useMemo, useState } from 'react';
import './App.css';
import Button from './components/UI/Button/Button';
import DemoList from './components/UI/Button/DemoList';
import DemoOutput from './components/UI/Button/DemoOutput';

function App() {
  const [isShowText, setIsShowText] = useState(false)
  const [show, setShow] = useState(false)
  const showText = useCallback(()=>{
    if(show){
      setIsShowText(prevState=>!prevState)
    }
    
  }, [show])
  function letText(){
    setShow(prevState=>!prevState)
  }

  const arr = useMemo(() => {
    return [5,2,1,6,4,7]
  }, []);

  return (
    <div className="App">
      <Button onClick={showText}>{show ? "rabotaet" : "ne rabotaet"}</Button>
      {isShowText && <p>Hidden text</p>}
      <h1>Hi there</h1>
      <DemoOutput show={isShowText}/>
      <Button onClick={letText}>{show ? "Open" : "Close"}</Button>
      <DemoList items={arr}/>
    </div>
  );
}

export default App;
