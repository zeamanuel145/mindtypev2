
export default function Accessibility() {
  
  return (
    <section className="w-screen grid grid-cols-1 md:grid-cols-2  overflow-hidden bg-white dark:bg-gray-900 py-8">


  {/* Main Content */}
  <div className="gap-8 px-6 md:px-20 mt-10">
    {/* Left Text Section */}
    <div className="space-y-6">
      <p className="text-gray-800 dark:text-gray-100 text-lg leading-relaxed">
        Designing with accessibility in mind is more than a moral imperative; it's a strategic advantage.
        When we build digital experiences that accommodate diverse needs, we unlock usability for everyone,
        not just those with permanent disabilities. Consider users navigating with screen readers,
        individuals with low vision, or someone using a mobile device in bright sunlight. Accessibility
        features like proper heading hierarchy, alt text, and sufficient color contrast benefit all these
        users. Inclusive design isn't a niche concern; it's foundational to good UX.
      </p>
      <p className="text-gray-800 dark:text-gray-100 text-lg leading-relaxed">
        Ultimately, accessible design is human-centered design. It challenges us to think beyond edge cases
        and embrace the full spectrum of user needs. By designing for inclusion, we create products that are
        more resilient, adaptable, and future proof. Accessibility isn't just about doing the right thing;
        it's about doing things right. And when we get it right, we build digital spaces where everyone
        belongs.
      </p>
    </div>

   
  </div>
</section>


  );
}