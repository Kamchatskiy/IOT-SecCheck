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
			<table>
				<thead>
					<tr>
						<th>Device Name</th>
						<th>Expiration Date</th>
					</tr>
				</thead>
				<tbody>
					<tr color="warning">
						<td>Device 1</td>
						<td>2022-12-31</td>
					</tr>
					<tr>
						<td>Device 2</td>
						<td>2024-01-01</td>
					</tr>
					<tr style={{ color: "red" }}>
						<td>Device 3</td>
						<td>2023-06-30</td>
					</tr>
				</tbody>
			</table>
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