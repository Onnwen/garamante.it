import { newYorkFont } from "@/app/layout"
import MobileHome from "@/app/adaptive/mobile/mobile-home"
import MobileCV from "@/app/adaptive/mobile/mobile-cv"

export default function MobilePage() {
    return (
        <main className="h-screen overflow-scroll snap-y snap-mandatory">
            <MobileHome />
            <MobileCV />
        </main>
    )
}
