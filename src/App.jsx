/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Service1 from "./components/Service1";
import Service2 from "./components/Service2";
import Service3 from "./components/Service3";
import ProfessionalServicePage from "./components/Professional";
import Service4 from "./components/Service4";
import HomePage from "./Pages/Home";
import About from "./components/About";
import Team from "./components/Team";
import Blog from "./components/Blog";
import Services from "./components/Service";
import NavBar from "./components/NavBar";
import Developing from "./components/Developing";
import ContactUs from "./components/ContactUs";
import AWS from "./components/AWS";
import Microsoft from "./components/Microsoft";
import TestNav from "./components/TestNav";
import { Footer } from "flowbite-react";
import MyFooter from "./components/MyFooter";

function App() {

  const Layout = () => {
    return (
			<div>
				<div>
					<TestNav />
				</div>
				<Outlet />
				<MyFooter />
			</div>
		);
  }
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<Layout />
						}
					>
						<Route index element={<HomePage />} />
						<Route path="about" element={<About />} />
						<Route path="team" element={<Team />} />
						<Route path="blog" element={<Blog />} />
						<Route path="service" element={<Services />} />
						<Route path="service1" element={<Service1 />} />
						<Route path="service2" element={<Service2 />} />
						<Route path="service3" element={<Service3 />} />
						<Route path="service4" element={<Service4 />} />
						<Route path="developing" element={<Developing />} />
						<Route path="faq" element={<ContactUs />} />
						<Route path="aws" element={<AWS />} />
						<Route path="ms" element={<Microsoft />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
