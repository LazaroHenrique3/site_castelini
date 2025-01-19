import { MissionVisionValuesSection } from "./sections/mission-vision-values-section";
import { TodayWeAreSection } from "./sections/today-we-are-section";
import { CompanyMilestonesSection } from "./sections/company-milestones-section";
import { HistorySection } from "./sections/history-section";
import { BusinessModelSection } from "./sections/business-model-section";

export default function About() {
    return (
        <main className="w-full">
            <HistorySection/>
            <BusinessModelSection/>
            <CompanyMilestonesSection/>
            <TodayWeAreSection/>
            <MissionVisionValuesSection />
        </main>
    )
}