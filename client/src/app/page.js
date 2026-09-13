

import Banner from "./components/banner/Banner";
import ContactForm from "./components/contactForm/ContactForm";
import TeamMember from "./components/teamMembers/TeamMember";

export default async function Home() {
  
  return (
    <>
      <div >
        <Banner/>
        <TeamMember/>
        <ContactForm/>
      </div>
    </>
  );
}
