import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import AuthProvider from './Contexts/AuthProvider';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Header from './Components/Header/Header'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'
import AddServices from './Components/AddServices/AddServices';
import Booking from './Components/Booking/Booking';
import ManageOrders from './Components/ManageOrders/ManageOrders';
import MyOrder from './Components/MyOrder/MyOrder';
import Review from './Components/Review/Review';
import MakeAdmin from './Components/MakeAdmin/MakeAdmin';
import Dashboard from './Components/Dashboard/Dashboard';
import Payment from './Components/Payment/Payment';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Header></Header>

          <Switch>

            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/addService">
              <AddServices></AddServices>
            </PrivateRoute>
            <Route path="/payment">
              <Payment></Payment>
            </Route>
            <Route path="/myOrders">
              <MyOrder></MyOrder>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <PrivateRoute path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/service/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
