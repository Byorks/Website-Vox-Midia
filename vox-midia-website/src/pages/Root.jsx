import { Outlet } from "react-router";
import MainHeader from "../components/MainNavBar";
import MainFooter from "../components/MainFooter";

export default function RootLayout () {
    return(
        <>
        <MainHeader></MainHeader>
        <main>
            <Outlet />
        </main>
        <MainFooter></MainFooter>
        </>
    );
}