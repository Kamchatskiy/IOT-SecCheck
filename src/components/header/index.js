import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import Tabs from "@mui/material/Tabs"
import Box from "@mui/system/Box"
import { ContainerHeader, StyledTab } from "./style.js"

export const Header = () => {
  const [setListVisibility] = useState(false)
  const offListVisibility = () => {
    setListVisibility(false)
  }

  const location = useLocation()
  const [activeTab, setActiveTab] = useState("/")

  useEffect(() => {
    setActiveTab(location.pathname)
  }, [location.pathname])

  const handleChangeTab = (event, newTab) => {
    setActiveTab(newTab)
    offListVisibility()
  }

  return (
    <ContainerHeader>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Tabs
          onChange={handleChangeTab}
          value={activeTab}
          textColor="primary"
          indicatorColor="primary"
          variant="fullWidth"
          centered
        >
          <StyledTab value="/" label="Home" component={Link} to="/" />
		  <StyledTab
            value="/Check"
            label="Check"
            component={Link}
            to="/Check"
          />
          <StyledTab
            value="/Motivation"
            label="Motivation"
            component={Link}
            to="/Motivation"
          />
        </Tabs>
      </Box>
    </ContainerHeader>
  )
}