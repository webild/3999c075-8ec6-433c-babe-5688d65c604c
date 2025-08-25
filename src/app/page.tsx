"use client"
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';
import SimpleFooter from '@/components/sections/layouts/footer/SimpleFooter';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <section id="hero" className="bg-white py-18 text-center">
        <SimpleHero title="Your Brand" description="Empowering solutions for businesses." primaryButtonText="Get Started" secondaryButtonText="Learn More" />
      </section>
      <section id="about" className="bg-gray-100 py-18">
        <MinimalAbout description="We are dedicated to providing top-notch services to help your business thrive." />
      </section>
      <section id="services" className="bg-white py-18">
        <SimpleKPIBento items={[{ value: 'Quality', description: 'We maintain high standards in all our services.' }, { value: 'Innovation', description: 'We adopt the latest technologies.' }, { value: 'Customer Engagement', description: 'We prioritize client satisfaction.' }]} className="my-6" gridClassName="grid grid-cols-1 md:grid-cols-3 gap-4" itemClassName="p-5 bg-white shadow-md rounded-lg" valueClassName="text-2xl font-bold" descriptionClassName="text-gray-600" />
      </section>
      <section id="contact" className="bg-gray-200 py-18">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="p-2 border rounded" required />
            <input type="email" placeholder="Email" className="p-2 border rounded" required />
            <textarea placeholder="Message" className="p-2 border rounded" required></textarea>
            <button type="submit" className="bg-blue-600 text-white py-2 rounded">Submit <ArrowRight /></button>
          </form>
          <p className="mt-2 text-sm text-gray-600">We value your privacy. Your information will not be shared.</p>
        </div>
      </section>
      <footer className="bg-white py-6">
        <SimpleFooter columns={[{ title: 'About Us', items: [{ label: 'Our Mission', onClick: () => {} }, { label: 'Contact', onClick: () => {} }] }, { title: 'Legal', items: [{ label: 'Terms of Service', onClick: () => {} }, { label: 'Privacy Policy', onClick: () => {} }] }]} copyrightText="© 2023 Your Brand" onPrivacyClick={() => {}} />
      </footer>
    </SiteThemeProvider>
  );
}