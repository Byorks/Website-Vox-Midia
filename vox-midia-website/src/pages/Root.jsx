import { Outlet } from "react-router-dom";
import MainHeader from "../components/Header";
import MainFooter from "../components/Footer";

export default function RootLayout () {
    return(
        <>
        <MainHeader></MainHeader>
        <main>
            <Outlet></Outlet>
        </main>
        <MainFooter></MainFooter>
        </>
    );
}