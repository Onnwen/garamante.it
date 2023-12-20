import HomepageHeaderMobile
    from "@/app/components/homepage/header/homepage-header-mobile";
import CurriculumMobile
    from "@/app/pages/curriculum/curriculum-mobile";

export default function HomepageMobile() {
    return (
        <main className="h-screen overflow-scroll snap-y snap-mandatory md:hidden">
            <HomepageHeaderMobile/>
            <CurriculumMobile/>
        </main>
    )
}