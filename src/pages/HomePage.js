import React from "react";
import Header from "../components/header/Header";
import HeaderSection from "../sections/HeaderSection";
import StoryAboutSection from "../sections/StoryAboutSection";
import TypesSection from "../sections/TypesSection";
import UnlimitedClassesSection from "../sections/UnlimitedClassesSection";
import TrainersSection from "../sections/TrainersSection";
import SuccessStoriesSection from "../sections/SuccessStoriesSection";
import TrainingTodaySection from "../sections/TrainingTodaySection";
import MemberShipPlanSection from "../sections/MemberShipPlanSection";
import LatesBlog from "../sections/LatesBlog";
import RegisterNowSection from "../sections/RegisterNowSection";
import FooterBanner from "../sections/FooterBanner";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <HeaderSection />
      <StoryAboutSection />
      <TypesSection />
      <UnlimitedClassesSection />
      <TrainersSection />
      <SuccessStoriesSection />
      <TrainingTodaySection />
      <MemberShipPlanSection />
      <div className="bg-[#F5F5F5] mb-[110px] mt-[150px]">
        <RegisterNowSection />
      </div>
      <LatesBlog title="Latest Blog" />
      <FooterBanner/>
      <Footer />
    </div>
  );
}

export default HomePage;
