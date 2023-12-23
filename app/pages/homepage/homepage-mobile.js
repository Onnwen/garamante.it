import HomepageHeaderMobile from "@/app/components/homepage/header/homepage-header-mobile"
import CurriculumMobile from "@/app/pages/curriculum/curriculum-mobile"

export default function HomepageMobile() {
    return (
        <div className="h-screen overflow-scroll snap-y snap-mandatory">
            <HomepageHeaderMobile />
            <CurriculumMobile />
        </div>
    )
}
