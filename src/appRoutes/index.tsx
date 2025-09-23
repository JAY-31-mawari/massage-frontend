import { Routes, Route } from "react-router-dom";
import Home from '../pages/index/home';
import ServiceSearchPage from '../pages/service/searchService';
import ServicePage from '../pages/service/servicePage';
import Agents from '../pages/agents/agents';
import AgentPage from '../pages/agents/agent-page';
import AgencyPage from '../pages/agents/agency-page';
import ChangePassword from '../pages/admin/change-password';
import RegisterBusiness from '../pages/service/registerBusiness';
import Pricing from '../pages/pricing';
import Error from '../pages/error';
import Contact from '../pages/contact';
import AboutUs from '../pages/admin/about-us';
import Checkout from '../pages/admin/checkout';
import Service1 from "../pages/services/services1";
import Service2 from "../pages/services/services2";
import Service3 from "../pages/services/services3";
import Service4 from "../pages/services/services4";
import AdminMainLayout from "../pages/admin/main";
import RegisterAccount from "../pages/createAccount";
import { ClientFAQ } from "../pages/others/clientFAQ";
import { MerchantAboutUs } from "../pages/others/merchantLandingPage";
import { Refund } from "../pages/others/refund";
import { PrivacyPolicy } from "../pages/others/privacyPolicy";
import { ContractorAgreement } from "../pages/others/contractorsAgreement";
import { TermsOfService } from "../pages/others/termsOfService";
import { WebsiteTermsOfUse } from "../pages/others/websiteTermsOfUse";
import ConsentForm from "../pages/others/consentForm";
import Payment from "../pages/stripe-payment/payment"
import { Success } from "../pages/success";
import { Fail } from "../pages/fail";

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create-account' element={<RegisterAccount />} />
            <Route path='/serviceList' element={<ServiceSearchPage />} />
            <Route path='/my-account' element={<AdminMainLayout />} />
            <Route path='/service' element={<ServicePage />} />
            <Route path='/service/:id' element={<ServicePage />} />
            <Route path='/register' element={<RegisterBusiness />} />
            <Route path='/contact' element={<Contact />} /> 
            <Route path='/about-service' element={<MerchantAboutUs />} />
            <Route path='/payment' element={<Payment />} />

            {/* SERVICES */}
            <Route path='/service/physiotherapy' element={<Service1 />} />
            <Route path='/service/chiropractic' element={<Service2 />} />
            <Route path='/service/massage' element={<Service3 />} />
            <Route path='/service/acupuncture' element={<Service4 />} />

            {/* STATIC PAGES */}
            
            {/* <Route path='/agents' element={<Agents />} />
            <Route path='/agent-page' element={<AgentPage />} />
            <Route path='/agent-page/:id' element={<AgentPage />} />
            <Route path='/agency-page' element={<AgencyPage />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/change-password' element={<ChangePassword />} />
            <Route path='/pricing' element={<Pricing />} /> */}
            <Route path='/404' element={<Error />} />
            <Route path='/paymentSuccess' element={<Success /> } />
            <Route path='/paymentFailed' element={<Fail /> } />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/faq' element={<ClientFAQ />} />
            <Route path='/refund-&-cancellation' element={<Refund />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/terms-of-use' element={<WebsiteTermsOfUse />} />
            <Route path='/consent-form' element={<ConsentForm />} />
            <Route path='/contractor-agreement' element={<ContractorAgreement />} />
            <Route path='/terms-of-service' element={<TermsOfService />} />
        </Routes>   
    )
}