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
import CloudMigration from "./Pages/cloud_services/CloudMigration";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OperationAndMonitoring from "./Pages/cloud_services/OperationAndMonitoring";
import Professional from "./Pages/cloud_services/Professional";
import DesignAndImplementation from "./Pages/cloud_services/DesingAndImplementation";
import SecurityOperation from "./Pages/cloud_services/SecurityOperation";
import CostOptimization from "./Pages/cloud_services/CostOptimization";

function App() {
	const Layout = () => {
		return (
			<div>
				<TestNav />
				<div className="mt-[120px]">
					<Outlet />
				</div>
				<div className="section-margin">
					<MyFooter />
				</div>
			</div>
		);
	};
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<HomePage />} />
						<Route path="about" element={<About />} />
						<Route path="team" element={<Team />} />
						<Route path="blog" element={<Blog />} />
						<Route path="service" element={<Services />} />
						<Route path="cloud/migration" element={<CloudMigration />} />
						<Route path="cloud/operation-and-monitoring" element={<OperationAndMonitoring />} />
						<Route path="cloud/professional" element={<Professional />} />
						<Route path="cloud/design-and-implementation" element={<DesignAndImplementation />} />
						<Route path="cloud/security-operation" element={<SecurityOperation />} />
						<Route path="cloud/cost-optimization" element={<CostOptimization />} />
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
