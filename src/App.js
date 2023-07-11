// import logo from "./logo.svg";
// import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="row">
      <div className="col-lg-4 col-sm-6 main-header">
        <img src="images/logo.png" alt="logo" className="logo" />
        <div className="customer">
          <p className="title">Customer Name</p>
          <p className="name">Ashish Solanki</p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <img
          className="car"
          src="https://imgd.aeplcdn.com/664x374/n/cw/ec/145021/kushaq-exterior-right-front-three-quarter.jpeg"
          alt="Skoda Kushaq Right Front Three Quarter"
          title="Skoda Kushaq Right Front Three Quarter"
          style={{ width: "300px" }}
        />
      </div>
      <div className="col-lg-4 col-sm-6 modelNo">
        <p className="receipt">Terms due on receipt</p>
        <p className="date">Date: .....................................</p>
        <p className="car-details">Car Model</p>
        <h2>Skoda Kushaq</h2>
        <h2>MONTE CARLO 1.0</h2>
      </div>
    </header>
  );
}

function Main() {
  return (
    <main>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr className="table-info">
              <th scope="col">Item & Description</th>
              <th scope="col">Amount</th>
            </tr>
            <tr className="table-info">
              <th>Ex-Showroom</th>
              <th>10,28,249</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>TCS</td>
              <td>56,952</td>
            </tr>
            <tr className="table-info">
              <td>RTO</td>
              <td>45,000</td>
            </tr>
            <tr>
              <td>Warranty</td>
              <td>25,000</td>
            </tr>
            <tr className="table-info">
              <td>Accessories</td>
              <td>14,000</td>
            </tr>
            <tr>
              <td>Fastag</td>
              <td>600</td>
            </tr>
            <tr className="table-info">
              <td>Temporary Number</td>
              <td>200</td>
            </tr>
            <tr>
              <th>Total</th>
              <th>12,45,290</th>
            </tr>
            <tr>
              <td>Carlelo Discount</td>
              <td>26,452</td>
            </tr>
            <tr className="table-danger">
              <td>On-Road Price</td>
              <td>12,13,475</td>
            </tr>
          </tbody>
        </table>
        <p className="terms">*T&C Applicable</p>
      </div>
      <h5>Note:</h5>
      <ol>
        <li>Price showcased may vary at the time of delivery</li>
        <li>Final On-road price applicable at the time of invocing</li>
        <li>
          Additional handling and service charge may be applicable at the time
          of delivery
        </li>
        <li>Insurance included zero debt as standard</li>
      </ol>
      <div className="card-group">
        <Card src="images/fuel.svg" alt="fuel" title="Fuel:" text="Petrol" />

        <Card
          src="images/bhp.svg"
          alt="bhp"
          title="BHP"
          text="114 bhp @ 5000 rpm"
        />
        <Card
          src="images/transmission.svg"
          alt="transmission"
          title="Transmission:"
          text="Manual"
        />
        <Card
          src="images/engine.svg"
          alt="engine"
          title="Engine:"
          text="1.0L TSI"
        />
      </div>
      <h5 className="why">
        Why Choose <span>CarLelo</span>?
      </h5>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <Card2
          src="images/wallet.png"
          alt=""
          title="Save Money"
          text="Maximize discounts and deals Buy and save with ease"
        />
        <Card2
          src="images/person.png"
          alt="person"
          title="No Pushy Salespeople"
          text="Buy what you want, not wll the salesperson wats to tell you."
        />
        <Card2
          src="images/assistance.png"
          alt="assitance"
          title="Assistance Along The Way"
          text="Use Our Live Chat and get answers to all of your questions"
        />

        <Card2
          src="images/new-car.png"
          alt="new-car"
          title="New Car Buying in a few easy clicks"
          text="
          Complete services in one place and everything is done from the comfort of your home"
        />
      </div>
      <p className="para">
        More Than <span>1000+</span> Happy Customer
      </p>
      <p className="para">
        Best Place To <span>Buy New Car</span>
      </p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <h4>CarLelo Pvt. Ltd.</h4>
      <div className="contact">
        <div>
          <img className="mail" src="images/mail.png" alt="email" />
          <a href="mailto:contact@carlelo.com">contact@carlelo.com</a>
        </div>
        <div>
          <img className="phone" src="images/call.png" alt="tel" />
          <a href="tel:+917947722777">7947722777</a>
        </div>
        <div className="socialLinks">
          <a href="fb.com">
            <img src="images/fb.png" alt="fb" />
          </a>
          <a href="instagram.com">
            <img src="images/insta.png" alt="insta" />
          </a>
          <a href="linkedin.com">
            <img src="images/linkedin.png" alt="linkedin" />
          </a>
          <a href="twitter.com">
            <img src="images/tweet.png" alt="twitter" />
          </a>
          <a href="youtube.com">
            <img src="images/ytb.png" alt="youtube" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default App;

function Card({ src, alt, title, text }) {
  return (
    <>
      <div className="card">
        <img src={src} className="card-img-top svg-images" alt={alt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </>
  );
}

function Card2({ src, alt, title, text }) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={src} className="card-img-top svg-images" alt={alt} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}
