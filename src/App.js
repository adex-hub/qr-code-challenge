import './App.css'
import Qrcode from './components/qrcode';
function App() {
  return (
    <section className="App">
      <Qrcode src='/images/image-qr-code.png' alt="qr"/>
      <header>Improve your front-end skills by building projects</header>
      <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </section>
  );
}

export default App;