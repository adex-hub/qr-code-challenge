import './App.css'
import Qrcode from './components/qrcode';
function App() {
  return (
    <div className="App">
      <Qrcode src='/images/image-qr-code.png' alt="qr"/>
      <h3>Improve your front-end skills by building projects</h3>
      <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  );
}

export default App;