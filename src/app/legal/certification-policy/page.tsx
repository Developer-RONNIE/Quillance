import React from 'react';
import { LegalPageLayout } from '@/components/legal/LegalPageLayout';

export default function CertificationPolicyPage() {
  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "authenticity", title: "2. Certification Authenticity & Value" },
    { id: "eligibility", title: "3. Eligibility for Certification" },
    { id: "assessment", title: "4. Assessment & Evaluation Standards" },
    { id: "issuance", title: "5. Certificate Issuance Process" },
    { id: "accuracy", title: "6. Data Accuracy & User Responsibility" },
    { id: "integrity", title: "7. Certification Integrity & Non-Transferability" },
    { id: "misconduct", title: "8. Academic Integrity & Misconduct" },
    { id: "withhold", title: "9. Right to Withhold or Deny Certification" },
    { id: "revocation", title: "10. Certificate Revocation Policy" },
    { id: "verification", title: "11. Certificate Verification & Authentication" },
    { id: "noguarantee", title: "12. No Guarantee of Outcomes" },
    { id: "thirdparty", title: "13. Third-Party or Partner Certifications" },
    { id: "technical", title: "14. Technical Limitations" },
    { id: "dispute", title: "15. Dispute Resolution" },
    { id: "modifications", title: "16. Modifications to Policy" },
    { id: "liability", title: "17. Limitation of Liability" },
  ];

  return (
    <LegalPageLayout title="Certification Policy" lastUpdated="15 April 2026" sections={sections}>
      
      <section id="introduction" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. INTRODUCTION</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>This Certification Policy (“Policy”) establishes the standards, processes, and conditions governing the issuance of certifications by Quillance (“Company”, “We”, “Us”, or “Our”).</p>
          <p>Quillance is committed to delivering industry-aligned, skill-based training programs designed to bridge the gap between academic learning and real-world professional requirements.</p>
          <p>This Policy applies to all users (“Learners”, “Participants”, or “You”) enrolled in any training program, certification course, or learning module offered through Quillance’s platform.</p>
          <p>By enrolling in any program, you acknowledge and agree to comply with this Policy.</p>
        </div>
      </section>

      <section id="authenticity" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. CERTIFICATION AUTHENTICITY & VALUE</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance certifications are designed to reflect:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Verified participation in structured training programs</li>
            <li>Demonstrated understanding of course concepts</li>
            <li>Completion of practical assignments and assessments</li>
          </ul>
          <p>Each certificate issued by Quillance represents:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>A validated record of skill-based learning</li>
            <li>A performance-backed achievement</li>
            <li>A professionally aligned training outcome</li>
          </ul>
          <p>While Quillance certifications are industry-relevant and skill-focused, they:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Do NOT constitute a government-issued degree or university diploma</li>
            <li>Are NOT guaranteed to be recognized by all employers or institutions</li>
          </ul>
          <p>However, they are structured to enhance employability, credibility, and professional readiness.</p>
        </div>
      </section>

      <section id="eligibility" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. ELIGIBILITY FOR CERTIFICATION</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Certification is awarded only to participants who meet strict completion and performance standards, including:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Completion of all mandatory learning modules</li>
            <li>Submission of required assignments, projects, or case studies</li>
            <li>Participation in required sessions (live or recorded, where applicable)</li>
            <li>Achievement of minimum performance benchmarks (if defined for the course)</li>
            <li>Compliance with all platform policies and code of conduct</li>
          </ul>
          <p>Quillance maintains rigorous evaluation criteria to ensure the credibility and integrity of its certifications.</p>
        </div>
      </section>

      <section id="assessment" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. ASSESSMENT & EVALUATION STANDARDS</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Certification may involve one or more of the following evaluation methods:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Practical assignments</li>
            <li>Capstone projects</li>
            <li>Quizzes and assessments</li>
            <li>Case studies</li>
            <li>Instructor evaluations</li>
          </ul>
          <p>All assessments are designed to measure:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Conceptual understanding</li>
            <li>Practical application</li>
            <li>Problem-solving ability</li>
          </ul>
          <p>Evaluation results, instructor feedback, and LMS performance data shall be considered final in determining certification eligibility.</p>
        </div>
      </section>

      <section id="issuance" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. CERTIFICATE ISSUANCE PROCESS</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Upon successful completion of all requirements:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Certificates will be issued in digitally verifiable format</li>
            <li>Delivery will be through official email, OR Learner dashboard (LMS)</li>
          </ul>
          <p>Timeline: Certificates are typically issued within 7–21 working days after verification.</p>
          <p>Each certificate may include:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Unique Certificate ID</li>
            <li>Verification link or QR code</li>
            <li>Candidate name and course details</li>
            <li>Completion status</li>
          </ul>
          <p>Quillance reserves the right to conduct additional verification before issuance.</p>
        </div>
      </section>

      <section id="accuracy" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">6. DATA ACCURACY & USER RESPONSIBILITY</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Participants are responsible for:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Providing accurate personal details during registration</li>
            <li>Ensuring correct spelling of name and information</li>
          </ul>
          <p>Certificates will be generated based on submitted details.</p>
          <p>Important: Requests for corrections must be made before certificate issuance. Post-issuance corrections may be subject to approval, AND/OR administrative charges.</p>
        </div>
      </section>

      <section id="integrity" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">7. CERTIFICATION INTEGRITY & NON-TRANSFERABILITY</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance certifications are:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Issued exclusively to the enrolled participant</li>
            <li>Non-transferable and non-assignable</li>
            <li>Intended solely for individual professional use</li>
          </ul>
          <p>Any attempt to share credentials, transfer certification, or claim certification on behalf of another individual will be treated as a violation of this Policy.</p>
        </div>
      </section>

      <section id="misconduct" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">8. ACADEMIC INTEGRITY & MISCONDUCT</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance enforces a strict zero-tolerance policy for academic dishonesty.</p>
          <p>Prohibited activities include:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Cheating in assessments</li>
            <li>Plagiarism in assignments or projects</li>
            <li>Impersonation or unauthorized assistance</li>
            <li>Use of unfair means to obtain certification</li>
          </ul>
          <p>Consequences may include disqualification from certification, revocation of issued certificate, permanent suspension from the platform, or legal action in severe cases.</p>
        </div>
      </section>

      <section id="withhold" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">9. RIGHT TO WITHHOLD OR DENY CERTIFICATION</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance reserves the right to:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Withhold certification if eligibility criteria are not met</li>
            <li>Deny certification in cases of misconduct or non-compliance</li>
            <li>Require additional evaluation or verification</li>
          </ul>
          <p>Certification decisions are final and binding.</p>
        </div>
      </section>

      <section id="revocation" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">10. CERTIFICATE REVOCATION POLICY</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>A certificate may be revoked at any time if:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Fraudulent activity is discovered</li>
            <li>False information was provided</li>
            <li>Terms or policies are violated</li>
          </ul>
          <p>Upon revocation: certification shall be deemed invalid, verification systems may reflect revocation status, and no refund or compensation shall be provided.</p>
        </div>
      </section>

      <section id="verification" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">11. CERTIFICATE VERIFICATION & AUTHENTICATION</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>To ensure authenticity and prevent misuse:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Certificates may include unique identifiers, QR codes, or verification links</li>
            <li>Quillance may maintain a verification database</li>
            <li>Third parties may validate certificates using official verification methods where provided.</li>
          </ul>
        </div>
      </section>

      <section id="noguarantee" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">12. NO GUARANTEE OF OUTCOMES</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance does not guarantee that certification will result in job placement or internship, ensure career advancement, or be accepted by all employers or institutions.</p>
          <p>Outcomes depend on individual effort, skill application, and market conditions.</p>
          <p>Certification represents learning achievement, not employment assurance.</p>
        </div>
      </section>

      <section id="thirdparty" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">13. THIRD-PARTY OR PARTNER CERTIFICATIONS</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Where certifications are issued in collaboration with third-party partners:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Additional eligibility or verification criteria may apply</li>
            <li>Recognition depends on the respective partner organization</li>
            <li>Quillance does not guarantee external acceptance</li>
          </ul>
        </div>
      </section>

      <section id="technical" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">14. TECHNICAL LIMITATIONS</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance shall not be liable for delays or issues in certification due to technical disruptions, system errors beyond reasonable control, or email delivery failures.</p>
          <p>Participants must ensure accurate contact details and platform access.</p>
        </div>
      </section>

      <section id="dispute" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">15. DISPUTE RESOLUTION</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Any certification-related concerns must be raised within 7 days of issuance or denial, with supporting documentation.</p>
          <p>All disputes will be reviewed internally, and Quillance’s decision shall be final.</p>
        </div>
      </section>

      <section id="modifications" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">16. MODIFICATIONS TO POLICY</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance reserves the right to modify certification criteria, update issuance processes, or revise this Policy at any time.</p>
          <p>Changes become effective upon publication.</p>
        </div>
      </section>

      <section id="liability" className="scroll-mt-32">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">17. LIMITATION OF LIABILITY</h2>
        <div className="text-slate-600 space-y-4 leading-relaxed">
          <p>Quillance shall not be liable for decisions made by third parties based on certification, any indirect or consequential losses, or misinterpretation of certification value.</p>
        </div>
      </section>

    </LegalPageLayout>
  );
}
