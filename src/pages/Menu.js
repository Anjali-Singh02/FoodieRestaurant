import React, { useState } from 'react';
import MenuCard from './MenuCard';
// import '../Basics/CSS/style.css';
import MenuApi from './MenuAPI';
const Menu = () => {
	const [menuData, setMenuData] = useState(MenuApi);

	const filterCategory = (category) => {
		const updatedList = MenuApi.filter((currElement) => {
			return currElement.category === category;
		});
		setMenuData(updatedList);
	};
	return (
		<>
			<nav className="navbar">
				<div className="btn-group">
					<button
						className="btn-group__item"
						onClick={() => filterCategory('breakfast')}
					>
						Breakfast
					</button>
					<button
						className="btn-group__item"
						onClick={() => filterCategory('lunch')}
					>
						Lunch
					</button>
					<button
						className="btn-group__item"
						onClick={() => filterCategory('evening')}
					>
						Evening
					</button>
					<button
						className="btn-group__item"
						onClick={() => filterCategory('dinner')}
					>
						Dinner
					</button>
					<button
						className="btn-group__item"
						onClick={() => setMenuData(MenuApi)}
					>
						All
					</button>
				</div>
			</nav>
			<MenuCard menuData={menuData} />
		</>
	);
};

export default Menu;
