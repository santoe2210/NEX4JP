import React, { useEffect, useState } from 'react'

const Counter = ({ targetCount }) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (count < targetCount) {
			const timer = setInterval(() => {
				setCount((prevCount) => prevCount + 1);
			}, 40); // Adjust the interval timing as needed

			return () => clearInterval(timer);
		}
	}, [count, targetCount]);

	return (
		<div>
			<h4 className="text-3xl  font-semibold">{count} +</h4>
		</div>
	);
};

export default Counter