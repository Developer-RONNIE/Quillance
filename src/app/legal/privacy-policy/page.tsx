import React from 'react';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';

export default function PrivacyPolicyPage() {
  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "scope", title: "2. Scope of Policy" },
    { id: "information", title: "3. Information We Collect" },
    { id: "methods", title: "4. Methods of Data Collection" },
    { id: "purpose", title: "5. Purpose of Data Processing" },
    { id: "legalbasis", title: "6. Legal Basis for Processing" },
    { id: "sharing", title: "7. Data Sharing & Disclosure" },
    { id: "cookies", title: "8. Cookies & Tracking Technologies" },
    { id: "retention", title: "9. Data Retention Policy" },
    { id: "security", title: "10. Data Security Measures" },
    { id: "userrights", title: "11. User Rights" },
    { id: "children", title: "12. Children’s Privacy" },
    { id: "thirdparty", title: "13. Third-Party Links" },
    { id: "international", title: "14. International Data Transfers" },
    { id: "marketing", title: "15. Marketing & Communications" },
    { id: "contact", title: "16. Contact & Grievance Redressal" },
    { id: "changes", title: "17. Changes to this Privacy Policy" },
    { id: "consent", title: "Final Consent" },
  ];

  return (
    <LegalPageLayout title="Privacy Policy" lastUpdated="15 April 2026" sections={sections}>
      
      <section id="introduction" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. INTRODUCTION</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>This Privacy Policy (“Policy”) describes in detail how Quillance (“Company”, “We”, “Us”, or “Our”) collects, uses, stores, processes, discloses, and protects your personal information when you access, browse, register, or use our website www.quillance.com, Learning Management System (LMS), and all related services, features, and offerings (collectively referred to as the “Platform”).</p>
          <p>This Policy is intended to ensure transparency in how your data is handled and to comply with applicable laws and regulations, including data protection laws in India. By accessing or using the Platform, you acknowledge that you have read, understood, and agreed to the practices described in this Policy.</p>
          <p>If you do not agree with this Policy, you must immediately discontinue use of the Platform. Continued use of the Platform shall be deemed as your explicit consent to the collection, processing, and use of your personal data in accordance with this Policy.</p>
          <p>This Policy forms an integral and binding part of the Terms of Service and must be read in conjunction with them.</p>
        </div>
      </section>

      <section id="scope" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. SCOPE OF POLICY</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>This Privacy Policy applies to all Users of the Platform, including but not limited to visitors, registered users, customers, and any individuals who interact with Quillance through digital or offline channels.</p>
          <p>It governs all data collected through:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>The Website and LMS platform</li>
            <li>Mobile or web applications (if applicable)</li>
            <li>Customer support interactions</li>
            <li>Marketing campaigns and communications</li>
            <li>Third-party integrations used by Quillance</li>
          </ul>
          <p>This Policy does not apply to third-party websites, services, or platforms that may be linked to or accessible from the Platform.</p>
        </div>
      </section>

      <section id="information" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. INFORMATION WE COLLECT</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance collects various types of information to provide and improve its services. The categories of data collected include:</p>
          
          <h3 className="text-lg font-bold text-slate-800 mt-4">a) Personal Identification Information</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Date of birth</li>
            <li>Gender (optional)</li>
            <li>Residential or billing address</li>
            <li>Government-issued identification (where required for verification or certification)</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-800 mt-4">b) Account & Profile Information</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Username and password</li>
            <li>Enrollment details</li>
            <li>Course progress and performance</li>
            <li>Preferences and interests</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-800 mt-4">c) Payment & Transaction Information</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Billing details</li>
            <li>Transaction history</li>
            <li>Payment method details (processed securely via third-party gateways)</li>
          </ul>
          <p className="text-sm italic">Note: Quillance does not store sensitive financial information such as full credit/debit card numbers.</p>

          <h3 className="text-lg font-bold text-slate-800 mt-4">d) Technical & Device Information</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>IP address</li>
            <li>Device type and identifiers</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Network information</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-800 mt-4">e) Usage & Behavioral Data</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Pages visited</li>
            <li>Time spent on the platform</li>
            <li>Click patterns and navigation flow</li>
            <li>Session logs</li>
          </ul>

          <h3 className="text-lg font-bold text-slate-800 mt-4">f) Communication & Support Data</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Emails, chats, and call records</li>
            <li>Support tickets and queries</li>
            <li>Feedback, reviews, and survey responses</li>
          </ul>
        </div>
      </section>

      <section id="methods" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. METHODS OF DATA COLLECTION</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>We collect your information through multiple methods, including:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Direct data provided by you during registration, purchase, or communication</li>
            <li>Automated technologies such as cookies, tracking pixels, and analytics tools</li>
            <li>Third-party services such as payment gateways, CRM systems, and marketing platforms</li>
          </ul>
        </div>
      </section>

      <section id="purpose" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. PURPOSE OF DATA PROCESSING</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Your data is collected and processed for legitimate business purposes, including but not limited to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Providing, managing, and delivering services</li>
            <li>Creating and maintaining user accounts</li>
            <li>Processing payments and transactions</li>
            <li>Improving platform functionality and user experience</li>
            <li>Conducting analytics and research</li>
            <li>Communicating updates, notifications, and support messages</li>
            <li>Sending marketing and promotional communications (where permitted)</li>
            <li>Detecting and preventing fraud, abuse, or illegal activities</li>
            <li>Enforcing legal rights and complying with regulatory requirements</li>
          </ul>
        </div>
      </section>

      <section id="legalbasis" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">6. LEGAL BASIS FOR PROCESSING</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance processes your personal data based on one or more of the following legal grounds:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Your explicit or implied consent</li>
            <li>Performance of a contractual obligation</li>
            <li>Compliance with legal and regulatory requirements</li>
            <li>Legitimate business interests, provided such interests do not override your fundamental rights</li>
          </ul>
        </div>
      </section>

      <section id="sharing" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">7. DATA SHARING & DISCLOSURE</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance does not sell, rent, or trade your personal information to third parties.</p>
          <p>However, we may share your data in the following circumstances:</p>

          <h3 className="text-lg font-bold text-slate-800 mt-4">a) Service Providers</h3>
          <p>With trusted third-party vendors such as: payment processors, cloud storage providers, analytics and marketing platforms. These entities are contractually obligated to protect your data.</p>

          <h3 className="text-lg font-bold text-slate-800 mt-4">b) Legal & Regulatory Authorities</h3>
          <p>When required by law, regulation, court order, or government request, or to: enforce our Terms, protect rights and safety, prevent fraud or illegal activities.</p>

          <h3 className="text-lg font-bold text-slate-800 mt-4">c) Business Transfers</h3>
          <p>In the event of a merger, acquisition, restructuring, or sale of assets, your data may be transferred as part of such transaction.</p>
        </div>
      </section>

      <section id="cookies" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">8. COOKIES & TRACKING TECHNOLOGIES</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>We use cookies and similar technologies to enhance your experience and improve our services.</p>
          <p>Cookies help us: recognize repeat users, analyze usage patterns, personalize content and recommendations.</p>
          <p>You can control cookie preferences through your browser settings. Disabling cookies may impact certain functionalities of the Platform.</p>
        </div>
      </section>

      <section id="retention" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">9. DATA RETENTION POLICY</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>We retain your personal data only for as long as necessary to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Fulfill the purposes outlined in this Policy</li>
            <li>Provide services and maintain records</li>
            <li>Comply with legal obligations</li>
            <li>Resolve disputes and enforce agreements</li>
          </ul>
          <p>After the retention period, your data may be securely deleted, anonymized, or archived.</p>
        </div>
      </section>

      <section id="security" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">10. DATA SECURITY MEASURES</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance implements appropriate technical and organizational measures to safeguard your personal data, including:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Data encryption</li>
            <li>Secure servers and firewalls</li>
            <li>Access control mechanisms</li>
            <li>Regular security monitoring</li>
          </ul>
          <p>Despite these measures, you acknowledge that no system is completely secure, and we cannot guarantee absolute protection against unauthorized access, breaches, or cyber threats.</p>
        </div>
      </section>

      <section id="userrights" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">11. USER RIGHTS</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Subject to applicable laws, you may have the following rights:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Right to access your personal data</li>
            <li>Right to correct or update inaccurate data</li>
            <li>Right to request deletion of your data</li>
            <li>Right to withdraw consent (where applicable)</li>
            <li>Right to restrict or object to certain processing activities</li>
            <li>Right to opt out of marketing communications</li>
          </ul>
          <p>Requests can be made through the contact details provided below.</p>
        </div>
      </section>

      <section id="children" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">12. CHILDREN’S PRIVACY</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>The Platform is not intended for use by individuals under the age of 18 without parental or guardian consent.</p>
          <p>We do not knowingly collect personal data from minors without appropriate supervision. If such data is identified, it may be removed promptly.</p>
        </div>
      </section>

      <section id="thirdparty" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">13. THIRD-PARTY LINKS</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>The Platform may contain links to third-party websites or services.</p>
          <p>Quillance is not responsible for: their content, privacy practices, data handling policies.</p>
          <p>Users are encouraged to review third-party privacy policies before engaging with such services.</p>
        </div>
      </section>

      <section id="international" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">14. INTERNATIONAL DATA TRANSFERS</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Your personal data is primarily stored and processed in India.</p>
          <p>However, in certain cases, data may be transferred to and processed in other jurisdictions where our service providers operate. By using the Platform, you consent to such transfers.</p>
        </div>
      </section>

      <section id="marketing" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">15. MARKETING & COMMUNICATIONS</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>By providing your contact details, you consent to receive communications from Quillance, including: Emails, Phone calls, SMS, WhatsApp messages.</p>
          <p>These communications may include service updates, notifications, and promotional content. You may opt out of promotional communications at any time. However, essential service-related communications will continue.</p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">16. CONTACT & GRIEVANCE REDRESSAL</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>For any privacy-related concerns, complaints, or requests, you may contact:</p>
          <p><strong>Email:</strong> support@quillance.com<br />
          <strong>Address:</strong> [Insert Company Address]</p>
          <p>We will make reasonable efforts to address your concerns within a reasonable timeframe.</p>
        </div>
      </section>

      <section id="changes" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">17. CHANGES TO THIS PRIVACY POLICY</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance reserves the right to modify or update this Privacy Policy at any time.</p>
          <p>Any changes will be effective immediately upon posting on the Website. Continued use of the Platform after such updates shall constitute your acceptance of the revised Policy.</p>
        </div>
      </section>

      <section id="consent" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">FINAL CONSENT</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>By accessing or using the Platform, you:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Acknowledge that you have read this Privacy Policy</li>
            <li>Consent to the collection and processing of your data</li>
            <li>Agree to the Terms of Service and policies</li>
          </ul>
        </div>
      </section>

    </LegalPageLayout>
  );
}
