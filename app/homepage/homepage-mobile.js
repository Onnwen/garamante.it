import HomepageHeaderMobile from "@/app/homepage/components/mobile/homepage-header-mobile"
import CurriculumMobile from "@/app/curriculum/curriculum-mobile"

export default function HomepageMobile() {
    return (
        <div className="h-screen overflow-scroll snap-y snap-mandatory">
            <HomepageHeaderMobile />
            <CurriculumMobile />
        </div>
    )
}
