import { Routes, Route } from "react-router-dom";
import Home from '../pages/index/home';
import ServiceSearchPage from '../pages/service/searchService';
import ServicePage from '../pages/service/servicePage';
import RegisterBusiness from '../pages/service/registerBusiness';
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
import { ContractorSignAgreement } from "../pages/others/contractorSignAgreement";
import { ContractorAgreement } from "../pages/others/contractorAgreement";
import { TermsOfService } from "../pages/others/termsOfService";
import { WebsiteTermsOfUse } from "../pages/others/websiteTermsOfUse";
import ConsentForm from "../pages/others/consentForm";
import Payment from "../pages/stripe-payment/payment"
import Success from "../pages/success";
import Fail from "../pages/fail";

export function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create-account' element={<RegisterAccount />} />
            <Route path='/serviceList' element={<ServiceSearchPage />} />
            <Route path='/my-account' element={<AdminMainLayout />} />
            <Route path='/service' element={<ServicePage />} />
            <Route path='/service/:id' element={<ServicePage />} />
            <Route path='/practitioner-register' element={<RegisterBusiness />} />
            <Route path='/contact' element={<Contact />} /> 
            <Route path='/about-service' element={<MerchantAboutUs />} />
            <Route path='/payment' element={<Payment />} />

            {/* SERVICES */}
            <Route path='/service/physiotherapy' element={<Service1 />} />
            <Route path='/service/chiropractic' element={<Service2 />} />
            <Route path='/service/massage' element={<Service3 />} />
            <Route path='/service/acupuncture' element={<Service4 />} />

            {/* STATIC PAGES */}
            <Route path='/payment' element={<Payment />} />
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
            <Route path='/contractor-sign-agreement' element={<ContractorSignAgreement />} />
            <Route path='/contractor-agreement' element={<ContractorAgreement />} />
            <Route path='/terms-of-service' element={<TermsOfService />} />
        </Routes>   
    )
}