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
import CloudMigration from "./Pages/cloud_services/CloudMigrationJP";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OperationAndMonitoring from "./Pages/cloud_services/OperationAndMonitoringJP";
import Professional from "./Pages/cloud_services/ProfessionalJP";
import DesignAndImplementation from "./Pages/cloud_services/DesingAndImplementationJP";
import SecurityOperation from "./Pages/cloud_services/SecurityOperationJP";
import CostOptimization from "./Pages/cloud_services/CostOptimizationJP";
import Home from "./components/Home";
import RenewHome from "./Pages/RenewHome";
import AboutUs from "./Pages/AboutUs";
import ReadMorePage from "./components/ReadMorePage"; // Import the ReadMorePage component
import SecurityOperationService from "./Pages/security/SecurityOperationService";
import Microsoft365 from "./Pages/microsoft/Microsoft365";


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
						<Route index element={<RenewHome />} />
						<Route path="about" element={<AboutUs />} />
						<Route path="team" element={<Team />} />
						<Route path="blog" element={<Blog />} />
						<Route path="service" element={<Services />} />
						<Route path="cloud/migration" element={<CloudMigration />} />
						<Route
							path="cloud/operation-and-monitoring"
							element={<OperationAndMonitoring />}
						/>
						<Route path="cloud/professional" element={<Professional />} />
						<Route
							path="cloud/design-and-implementation"
							element={<DesignAndImplementation />}
						/>
						<Route
							path="cloud/security-operation"
							element={<SecurityOperation />}
						/>
						<Route
							path="cloud/cost-optimization"
							element={<CostOptimization />}
						/>
						<Route
							path="security/operation-service"
							element={<SecurityOperationService />}
						/>
						<Route path="microsoft/microsoft-365"
						element={<Microsoft365 />}
						></Route>
						<Route path="developing" element={<Developing />} />

						<Route path="faq" element={<ContactUs />} />
						<Route path="aws" element={<AWS />} />
						<Route path="ms" element={<Microsoft />} />
						<Route path="blog/:id" element={<ReadMorePage />} /> {/* Add this route */}
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
