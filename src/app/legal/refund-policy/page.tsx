import React from 'react';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';

export default function RefundPolicyPage() {
  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "norefund", title: "2. General No Refund Policy" },
    { id: "servicedelivery", title: "3. Service Delivery Definition" },
    { id: "changeofcourse", title: "4. Change of Course Policy" },
    { id: "rescheduling", title: "5. Rescheduling Policy" },
    { id: "cancellation", title: "6. Cancellation Policy" },
    { id: "nonrefundable", title: "7. Non-Refundable Conditions" },
    { id: "legalexception", title: "8. Legal Exception Clause" },
    { id: "duplicatepayment", title: "9. Duplicate Payment Refunds" },
    { id: "chargeback", title: "10. Chargeback & Dispute Protection" },
    { id: "refundprocess", title: "11. Refund Process" },
    { id: "platformfailure", title: "12. Platform Failure Clause" },
    { id: "misuse", title: "13. Misuse & Fraud Protection" },
    { id: "legalcost", title: "14. Legal Cost & Liability Protection" },
    { id: "modifications", title: "15. Policy Modifications" },
    { id: "contact", title: "16. Contact Information" },
  ];

  return (
    <LegalPageLayout title="Refund Policy" lastUpdated="15 April 2026" sections={sections}>
      
      <section id="introduction" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. INTRODUCTION</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>This Refund, Cancellation, Rescheduling & Course Change Policy (“Policy”) governs all payments, enrollments, modifications, and refund-related matters for services offered by Quillance (“Company”, “We”, “Us”, or “Our”).</p>
          <p>By purchasing or enrolling in any course, training program, or service through www.quillance.com, you (“User”, “You”) acknowledge that:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>You have read, understood, and agreed to this Policy</li>
            <li>You have reviewed course details, curriculum, and service scope before purchase</li>
            <li>You are making an informed and voluntary purchase decision</li>
          </ul>
          <p>This Policy forms a legally binding agreement and must be read along with the Terms of Service and Privacy Policy.</p>
          <p>This Policy shall be subject to applicable laws in India, including the Consumer Protection Act, 2019.</p>
        </div>
      </section>

      <section id="norefund" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. GENERAL NO REFUND POLICY</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>All payments made to Quillance are final, binding, non-refundable, and non-transferable, except where required under applicable law.</p>
          <p>Once payment is successfully completed:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>No refunds shall be issued</li>
            <li>No cancellations shall be processed</li>
            <li>No transfers to another user shall be allowed</li>
          </ul>
          <p>This policy applies regardless of:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Non-usage of services</li>
            <li>Dissatisfaction</li>
            <li>Personal circumstances</li>
            <li>Misinterpretation before purchase</li>
          </ul>
          <p>Users acknowledge that Quillance incurs upfront costs including platform access, content allocation, instructor resources, and operational expenses upon enrollment.</p>
        </div>
      </section>

      <section id="servicedelivery" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. SERVICE DELIVERY DEFINITION (LEGALLY REINFORCED)</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>For the purpose of this Policy, a service shall be deemed fully, validly, and completely delivered upon:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Granting access to a functional and usable LMS platform, OR</li>
            <li>Providing access to course materials (videos, PDFs, assignments), OR</li>
            <li>Enabling participation in live or recorded sessions</li>
          </ul>
          <p>It is explicitly clarified that:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Completion of the course is NOT required</li>
            <li>User satisfaction is NOT a condition</li>
            <li>Outcomes (jobs, internships, earnings) are NOT guaranteed</li>
          </ul>
          <p>Once access is granted and the platform/content is functional and usable, service obligation is fulfilled, and refund eligibility is void.</p>
          <p>System logs, LMS access data, and usage records shall constitute valid proof of service delivery in any dispute.</p>
        </div>
      </section>

      <section id="changeofcourse" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. CHANGE OF COURSE POLICY (STRICT CONTROL)</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Course changes are highly restricted and allowed only under ALL of the following conditions:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Request is made within 48 hours of purchase, AND</li>
            <li>User has accessed less than 10% of the course content, AND</li>
            <li>No content has been downloaded, recorded, or misused, AND</li>
            <li>Requested course has available seats</li>
          </ul>
          <p>Additional conditions:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Price difference must be paid (if applicable)</li>
            <li>No refund for switching to lower-priced course</li>
            <li>Allowed only once per user</li>
            <li>Subject to Quillance’s sole approval</li>
          </ul>
          <p>Quillance reserves the right to deny requests based on platform analytics, usage patterns, or suspected misuse.</p>
        </div>
      </section>

      <section id="rescheduling" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. RESCHEDULING POLICY (DEFINED & LIMITED)</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Rescheduling is permitted only under strict and verifiable conditions.</p>
          <p>Users may request rescheduling ONLY if:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Request is made before batch commencement, AND</li>
            <li>Reason qualifies as a valid documented circumstance, AND</li>
            <li>Seats are available in the requested batch</li>
          </ul>
          <p>Valid reasons are limited to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Medical emergencies (with proof)</li>
            <li>Unavoidable personal or professional conflicts (subject to verification)</li>
          </ul>
          <p>Important conditions:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Rescheduling allowed only once per enrollment</li>
            <li>Not allowed after course start</li>
            <li>Access duration remains unchanged unless explicitly extended</li>
            <li>Missed sessions without prior approval are NOT eligible</li>
          </ul>
          <p>Quillance reserves the right to reschedule batches due to operational requirements.</p>
        </div>
      </section>

      <section id="cancellation" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">6. CANCELLATION POLICY</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Once a User completes payment:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Enrollment is final</li>
            <li>Cancellation is NOT permitted</li>
            <li>Seats reserved cannot be reassigned</li>
          </ul>
          <p>Users are advised to carefully evaluate course details before purchase.</p>
        </div>
      </section>

      <section id="nonrefundable" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">7. NON-REFUNDABLE CONDITIONS (EXPANDED)</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>No refunds shall be granted under any circumstances including but not limited to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Partial or full usage of services</li>
            <li>Access to a material portion of content (as per system logs)</li>
            <li>Change of mind or personal reasons</li>
            <li>Dissatisfaction with course or delivery</li>
            <li>Failure to achieve expected results</li>
            <li>Lack of time or commitment</li>
            <li>Technical issues not caused solely by Quillance</li>
            <li>Misunderstanding or assumptions prior to purchase</li>
          </ul>
          <p>Requests deemed abusive, fraudulent, or made in bad faith shall be rejected outright.</p>
        </div>
      </section>

      <section id="legalexception" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">8. LEGAL EXCEPTION CLAUSE</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Notwithstanding the above, refunds may be considered ONLY:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Where required under applicable law, OR</li>
            <li>Where there is complete and proven non-delivery of service solely attributable to Quillance</li>
          </ul>
          <p>In such cases:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Resolution may include service extension instead of monetary refund, at Quillance’s discretion</li>
            <li>Partial dissatisfaction shall NOT qualify for refund</li>
          </ul>
          <p>All decisions shall be final and binding.</p>
        </div>
      </section>

      <section id="duplicatepayment" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">9. DUPLICATE PAYMENT REFUNDS</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>In case of duplicate payments:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>User must notify Quillance within reasonable time</li>
            <li>Verification will be conducted</li>
            <li>Refund processed within 30 working days</li>
          </ul>
          <p>Refund method will be original payment mode or alternative as deemed appropriate.</p>
        </div>
      </section>

      <section id="chargeback" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">10. CHARGEBACK & DISPUTE PROTECTION (CRITICAL CLAUSE)</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Users expressly agree:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Not to initiate chargebacks without contacting Quillance first</li>
            <li>To allow reasonable time for resolution</li>
          </ul>
          <p>Unauthorized chargebacks shall result in:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Immediate account suspension</li>
            <li>Permanent access restriction</li>
            <li>Legal recovery proceedings</li>
            <li>Blacklisting from future services</li>
          </ul>
          <p>Quillance reserves the right to submit LMS logs, access records, and communication history as valid proof in dispute resolution.</p>
        </div>
      </section>

      <section id="refundprocess" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">11. REFUND PROCESS (IF LEGALLY APPLICABLE)</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Where a refund is approved:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>User must submit formal request with proof</li>
            <li>Internal verification will be conducted</li>
            <li>Refunds processed within 30 working days</li>
          </ul>
          <p>Deductions may include: Payment gateway charges, administrative fees, taxes (if applicable).</p>
        </div>
      </section>

      <section id="platformfailure" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">12. PLATFORM FAILURE CLAUSE</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>In case of service disruption or failure solely attributable to Quillance:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Company may provide access extension, replacement services, or alternative solutions</li>
            <li>Monetary refund is NOT mandatory unless legally required</li>
          </ul>
        </div>
      </section>

      <section id="misuse" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">13. MISUSE & FRAUD PROTECTION</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance reserves the right to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Reject requests deemed fraudulent or abusive</li>
            <li>Suspend accounts engaging in policy misuse</li>
            <li>Take legal action where necessary</li>
          </ul>
          <p>Repeated or suspicious requests may result in permanent restriction.</p>
        </div>
      </section>

      <section id="legalcost" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">14. LEGAL COST & LIABILITY PROTECTION</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>User agrees that in case of disputes arising from violation of this Policy:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Quillance shall be entitled to recover legal costs, damages, and associated expenses</li>
            <li>User shall be responsible for such costs where applicable</li>
          </ul>
        </div>
      </section>

      <section id="modifications" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">15. POLICY MODIFICATIONS</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance reserves the right to update or modify this Policy at any time.</p>
          <p>Changes become effective immediately upon posting. Continued use constitutes acceptance.</p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">16. CONTACT INFORMATION</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>For queries:</p>
          <p><strong>Email:</strong> support@quillance.com<br />
          <strong>Address:</strong> [Insert Company Address]</p>
        </div>
      </section>

    </LegalPageLayout>
  );
}
