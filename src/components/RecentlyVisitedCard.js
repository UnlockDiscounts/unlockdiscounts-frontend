import React, { useEffect, useState } from "react";

const RecentlyVisitedCard = (props) => {
	const [data, setData] = useState();

	useEffect(() => {
		setData(props.data);
	}, []);

	if (!data) {
		return <div>Loading</div>;
	}

	return (
		<div className="recently-visited-card">
			<img src={data.image} alt={`image`} />
		</div>
	);
};

export default RecentlyVisitedCard;
