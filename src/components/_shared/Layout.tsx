import React from "react";
import "./style.scss";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

interface ILayoutWrapper {
	children: React.ReactNode
}

class LayoutWrapper extends React.PureComponent<ILayoutWrapper, any> {

	constructor(props: ILayoutWrapper) {
		super(props);
		this.state = {
		};
	}

	public render() {
		return (
			<>
				<div className="layout">
					<Header />
					<div className="main">
						<Sidebar />
						{this.props.children}
					</div>
					<Footer />
				</div>
			</>
		);
	};
};

export default LayoutWrapper;