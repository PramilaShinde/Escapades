import './App.css';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
// import { useRoutes } from 'hookrouter';
import Form from './Form';
import Login from './Login'
import Home from './components/pages/Home';
import Hcgad from './components/pages/Harishchadragad'
import Rajgad from './components/pages/Rajgad'
import Dudhsagar from './components/pages/Dudhsagar'
import Devkund from './components/pages/Devkund';
import Harihargad from './components/pages/Harihargad';
import Kalsubai from './components/pages/Kalasubaii';
import Panhala from './components/pages/Panhala';
import Sandhanvalley from './components/pages/Sandhanvalley';
import Sudhagad from './components/pages/Sudhagad';
import Visapur from './components/pages/Visapur';
import Gallery from './components/pages/Gallery'
import Event from './components/pages/Events'
import useEvent from './components/useEvent'
import AboutUs from './components/AboutUs'
import Enquiry from './components/Enquiry'
import EventBooking from './components/EventBooking'
import Payment from './components/pages/Payment'
import usePayment from './components/pages/usePayment'
import EventTable from './components/pages/EventTable'
//import Feedback from './components/Feedback'
// import AllReords from './components/useEvent1'
// import useEvent2 from './components/useEvent2'
//import AllRecords from './components/useEvent1';

function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register/:id" component={Form}/>
      <Route exact path="/register" component={Form}/>
      <Route exact path="/hcgad" component={Hcgad}/>
      <Route exact path="/rajgad" component={Rajgad}/>
      <Route exact path="/dudhsagar" component={Dudhsagar}/>
      <Route exact path="/devkund" component={Devkund}/>
      <Route exact path="/harihar" component={Harihargad}/>
      <Route exact path="/kalsubai" component={Kalsubai}/>
      <Route exact path="/panhala" component={Panhala}/>
      <Route exact path="/sandan" component={Sandhanvalley}/>
      <Route exact path="/sudhagad" component={Sudhagad}/>
      <Route exact path="/visapur" component={Visapur}/>
      {/* <Route exact path="/es" component={AllRecords}/> */}
      {/* <Route exact path="/event" component={useEvent2}/>  */}
      {/* <Route exact path="/gallery" component={Gallery}/> */}
      <Route exact path="/evv" component={useEvent}/>
      <Route exact path="/aboutus" component={AboutUs}/>
      <Route exact path="/EvBook" component={EventBooking}/>
      <Route exact path="/pay" component={Payment}/>
      <Route exact path="/evtable" component={EventTable}/>


      </Switch>
    </Router>
  );
}

export default App;
