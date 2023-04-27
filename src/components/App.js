import { BrowserRouter, Routes, Route } from "react-router-dom";


import BSNavbar from "./BSNavbar";
import Footer from "./Footer";
import HomeCont from "./HomeCont";
import Overview from "../pages/Overview";
import SideNav from "./SideNav"
import History from "../pages/History";
import Exeleadership from "../pages/Exeleadership";
import Vision from "../pages/Vision";

import { useEffect, useState } from "react";
import Clients from "../pages/Clients";
import Location from "../pages/Location";
import Csr from "../pages/Csr";
import Bsintelli from "../pages/Bsintelli";
import Appdev from "../pages/Appdev";
import Dms from "../pages/Dms";
import Acs from "../pages/Acs";
import Suppserv from "../pages/Suppserv";
import Erpsoln from "../pages/Erpsoln";
import Recruitment from "../pages/Recruitment";


import { aboutDropDown,enterpriseDropdown } from "./NavItems";
import { Row,Col, Container } from "react-bootstrap";
import About from "../pages/About";

import Bottom from "./Bottom"
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";

function App() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || null);
  const [path, setPath] = useState(localStorage.getItem('path') ||'/');
  const [pageTitle, setPageTitle] = useState(localStorage.getItem('title')||'');
  useEffect(()=>{
    if(localStorage.getItem('data')){
      setData(JSON.parse(localStorage.getItem('data')))
    }
    if(localStorage.getItem('path')){
      setPath(localStorage.getItem('path'))
    }
    if(localStorage.getItem('title')){
      setPageTitle(localStorage.getItem('title'))
    }
  },[])
  useEffect(() => {
      localStorage.setItem('data',JSON.stringify(data) );
    }, [data]);
  useEffect(()=>{
    localStorage.setItem('path',path);
    console.log(localStorage.getItem('path'))
  },[path])
  useEffect(()=>{
    localStorage.setItem('title',pageTitle)
  },[pageTitle])
  const aboutBool=Object.values(aboutDropDown).some((item)=>item.path===path);
  console.log(aboutBool)
  const erpBool=Object.values(enterpriseDropdown).some((item)=>item.path===path)
  console.log(erpBool)
  // localStorage.clear()

  useEffect(() => {
    const title = document.querySelector("title");
    if (title) {
      if (path === "/") {
        title.innerText = "Abja Consulting Services";
      } else if (path === "/about") {
        title.innerText="About Us | Abja Consulting Services"
      } else {
        title.innerText = pageTitle + " | Abja Consulting Services";
      }
      
    }
  }, [pageTitle,path]);

  return (
    <div className="App">
      
      <BrowserRouter>
      <BSNavbar setPageTitle={setPageTitle} setPath={setPath} setData={setData} data={data}/>
      
        <div className="minPageHeight">
          {/* {(aboutBool||erpBool)&&data&&<SideNav setPath={setPath} data={data}/>} */}
          {
            ((aboutBool||erpBool)&&data&&(path!=="/about"))
              ?
                <Container className="dropCont">
                  <h4 id="title">
                    {pageTitle}
                  </h4>
                  <Row md={'auto'}>
                    <Col className="sideBar" md={3}><SideNav setPageTitle={setPageTitle} path={path} setPath={setPath} data={data}/></Col>
                    <Col md={9}>
                      <Routes>
                        
                        <Route path="coverview" element={<Overview/>}/>
                        <Route path="/history" element={<History/>}/>
                        <Route path="/exeleadership" element={<Exeleadership/>}/>
                        <Route path="/vision" element={<Vision/>}/>
                        <Route path="/clients" element={<Clients/>}/>
                        <Route path="/location" element={<Location/>}/>
                        <Route path="/csr" element={<Csr/>}/>
                        <Route path="/bsintelli" element={<Bsintelli/>}/>
                        <Route path="/appdev" element={<Appdev/>}/>
                        <Route path="/dms" element={<Dms/>}/>
                        <Route path="/acs" element={<Acs/>}/>
                        <Route path="/supserv" element={<Suppserv/>}/>
                        <Route path="/eprsoln" element={<Erpsoln/>}/>
                      </Routes>
                    </Col>
                  </Row>
                </Container>
              :
              <Container>
                <div className="pageTitle">
                  <h3>{(path==='/'||path==='/about')?null:pageTitle}</h3>
                </div>
                  
                  <Routes>
                    <Route path="/" element={<HomeCont/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/recruitment" element={<Recruitment/>}/>
                    <Route path="/careers" element={<Careers/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                  </Routes>
              </Container>
              
                }
          
        </div>
        <Bottom/>
        <Footer/>
      
      </BrowserRouter>
      {/* <SideNav/> */}
      {/* <HomeCont/> */}
      
      
    </div>
  );
}

export default App;
