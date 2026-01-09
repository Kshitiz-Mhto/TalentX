import React from 'react';
import AboutHero from '@/components/about/AboutHero';
import TeamTabsSection from '@/components/about/TeamTabsSection';

export default function AboutUs() {
    return (
        <main className="min-h-screen bg-white">
            <AboutHero />
            <TeamTabsSection />
        </main>
    );
}
