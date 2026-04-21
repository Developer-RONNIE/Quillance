import React from 'react';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';

export default function TermsAndConditionsPage() {
  const sections = [
    { id: "nature", title: "1. Nature and Applicability of Terms" },
    { id: "eligibility", title: "2. Eligibility" },
    { id: "account", title: "3. Account Registration & Security" },
    { id: "services", title: "4. Services & Delivery Definition" },
    { id: "pricing", title: "5. Pricing, Payments & Billing" },
    { id: "refund", title: "6. Strict No Refund & Chargeback Policy" },
    { id: "access", title: "7. Access Duration & Limitations" },
    { id: "ip", title: "8. Intellectual Property Rights" },
    { id: "conduct", title: "9. User Conduct & Anti-Abuse Policy" },
    { id: "performance", title: "10. Performance & Outcome Disclaimer" },
    { id: "technical", title: "11. Technical Limitation Disclaimer" },
    { id: "content", title: "12. Content Rights" },
    { id: "data", title: "13. Data Protection & Privacy" },
    { id: "warranty", title: "14. Disclaimer of Warranties" },
    { id: "liability", title: "15. Limitation of Liability" },
    { id: "indemnification", title: "16. Indemnification" },
    { id: "thirdparty", title: "17. Third-Party Links" },
    { id: "communication", title: "18. Communication Consent" },
    { id: "suspension", title: "19. Suspension & Termination" },
    { id: "modifications", title: "20. Modifications & Interruptions" },
    { id: "governing", title: "21. Governing Law & Jurisdiction" },
    { id: "force", title: "22. Force Majeure" },
    { id: "limitation", title: "23. Limitation Period" },
    { id: "noclassaction", title: "24. No Class Action" },
    { id: "severability", title: "25. Severability" },
    { id: "entire", title: "26. Entire Agreement" },
  ];

  return (
    <LegalPageLayout title="Terms of Service & User Agreement" lastUpdated="15 April 2026" sections={sections}>
      
      <section id="nature" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. NATURE AND APPLICABILITY OF TERMS</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>These Terms of Service (“Terms”), together with the Privacy Policy available at www.quillance.com (“Privacy Policy”), constitute a legally binding and enforceable agreement (“Agreement”) between Quillance (hereinafter referred to as the “Company”, “We”, “Us”, or “Our”) and you (hereinafter referred to as the “User”, “You”, or “Your”).</p>
          <p>This Agreement governs your access to and use of all services offered by Quillance, including but not limited to the Website, Learning Management System (LMS), digital training programs, certification courses, mentorship services, and any associated products, tools, or features made available from time to time.</p>
          <p>By accessing, browsing, registering on, or purchasing any service from the Website, you expressly acknowledge and agree that you have carefully read, understood, and agreed to be bound by these Terms and the Privacy Policy. You further represent that you are legally competent to enter into a binding agreement under applicable laws, including the Indian Contract Act, 1872, and that you consent to the use of electronic records, communications, and digital agreements as valid and enforceable.</p>
          <p>If you do not agree with any part of these Terms, you must immediately discontinue use of the Website and Services. Continued access or use shall be deemed as your unconditional acceptance of the Agreement.</p>
          <p>Quillance reserves the absolute and unilateral right to modify, amend, or update these Terms at any time without prior notice. Such modifications shall become effective immediately upon publication on the Website. It is your responsibility to periodically review these Terms. Continued use of the Website after such updates shall constitute your binding acceptance of the revised Terms.</p>
        </div>
      </section>

      <section id="eligibility" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. ELIGIBILITY</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>To access and use the services offered by Quillance, you must meet the eligibility criteria specified herein. You must be at least eighteen (18) years of age to independently register on the platform and purchase any services. Individuals below the age of eighteen (“Minors”) may only access or use the Website under the direct supervision and explicit consent of a parent or legal guardian who agrees to be bound by these Terms on their behalf.</p>
          <p>By using the Website, you represent and warrant that all information provided by you is true, accurate, complete, and not misleading. You further confirm that you possess the legal capacity to enter into this Agreement and to comply with its obligations.</p>
          <p>Quillance reserves the right to verify your eligibility and identity at any time. Any misrepresentation, falsification of identity, or submission of inaccurate or misleading information may result in immediate suspension or termination of your account, denial of access to services, and potential legal action where applicable.</p>
        </div>
      </section>

      <section id="account" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. ACCOUNT REGISTRATION & SECURITY</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Certain features and services offered by Quillance require the creation of a registered user account. By registering an account, you agree to provide complete, accurate, and up-to-date information as required during the registration process and to maintain and promptly update such information as necessary.</p>
          <p>You are solely responsible for maintaining the confidentiality and security of your account credentials, including your username and password. You agree to accept full responsibility for all activities that occur under your account, whether authorized by you or not.</p>
          <p>You expressly agree that you shall not share your login credentials with any third party, nor shall you sell, transfer, sublicense, or otherwise grant access to your account. You further agree not to use false identities, impersonate any person or entity, or attempt to gain unauthorized access to any part of the platform.</p>
          <p>The use of automated systems such as bots, scripts, crawlers, or any other unauthorized tools to access or interact with the platform is strictly prohibited. Additionally, you shall not introduce any viruses, malware, or harmful code that may disrupt or damage the platform. Any breach of the above provisions shall result in immediate suspension or termination of your account, forfeiture of all paid services without refund, and legal action where deemed necessary by Quillance.</p>
        </div>
      </section>

      <section id="services" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. SERVICES & DELIVERY DEFINITION</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance provides a range of digital services designed to support skill development and career growth, including online training programs, certification courses, LMS-based learning modules, and mentorship or career guidance services where applicable.</p>
          <p>For the purposes of this Agreement, a service shall be deemed to have been fully, validly, and completely delivered upon the occurrence of any one or more of the following events: (a) granting access to the LMS platform, (b) providing access to course materials, whether downloadable or viewable, or (c) enabling participation in live or recorded sessions.</p>
          <p>It is expressly clarified that completion of the course by the User is not required for service delivery, and user satisfaction or achievement of specific outcomes is not a condition for fulfillment. Once access to the service has been provided, the Company’s obligation shall be considered fulfilled in full.</p>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. PRICING, PAYMENTS & BILLING</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>All services offered by Quillance are subject to the pricing displayed on the Website at the time of purchase. By making a payment, you agree to pay all applicable fees in full and in advance and to provide valid and authorized payment details.</p>
          <p>You represent and warrant that you are legally authorized to use the selected payment method and that all payment information provided is accurate and complete. Quillance reserves the right to modify or update pricing at any time without prior notice and to refuse or cancel any transaction at its sole discretion.</p>
          <p>All payments are processed through third-party payment gateways. By proceeding with a transaction, you authorize Quillance to act on your behalf in facilitating such payments.</p>
        </div>
      </section>

      <section id="refund" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">6. STRICT NO REFUND & CHARGEBACK POLICY</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>All payments made to Quillance are final, non-refundable, and non-transferable. This policy applies irrespective of non-usage of services, dissatisfaction with the course or platform, change of personal circumstances, scheduling conflicts, or technical issues not directly attributable to Quillance.</p>
          <p>Notwithstanding the above, refunds may only be considered where required under applicable law or in cases of proven and complete non-delivery of services solely attributable to Quillance.</p>
          <p>You agree not to initiate any chargeback, dispute, or payment reversal without first contacting Quillance. Unauthorized chargebacks may result in immediate account suspension, legal recovery proceedings, and blacklisting from future services. In cases of verified duplicate transactions, the excess amount shall be refunded within thirty (30) working days.</p>
        </div>
      </section>

      <section id="access" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">7. ACCESS DURATION & LIMITATIONS</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Access to services is granted strictly for the duration specified at the time of purchase. You acknowledge that such access rights are limited, revocable, and non-transferable. No service shall be considered to provide lifetime access unless explicitly stated.</p>
          <p>Quillance reserves the right to modify access duration, revoke access upon expiry, or suspend access in cases of policy violations.</p>
        </div>
      </section>

      <section id="ip" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">8. INTELLECTUAL PROPERTY RIGHTS</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>All intellectual property rights associated with the Website and Services, including but not limited to courses, videos, training materials, PDFs, graphics, user interface elements, software code, design architecture, trademarks, logos, and branding, are the exclusive property of Quillance or its licensors and are protected under applicable intellectual property laws in India and internationally.</p>
          <p>By accessing the platform, you are granted a limited, non-exclusive, non-transferable, and revocable license to use the content solely for personal, non-commercial educational purposes. This license does not grant you any ownership rights in the content or materials provided.</p>
          <p>You expressly agree that you shall not copy, reproduce, distribute, modify, publicly display, perform, transmit, publish, or create derivative works from any content available on the platform without prior written authorization from Quillance. Additionally, recording, screen capturing, downloading, or sharing course materials or sessions for any purpose outside permitted use is strictly prohibited.</p>
          <p>Any unauthorized use, reproduction, or distribution of content shall constitute a violation of intellectual property rights and may result in immediate termination of access, forfeiture of services without refund, and initiation of legal proceedings, including claims for damages and injunctive relief.</p>
        </div>
      </section>

      <section id="conduct" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">9. USER CONDUCT & ANTI-ABUSE POLICY</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Users are expected to maintain a high standard of conduct while accessing or using the Website and Services. You agree to use the platform only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use and enjoyment of the platform.</p>
          <p>You shall not engage in any behavior that is abusive, harmful, threatening, defamatory, or otherwise objectionable. This includes harassment of mentors, staff members, or other users, as well as the posting or sharing of content that is illegal, offensive, or in violation of applicable laws.</p>
          <p>You are strictly prohibited from attempting to gain unauthorized access to any part of the platform, interfering with system operations, introducing malicious code, or engaging in activities that disrupt or degrade the performance of the Website or Services.</p>
          <p>Quillance enforces a strict zero-tolerance policy toward violations of user conduct. Any breach of this section may result in immediate suspension or termination of your account without refund, removal of content, and potential legal action depending on the severity of the violation.</p>
        </div>
      </section>

      <section id="performance" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">10. PERFORMANCE & OUTCOME DISCLAIMER</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance provides educational and skill development services designed to support users in enhancing their knowledge and capabilities. However, the Company does not guarantee any specific outcomes or results from the use of its services.</p>
          <p>You acknowledge and agree that Quillance makes no representations or warranties regarding job placement, internships, career advancement, income generation, or any other professional outcomes. Success depends on multiple factors beyond the Company’s control, including individual effort, prior experience, learning ability, and market conditions.</p>
          <p>Accordingly, you agree that no claims, disputes, or demands shall be made against Quillance based on perceived or actual outcomes, and that your use of the services is undertaken at your own discretion and risk.</p>
        </div>
      </section>

      <section id="technical" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">11. TECHNICAL LIMITATION DISCLAIMER</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance strives to provide reliable and uninterrupted access to its platform; however, the Company does not guarantee that the Website or Services will always be available, error-free, or free from technical issues.</p>
          <p>You acknowledge that access to the platform may be affected by factors beyond Quillance’s control, including internet connectivity issues, device compatibility limitations, third-party software failures, and scheduled or unscheduled maintenance activities.</p>
          <p>Quillance shall not be held liable for any loss, inconvenience, or disruption caused by such technical limitations. Users are responsible for ensuring that they have the necessary technical infrastructure to access the services.</p>
        </div>
      </section>

      <section id="content" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">12. CONTENT RIGHTS</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>By submitting, posting, or transmitting any content on or through the Website, you grant Quillance a perpetual, irrevocable, worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content in any form or media.</p>
          <p>You represent and warrant that you have all necessary rights and permissions to submit such content and that it does not infringe upon the rights of any third party or violate any applicable laws.</p>
          <p>Quillance reserves the right, but not the obligation, to monitor, review, or remove any content that it deems inappropriate, unlawful, or in violation of these Terms.</p>
        </div>
      </section>

      <section id="data" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">13. DATA PROTECTION & PRIVACY</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance is committed to protecting the privacy and personal information of its users. All data collected from users is processed in accordance with applicable data protection laws in India and the Company’s Privacy Policy.</p>
          <p>By using the Website, you consent to the collection, storage, processing, and use of your personal information for purposes including service delivery, communication, analytics, and improvement of the platform.</p>
          <p>You acknowledge that while Quillance implements reasonable security measures to protect your data, no method of transmission over the internet is completely secure, and absolute security cannot be guaranteed.</p>
        </div>
      </section>

      <section id="warranty" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">14. DISCLAIMER OF WARRANTIES</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>All services and content provided by Quillance are offered on an “as is” and “as available” basis, without any warranties of any kind, whether express or implied.</p>
          <p>To the fullest extent permitted by law, Quillance disclaims all warranties, including but not limited to warranties of accuracy, completeness, reliability, merchantability, fitness for a particular purpose, and non-infringement.</p>
          <p>You acknowledge that your use of the platform is at your sole risk, and Quillance does not guarantee uninterrupted or error-free operation.</p>
        </div>
      </section>

      <section id="liability" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">15. LIMITATION OF LIABILITY</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>To the maximum extent permitted by law, Quillance shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising out of or related to your use of the Website or Services.</p>
          <p>This includes, but is not limited to, loss of data, loss of profits, business interruption, or loss of opportunities.</p>
          <p>In all cases, the total liability of Quillance shall be limited to the amount actually paid by you for the specific service in question.</p>
        </div>
      </section>

      <section id="indemnification" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">16. INDEMNIFICATION</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>You agree to defend, indemnify, and hold harmless Quillance and its directors, employees, affiliates, agents, and partners from and against any and all claims, liabilities, damages, losses, and expenses arising from your use of the Website or Services.</p>
          <p>This includes claims arising from your violation of these Terms, infringement of third-party rights, or submission of unlawful or unauthorized content. This obligation shall survive termination of your account and continues even after you cease using the platform.</p>
        </div>
      </section>

      <section id="thirdparty" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">17. THIRD-PARTY LINKS</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>The Website may contain links to third-party websites or services that are not owned or controlled by Quillance.</p>
          <p>You acknowledge that such links are provided for convenience only and that Quillance has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites.</p>
          <p>Accessing such links is entirely at your own risk.</p>
        </div>
      </section>

      <section id="communication" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">18. COMMUNICATION CONSENT</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>By providing your contact information, you consent to receive communications from Quillance via email, phone calls, SMS, or messaging platforms such as WhatsApp.</p>
          <p>These communications may include service-related updates, account notifications, and promotional content.</p>
          <p>You may opt out of marketing communications where applicable; however, essential service-related communications cannot be disabled.</p>
        </div>
      </section>

      <section id="suspension" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">19. SUSPENSION & TERMINATION</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance reserves the right to suspend or terminate your account and access to services at its sole discretion, without prior notice, if you violate these Terms or engage in unlawful or harmful activities.</p>
          <p>Upon termination, your access to the platform shall cease immediately, and no refunds shall be issued. Quillance reserves the right to pursue legal remedies in cases of serious violations.</p>
        </div>
      </section>

      <section id="modifications" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">20. MODIFICATIONS & INTERRUPTIONS</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance reserves the right to modify, update, suspend, or discontinue any part of the Website or Services at any time without prior notice.</p>
          <p>The Company shall not be liable for any interruption, delay, or loss caused by such modifications or discontinuation.</p>
        </div>
      </section>

      <section id="governing" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">21. GOVERNING LAW & JURISDICTION</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>This Agreement shall be governed by and interpreted in accordance with the laws of India.</p>
          <p>All disputes arising under or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka.</p>
        </div>
      </section>

      <section id="force" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">22. FORCE MAJEURE</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance shall not be liable for any failure or delay in performance due to events beyond its reasonable control, including natural disasters, government actions, war, strikes, or technical failures.</p>
          <p>Such events shall not be considered a breach of this Agreement.</p>
        </div>
      </section>

      <section id="limitation" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">23. LIMITATION PERIOD</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Any claim or cause of action arising out of or related to the use of the Website or Services must be filed within one (1) year from the date the claim arises.</p>
          <p>Failure to do so shall result in the claim being permanently barred.</p>
        </div>
      </section>

      <section id="noclassaction" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">24. NO CLASS ACTION</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>You agree that all disputes shall be resolved on an individual basis and that you waive any right to participate in class actions, collective claims, or representative proceedings.</p>
        </div>
      </section>

      <section id="severability" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">25. SEVERABILITY</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>If any provision of this Agreement is found to be invalid or unenforceable, such provision shall be modified to the extent necessary to make it enforceable, and the remaining provisions shall continue in full force.</p>
        </div>
      </section>

      <section id="entire" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">26. ENTIRE AGREEMENT</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>This Agreement, along with the Privacy Policy and any other policies referenced herein, constitutes the entire agreement between you and Quillance regarding the use of the Website and Services.</p>
          <p>It supersedes all prior agreements, communications, and understandings, whether written or oral.</p>
        </div>
      </section>

    </LegalPageLayout>
  );
}
