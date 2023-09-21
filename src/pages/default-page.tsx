import { Outlet } from "react-router-dom";
import HeaderDefault from "../components/header-default";
import { LayoutDefault } from "../components/layout-default";

export default function DefaultPage() {
  return (
  <LayoutDefault> 
    <HeaderDefault/>
    <Outlet/>
  </LayoutDefault>
  )
}

