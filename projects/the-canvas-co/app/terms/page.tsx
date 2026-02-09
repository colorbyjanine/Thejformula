export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-12">Last updated: February 2026</p>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Services Provided</h2>
            <p className="text-gray-600 leading-relaxed">
              The Canvas Co ("we," "us," "our") provides custom website design and development services. 
              Our services include website design, development, and deployment based on your selected package:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li><strong>Starter Package ($497):</strong> 3-page website, mobile responsive, basic SEO</li>
              <li><strong>Growth Package ($997):</strong> 5-page website, contact forms, social integration</li>
              <li><strong>Premium Package ($1,997):</strong> 7+ page website, booking system, advanced features</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Project Timeline</h2>
            <p className="text-gray-600 leading-relaxed">
              Upon receipt of completed questionnaire and payment, we will deliver your website within:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Starter Package: 5-7 business days</li>
              <li>Growth Package: 7-10 business days</li>
              <li>Premium Package: 10-14 business days</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Timelines may vary based on client responsiveness and revision requests.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Revisions</h2>
            <p className="text-gray-600 leading-relaxed">
              Each package includes:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Starter: 1 round of revisions</li>
              <li>Growth: 2 rounds of revisions</li>
              <li>Premium: 3 rounds of revisions</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Additional revisions after delivery may be purchased at $75/hour.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment Terms</h2>
            <p className="text-gray-600 leading-relaxed">
              Full payment is required before work begins. We accept all major credit cards and PayPal. 
              All sales are final once work has commenced.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Website Ownership & Hosting</h2>
            <p className="text-gray-600 leading-relaxed">
              Upon final delivery and payment completion:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li><strong>You own your website.</strong> Full ownership of the website code transfers to you.</li>
              <li><strong>Free hosting:</strong> Your website will be deployed to Vercel's free tier (your own account).</li>
              <li><strong>Domain:</strong> You are responsible for purchasing and maintaining your domain name.</li>
              <li><strong>No monthly fees:</strong> There are no mandatory ongoing costs unless you choose our maintenance plan.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Maintenance & Updates</h2>
            <p className="text-gray-600 leading-relaxed">
              After delivery, additional updates and changes are available:
            </p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li><strong>One-time updates:</strong> $50-$150 per change (depending on complexity)</li>
              <li><strong>Maintenance Plan:</strong> $97/month for unlimited small updates, priority support, and monthly checkups</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Client Responsibilities</h2>
            <p className="text-gray-600 leading-relaxed">You agree to:</p>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li>Provide accurate information in the questionnaire</li>
              <li>Supply all necessary content (text, images, logos) in a timely manner</li>
              <li>Respond to requests and review drafts within 5 business days</li>
              <li>Ensure you have rights to all content provided</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed">
              Our liability is limited to the amount paid for services. We are not responsible for any 
              indirect, incidental, or consequential damages. We do not guarantee specific business results 
              from your website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Refund Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              Refunds may be requested within 24 hours of payment if work has not yet begun. Once design 
              work has commenced, no refunds will be issued. If we fail to deliver within the agreed 
              timeline (with reasonable buffer for client delays), a partial refund may be negotiated.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              For questions about these terms, please contact us at hello@thecanvas.co
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>© 2026 The Canvas Co. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
