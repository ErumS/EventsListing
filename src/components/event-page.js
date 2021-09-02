import React, { useState } from 'react';
import '../css/index.css';
import Sticky from './sticky';
import EventsListPage from './events-list';

const EventPage = () => {
	const [activePos, setActivePos] = useState(0);

	const getSelectedValue = (value) => {
		setActivePos(value);
	};

	return (
		<div className="column column-background">
			<div className="wrapper">
				<h1 className="heading" align="center">
					Explore Our Events
				</h1>
				<div className="row">
					<Sticky onSelectionChange={getSelectedValue} />
					<EventsListPage position={activePos} />
				</div>
			</div>
		</div>
	);
};

export default EventPage;
