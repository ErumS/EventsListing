import React, { useState } from 'react';
import '../css/index.css';
import { COUNTRIES } from '../constants';

const Sticky = (props) => {
	const [activePos, setActivePos] = useState(0);

	const setPosition = (pos) => {
		setActivePos(pos);
		props.onSelectionChange(pos);
	};

	return (
		<div className="sticky-wrapper">
			<div className="sticky">
				{COUNTRIES.map((country, i) => (
					<React.Fragment>
						<div
							className={activePos === i ? 'active' : ''}
							onClick={() => setPosition(i)}
						>
							<p className="country-text">
								{country.name}
								<span>
									<small>
										{country.count > 0 ? ` (${country.count})` : ''}
									</small>
								</span>
							</p>
						</div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default Sticky;
