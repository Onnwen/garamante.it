import MediaQuery from "react-responsive"
import HomepageDesktop from "@/app/pages/homepage/homepage-desktop"
import HomepageMobile from "@/app/pages/homepage/homepage-mobile"
import Background from "@/app/other/background"

export default function Homepage() {
    return (
        <main className="h-screen w-screen relative">
            <div className={"absolute top-0 left-0 w-full h-full"}>
                <Background />
            </div>
            <MediaQuery minWidth={1224}>
                <HomepageDesktop />
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
                <HomepageMobile />
            </MediaQuery>
        </main>
    )
}
