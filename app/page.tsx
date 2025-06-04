import Link from "next/link";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "XMA Agency Client Survey",
  "description": "Complete our comprehensive client survey and receive a FREE marketing audit worth $500",
  "url": "https://survey.xma-agency.com", // Update with your actual domain
  "mainEntity": {
    "@type": "Survey",
    "name": "XMA Agency Client Experience Survey",
    "description": "Help us understand your business journey and goals",
    "provider": {
      "@type": "Organization",
      "name": "XMA Agency",
      "url": "https://xma-agency.com" // Update with your actual agency website
    }
  },
  "offers": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "Marketing Audit",
      "description": "Comprehensive marketing audit worth $500"
    },
    "price": "0",
    "priceCurrency": "AED"
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full bg-gray-800 rounded-lg shadow-2xl p-8 border border-gray-700">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">XMA Agency Client Survey</h1>
        
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold mb-2 text-gray-100">Help Us Serve You Better</h2>
          <p className="text-gray-300 mb-4">
            Complete This Survey & Receive a Free Marketing Audit ($500 Value)
          </p>
        </div>

        <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-6 mb-8">
          <h3 className="font-semibold mb-2 text-gray-100">Dear Valued Client,</h3>
          <p className="text-gray-300 mb-4">
            Thank you for being a valued XMA Agency client! Your feedback is crucial in helping us 
            continue to deliver exceptional results.
          </p>
          <p className="text-gray-300">
            This comprehensive survey will take approximately 10-15 minutes to complete. Upon completion, 
            you&apos;ll receive a complimentary marketing audit worth $500.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex items-start">
            <span className="text-blue-400 mr-3">✓</span>
            <p className="text-gray-300">Share your business growth journey</p>
          </div>
          <div className="flex items-start">
            <span className="text-blue-400 mr-3">✓</span>
            <p className="text-gray-300">Help us understand your goals and aspirations</p>
          </div>
          <div className="flex items-start">
            <span className="text-blue-400 mr-3">✓</span>
            <p className="text-gray-300">Provide insights into your buying process</p>
          </div>
          <div className="flex items-start">
            <span className="text-blue-400 mr-3">✓</span>
            <p className="text-gray-300">Receive a FREE marketing audit ($500 value)</p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/survey"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
          >
            Start Survey
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}