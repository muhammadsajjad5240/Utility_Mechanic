import React, { Component } from 'react';
// Start of import of common components
import Home from './components/home/home';
import SignUp from './components/signup/signUp';
import SignIn from './components/signin/signIn';
import Services from './components/services/services';
import Contact from './components/contactus/contact';
import FAQs from './components/FAQ/FAQ';
import TermCondition from './components/termsCondition/termsAndCondition';
import AddNews from './components/addNews/addNews';
import ForgetPassword from './components/forgetPassword/forgetPassword';
// End of import of common components
// start of import of services component
import Construction from './components/services/construction/construction';
import Electrician from './components/services/electrician/electrician';
import CarPainter from './components/services/carpainter/carpainter';
import HomeCleaning from './components/services/homecleaning/homecleaning';
import Painter from './components/services/painter/painter';
import Plumber from './components/services/plumber/plumber';
import HVacTechnician from './components/services/HVacTechnician/Hvtechnician';
// End of import of Services component
// start of import of Admin Components
import MechanicInfo from './components/admin_dashboard/mechanicsInfo/mechanicinfoSidebar'
import OurServices from './components/admin_dashboard/ourServices/ourServicesSideBar';
import DashboardHome from './components/admin_dashboard/dashboardHome/homeSidebar';
import MechanicReport from './components/admin_dashboard/Reports/MechanicsReport/mechanicSidebar';
import ServiceReport from './components/admin_dashboard/Reports/ServiceReport/serviceSidebar';
import CustomerReport from './components/admin_dashboard/Reports/CustomerReport/customerSidebar';
import OrderReport from './components/admin_dashboard/Reports/orderReport/orderSideBar';
import UpdateMechanicRecord from './components/admin_dashboard/mechanicsInfo/MachanicUpdate/MachanicUpdate';
import Orders from './components/admin_dashboard/orders/oderSidebar';
import customerDetail from './components/admin_dashboard/customerInfo/customerinfoSidebar';
import adminProfile from './components/admin_dashboard/adminProfile/adminProfileSidebar';
import UpdateAdminRecord from './components/admin_dashboard/adminupdate/adminUpdate';
import AssignMechanic from './components/admin_dashboard/assignedMechanics/assignMechanics';
// End of import of Admin Components
// Start of import of Mechanic Dashbard Components
import UserHome from './components/mechanic_dashboard/Dashboard-Home/mechanicHomesidebar';
// import UserService from './components/mechanic_dashboard/MechanicService/MechanicService';
import UserTasks from './components/mechanic_dashboard/MechanicTasks/MTaskSideBar';
// End of import of Mechanic Dashboard Components
// Start of import of Customer Dashboard Components
import CustomerHome from './components/customer_dashboard/customer-home/CoustomerSidebar';
import CustomerOrder from './components/customer_dashboard/customer-order/CustomerorderSidebar';
import UpdateCustomerRecord from './components/customer_dashboard/customerupdate/customerUpdate';
// End of import of Customer Dashboard Components
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import orderreport from './components/admin_dashboard/SideTopBar/mysidebar';
import ChatBoot from "./components/chatBoat/chatBoat";

class App extends Component {
  render() {
    return (
      <div>
      
      <BrowserRouter>
         {/* <TopBar /> */}
          {/* <MyNav /> */}
          <Switch>
            {/* Start of Routes common */}
            <Route exact path="/home" component={Home} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/term-condition" component={TermCondition} />
            <Route exact path="/FAQs" component={FAQs} />
            <Route exact path="/add-news" component={AddNews} />
            <Route exact path="/reset-password" component={ForgetPassword} />
            {/* End of Routes common */}
            {/* Start of services Routes */}
            <Route exact path="/constructiofan-service" component={Construction} />
            <Route exact path="/carpainter-service" component={CarPainter} />
            <Route exact path="/electrician-service" component={Electrician} />
            <Route exact path="/homecleaning-service" component={HomeCleaning} />
            <Route exact path="/painter-service" component={Painter} />
            <Route exact path="/plumber-service" component={Plumber} />
            <Route exact path="/hvac-Ac" component={HVacTechnician} />
            {/* End of services Routes */}
            {/* Start of Admin Dashboard Routes */}
            <Route exact path="/our-service" component={OurServices} />
            <Route exact path="/mechanic-info" component={MechanicInfo} />
            <Route exact path="/dashboard-home" component={DashboardHome} />
            <Route exact path="/mechanic-report" component={MechanicReport} />
            <Route exact path="/service-report" component={ServiceReport} />
            <Route exact path="/order-report" component={OrderReport} />
            <Route exact path="/customer-report" component={CustomerReport} />
            <Route exact path="/update-Admin-record" component={UpdateAdminRecord} />
            <Route exact path="/mechanic-update" component={UpdateMechanicRecord} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/customer-detail" component={customerDetail} />
            <Route exact path="/admin-profile" component={adminProfile} />
            <Route exact path="/assigned-mechanics" component={AssignMechanic} />
            {/* End of Admin Dashboard Routes */}
            {/* Start of Routes of User  */}
            <Route exact path="/customer-home" component={CustomerHome} />
            <Route exact path="/customer-order" component={CustomerOrder} />
            <Route exact path="/update-record" component={UpdateCustomerRecord} />
            {/* End of Routes of User  */}
            {/* Start of Mehanic Routes */}
            <Route exact path="/Mechanic-Dashboard" component={UserHome} />
            {/* <Route exact path="/Mechanic-Service" component={UserService} /> */}
            <Route exact path="/Mechanic-Tasks" component={UserTasks} />
            {/* End of Mehanic Routes */}
            <Route exact path="/" component={Home} /> 
          </Switch>
          <ChatBoot/>
          {/* <Footer /> */}
      </BrowserRouter>
      </div>
      
    );
  }
}

export default App;
