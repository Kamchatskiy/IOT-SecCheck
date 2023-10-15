import React from "react"
import {
	Routes,
	Route,
	BrowserRouter,
} from "react-router-dom"
import { Header } from "./components/header"
import { Main } from "./pages/main"
import { Check } from "./pages/check"
import { Motivation } from "./pages/motivation"

export const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/check" element={<Check />} />
					<Route path="/Motivation" element={<Motivation />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}