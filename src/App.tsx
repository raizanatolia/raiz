/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import ConnectionSection from './components/ConnectionSection';
import ApproachSection from './components/ApproachSection';
import MapSection from './components/MapSection';
import JourneySection from './components/JourneySection';
import JournalSection from './components/JournalSection';
import AboutSection from './components/AboutSection';
import OrganizationsSection from './components/OrganizationsSection';
import FaqSection from './components/FaqSection';
import ContactCtaSection from './components/ContactCtaSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F2EBDD] text-[#363D28] font-sans antialiased selection:bg-[#363D28] selection:text-[#F2EBDD]">
      {/* Primary Navigation */}
      <Header />

      {/* Main Page Flow */}
      <main id="contenido-principal" className="flex-1">
        <Hero />
        <ConnectionSection />
        <ApproachSection />
        <MapSection />
        <JourneySection />
        <JournalSection />
        <AboutSection />
        <OrganizationsSection />
        <FaqSection />
        <ContactCtaSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
