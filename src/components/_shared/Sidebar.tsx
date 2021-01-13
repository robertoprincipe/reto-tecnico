import React from "react";
import { SecurityScanOutlined, TabletOutlined, MoneyCollectOutlined, BuildOutlined, CopyrightOutlined } from '@ant-design/icons';

const Sidebar = () => {

	return (
		<div className="sidebar">
			<div className="sidebar__wrap">
				<div className="block1">
					<p className="title white">Seguro de<br />Salud</p>
					<p><SecurityScanOutlined /> Compralo de manera fácil y rápida</p>
					<p><TabletOutlined /> Cotiza y compra tu seguro 100% digital</p>
					<p><MoneyCollectOutlined /> Hasta S/ 2 millones de cobertura anual</p>
					<p><BuildOutlined /> Más de 300 clinicas en todo el Perú</p>
				</div>
				<div className="block2"><CopyrightOutlined /> RIMAC Seguros y Reaseguros</div>
			</div>
		</div>
	);

};

export default Sidebar;