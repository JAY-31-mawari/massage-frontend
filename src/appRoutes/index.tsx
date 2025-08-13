import { Routes, Route } from "react-router-dom";
import Home from '../pages/index/home';

import ServiceSearchPage from '../pages/property/searchService';
import ServicePage from '../pages/property/servicePage';
import Agents from '../pages/agents/agents';
import AgentPage from '../pages/agents/agent-page';
import AgencyPage from '../pages/agents/agency-page';
import Payment from '../pages/admin/payment';
import ChangePassword from '../pages/admin/change-password';
import SubmitProperty from '../pages/property/submit-property';
import Pricing from '../pages/pricing';
import Error from '../pages/error';
import Contact from '../pages/contact';
import AboutUs from '../pages/about-us';
import Checkout from '../pages/admin/checkout';
import Faq from '../pages/faq';
import ParlourMap from "../pages/property/mapbox";
import Service1 from "../pages/services/services1";
import Service2 from "../pages/services/services2";
import Service3 from "../pages/services/services3";
import Service4 from "../pages/services/services4";
import AdminMainLayout from "../pages/admin/main";
import RegisterAccount from "../pages/createAccount";

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/service/physiotherapy' element={<Service1 />} />
            <Route path='/service/chiropractic' element={<Service2 />} />
            <Route path='/service/massage' element={<Service3 />} />
            <Route path='/service/acupuncture' element={<Service4 />} />

            <Route path='/serviceList' element={<ServiceSearchPage />} />
            <Route path='/service' element={<ServicePage />} />
            <Route path='/agents' element={<Agents />} />
            <Route path='/agent-page' element={<AgentPage />} />
            <Route path='/agent-page/:id' element={<AgentPage />} />
            <Route path='/agency-page' element={<AgencyPage />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/change-password' element={<ChangePassword />} />
            <Route path='/submit-property' element={<SubmitProperty />} />
            <Route path='/mapbox' element={<ParlourMap />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/404' element={<Error />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/my-account' element={<AdminMainLayout />} />
            <Route path='/create-account' element={<RegisterAccount />} />
        </Routes>
    )
}