import React from 'react';
import '../css/index.css';
import { COUNTRIES } from '../constants';

const EventsListPage = ({ position }) => {
	const country = COUNTRIES[position];

	return (
		<div className="box-wrapper">
			{country.events.length ? (
				country.events.map((event) => {
					return (
						<div className="box">
							<img
								src={event.thumbnail}
								alt="Thumbnail"
								style={{ borderRadius: '20px 20px 0 0' }}
							/>
							<div style={{ padding: '16px', height: '100%' }}>
								<p className="event-name">{event.name}</p>
								<div className="separator" />
								<div className="separator" />
								<div className="separator" />
								<p className="event-date">{event.date}</p>
								<div className="separator" />
								<p className="event-venue-time">
									{event.venue} | {event.time}
								</p>
								<div className="row">
									<button type="button" className="register-button">
										Register Now
									</button>
								</div>
							</div>
						</div>
					);
				})
			) : (
				<p className="country-text" style={{ fontSize: '18px' }}>
					No Events found!
				</p>
			)}
		</div>
	);
};

export default EventsListPage;
