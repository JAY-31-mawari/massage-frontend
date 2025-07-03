import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Index from './pages/index';
import IndexThree from './pages/index/index-three';
import IndexFour from './pages/index/index-four';
import IndexTwo from './pages/index/index-two';
import IndexFive from './pages/index/index-five';
import IndexSix from './pages/index/index-six';
import IndexSeven from './pages/index/index-seven';
import IndexEight from './pages/index/index-eight';
import IndexNine from './pages/index/index-nine';
import IndexTen from './pages/index/index-ten';
import IndexEleven from './pages/index/index-eleven';
import Video from './pages/index/video';
import Map from './pages/index/map';
import ListLayoutOne from './pages/property/list-layout-one';
import ListLayoutTwo from './pages/property/list-layout-two';
import ScrollToTop from './components/scroll-to-top';
import ListLayoutThree from './pages/property/list-layout-three';
import ListLayoutWithMap from './pages/property/list-layout-with-map';
import ListLayoutFull from './pages/property/list-layout-full';
import GridLayoutWithSidebar from './pages/property/grid-layout-with-sidebar';
import ClassicalLayoutWithSidebar from './pages/property/classical-layout-with-sidebar';
import GridLayoutWithMap from './pages/property/grid-layout-with-map';
import Grid from './pages/property/grid';
import ClassicalProperty from './pages/property/classical-property';
import ClassicalLayoutWithMap from './pages/property/classical-layout-with-map';
import HalfMap from './pages/property/half-map';
import HalfMapTwo from './pages/property/half-map-2';
import SinglePropertyOne from './pages/property/single-property-1';
import SinglePropertyTwo from './pages/property/single-property-2';
import SinglePropertyThree from './pages/property/single-property-3';
import SinglePropertyFour from './pages/property/single-property-4';
import Agents from './pages/agents/agents';
import AgentPage from './pages/agents/agent-page';
import Agencies from './pages/agents/agencies';
import AgencyPage from './pages/agents/agency-page';
import AddAgent from './pages/agents/add-agent';
import Dashboard from './pages/admin/dashboard';
import Payment from './pages/admin/payment';
import MyProfile from './pages/admin/my-profile';
import MyProperty from './pages/admin/my-property';
import BookmarkList from './pages/admin/bookmark-list';
import ChangePassword from './pages/admin/change-password';
import CompareProperty from './pages/property/compare-property';
import SubmitProperty from './pages/property/submit-property';
import Blog from './pages/blog/blog';
import BlogDetail from './pages/blog/blog-detail';
import Component from './pages/component';
import Pricing from './pages/pricing';
import Error from './pages/error';
import Contact from './pages/contact';
import AboutUs from './pages/about-us';
import Checkout from './pages/admin/checkout';
import CreateAccount from './pages/admin/create-account';
import EditAgent from './pages/agents/edit-agent';
import Faq from './pages/faq';
import SubmitPropertyDashboard from './pages/admin/submit-property-dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/home-2' element={<IndexTwo/>}/>
        <Route path='/home-3' element={<IndexThree/>}/>
        <Route path='/home-4' element={<IndexFour/>}/>
        <Route path='/home-5' element={<IndexFive/>}/>
        <Route path='/home-6' element={<IndexSix/>}/>
        <Route path='/home-7' element={<IndexSeven/>}/>
        <Route path='/home-8' element={<IndexEight/>}/>
        <Route path='/home-9' element={<IndexNine/>}/>
        <Route path='/home-10' element={<IndexTen/>}/>
        <Route path='/home-11' element={<IndexEleven/>}/>
        <Route path='/video' element={<Video/>}/>
        <Route path='/map' element={<Map/>}/>
        
        <Route path='/list-layout-one' element={<ListLayoutOne/>}/>
        <Route path='/list-layout-two' element={<ListLayoutTwo/>}/>
        <Route path='/list-layout-three' element={<ListLayoutThree/>}/>
        <Route path='/list-layout-with-map' element={<ListLayoutWithMap/>}/>
        <Route path='/list-layout-full' element={<ListLayoutFull/>}/>
        <Route path='/grid-layout-with-sidebar' element={<GridLayoutWithSidebar/>}/>
        <Route path='/classical-layout-with-sidebar' element={<ClassicalLayoutWithSidebar/>}/>
        <Route path='/grid-layout-with-map' element={<GridLayoutWithMap/>}/>
        <Route path='/grid' element={<Grid/>}/>
        <Route path='/classical-property' element={<ClassicalProperty/>}/>
        <Route path='/classical-layout-with-map' element={<ClassicalLayoutWithMap/>}/>
        <Route path='/half-map' element={<HalfMap/>}/>
        <Route path='/half-map-2' element={<HalfMapTwo/>}/>
        <Route path='/single-property-1' element={<SinglePropertyOne/>}/>
        <Route path='/single-property-1/:id' element={<SinglePropertyOne/>}/>
        <Route path='/single-property-2' element={<SinglePropertyTwo/>}/>
        <Route path='/single-property-2/:id' element={<SinglePropertyTwo/>}/>
        <Route path='/single-property-3' element={<SinglePropertyThree/>}/>
        <Route path='/single-property-3/:id' element={<SinglePropertyThree/>}/>
        <Route path='/single-property-4' element={<SinglePropertyFour/>}/>
        <Route path='/single-property-4/:id' element={<SinglePropertyFour/>}/>
        <Route path='/agents' element={<Agents/>}/>
        <Route path='/agent-page' element={<AgentPage/>}/>
        <Route path='/agent-page/:id' element={<AgentPage/>}/>
        <Route path='/agencies' element={<Agencies/>}/>
        <Route path='/agency-page' element={<AgencyPage/>}/>
        <Route path='/agency-page/:id' element={<AgencyPage/>}/>
        <Route path='/add-agent' element={<AddAgent/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-property' element={<MyProperty/>}/>
        <Route path='/bookmark-list' element={<BookmarkList/>}/>
        <Route path='/change-password' element={<ChangePassword/>}/>
        <Route path='/compare-property' element={<CompareProperty/>}/>
        <Route path='/submit-property' element={<SubmitProperty/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blog-detail' element={<BlogDetail/>}/>
        <Route path='/blog-detail/:id' element={<BlogDetail/>}/>
        <Route path='/component' element={<Component/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/404' element={<Error/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/create-account' element={<CreateAccount/>}/>
        <Route path='/edit-agent' element={<EditAgent/>}/>
        <Route path='/faq' element={<Faq/>}/>
        <Route path='/place-search' element={<HalfMapTwo/>}/>
        <Route path='/submit-property-dashboard' element={<SubmitPropertyDashboard/>}/>
      </Routes>
      <ScrollToTop/>
    </>
  );
}

export default App;
