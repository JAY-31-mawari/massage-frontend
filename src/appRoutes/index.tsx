import { Routes, Route } from "react-router-dom";
import Home from '../pages/index/home';
import ServiceSearchPage from '../pages/service/searchService';
import ServicePage from '../pages/service/servicePage';
import Agents from '../pages/agents/agents';
import AgentPage from '../pages/agents/agent-page';
import AgencyPage from '../pages/agents/agency-page';
import Payment from '../pages/admin/payment';
import ChangePassword from '../pages/admin/change-password';
import RegisterBusiness from '../pages/service/registerBusiness';
import Pricing from '../pages/pricing';
import Error from '../pages/error';
import Contact from '../pages/contact';
import AboutUs from '../pages/about-us';
import Checkout from '../pages/admin/checkout';
import Service1 from "../pages/services/services1";
import Service2 from "../pages/services/services2";
import Service3 from "../pages/services/services3";
import Service4 from "../pages/services/services4";
import AdminMainLayout from "../pages/admin/main";
import RegisterAccount from "../pages/createAccount";
import TermsNConditions from "../pages/others/terms&conditions"
import { ClientFAQ } from "../pages/others/clientFAQ";
import { MerchantAboutUs } from "../pages/others/merchantAboutUs";

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
            <Route path='/service/:id' element={<ServicePage />} />
            <Route path='/agents' element={<Agents />} />
            <Route path='/agent-page' element={<AgentPage />} />
            <Route path='/agent-page/:id' element={<AgentPage />} />
            <Route path='/agency-page' element={<AgencyPage />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/change-password' element={<ChangePassword />} />
            <Route path='/register' element={<RegisterBusiness />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/404' element={<Error />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/tnc' element={<TermsNConditions />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/faq' element={<ClientFAQ />} />
            <Route path='/my-account' element={<AdminMainLayout />} />
            <Route path='/create-account' element={<RegisterAccount />} />
            <Route path='/about-service' element={<MerchantAboutUs />} />
        </Routes>
    )
}