import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export const Main = () => {
	return (
		<Container sx={{ textAlign: "center", marginTop: "5rem" }}>
			<Typography variant="h1" className="title">
				An online service that
				<Typography variant="h2" sx={{ paddingLeft: "10%" }}>
					keeps you up to date on security news related to IoT devices.
				</Typography>
			</Typography>
			<Button
				variant="contained"
				component={Link}
				to="/check"
				sx={{
					marginTop: "2rem",
					backgroundColor: "white",
					color: "#66b8fb",
					fontWeight: 900,
					border: "2px solid #66b8fb",
				}}
			>
				Check my device
			</Button>
		</Container>
	);
};