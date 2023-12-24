"use client"

import MediaQuery from "react-responsive"
import HomepageDesktop from "@/app/homepage/homepage-desktop"
import HomepageMobile from "@/app/homepage/homepage-mobile"

export default function Homepage() {
    return (
        <>
            <MediaQuery minWidth={1224}>
                <HomepageDesktop />
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
                <HomepageMobile />
            </MediaQuery>
        </>
    )
}
