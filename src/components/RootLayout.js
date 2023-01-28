import React, { useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { getUser } from "../util/api";
import styles from "./RootLayout.module.css"

const RootLayout = () => {
    const userData = useLoaderData();
    console.log(userData);
    

    return (
        <>
            <div className={styles.sidebar}>
                <p className={styles.title}>Loyalty</p>
                <p className={styles.subtitle}>Storeowner Portal</p>
                {userData.setupComplete ? 
                <SetupComplete /> :
                <SetupIncomplete/>
                }
            </div>
            <div id="detail">
                <Outlet/>
            </div>
        </>
    )

}

const SetupComplete = () => {
    return (
        <>
            <div>
                <p>Dashboard</p>
            </div>
            <div>
                <p>My Stores</p>
            </div>
        </>
    )
}

const SetupIncomplete = () => {
    return (
        <>
            <div>
                <p>1. Set Up Loyalty Card</p>
            </div>
            <div>
                <p>2. Add Store</p>
            </div>
        </>
    )
}

export default RootLayout;

export function sidebarLoader() {
    return getUser();
}