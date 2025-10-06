import { getStorageItem } from "../../utils/sessionStorage";
import SignatureCanvas from "react-signature-canvas";

export function ContractorAgreement() {
  const businessName = getStorageItem("business_name")


  return (
    <div className="max-w-7xl text-base mx-auto mt-4 px-6  md:px-10 lg:px-6">
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-4 underline">
        Last Minute Wellness Inc. Independent Contractor Services Agreement
      </h1>

      {/* Contractor Details */}
      <div className="mb-6">
        <p className="font-semibold">[Name of Independent Contractor]</p>
        <p className="mb-2">[Independent Contractor’s Address]</p>
        <p>Attention: [Name of Independent Contractor]</p>
      </div>

      {/* Re: */}
      <p className="mb-4 underline">
        <span className="font-semibold">Re:</span> Independent Contractor
        Services
      </p>

      {/* Intro */}
      <p className="mb-4">
        Last Minute Wellness Inc. is excited to engage your services for our
        customers. Further to our discussions, this letter shall evidence the
        agreement (the "<strong>Agreement</strong>") made effective as of [date]
        (“<strong>Effective Date</strong>”) reached between Last Minute Wellness
        Inc. (“<strong>Last Minute Wellness</strong>“) and{" "}
        <strong>[Name of Independent Contractor]</strong> (the "
        <strong>Contractor</strong>", and with Last Minute Wellness, the “
        <strong>parties</strong>” and “<strong>party</strong>” means any one of
        them), the terms and conditions of which are set out below.
      </p>

      <p className="mb-6">
        In this Agreement, references to the "Contractor" shall, to the extent
        possible and applicable, include the Contractor’s officers, employees,
        directors, representatives, agents and its own permitted subcontractors.
        Now therefore, in consideration of the mutual covenants set forth in
        this Agreement, the receipt and adequacy of which is confirmed by each
        of the parties, the parties hereto agree as follows:
      </p>

      {/* Scope of Services */}
      <div className="mb-4">
        <h2 className="font-semibold text-xl mb-2 underline">
          1. Scope of Services
        </h2>
        <p className="mb-2">
          Last Minute Wellness hereby engages the Contractor to perform, or to
          assign Contractor’s personnel to perform, [description of the
          services] services (referred to as the “Services”) in accordance with
          the terms and conditions set forth below:
        </p>

        <ul className="ml-6 space-y-2">
          <li>
            a) Contractor shall register a practitioner account (“
            <strong>Practitioner Account</strong>”) on Last Minute Wellness’s
            web platform (the “<strong>Platform</strong>”) and agree to the
            Platform’s Terms of Service and its Privacy Policy as a condition to
            registering a Practitioner Account and for Contractor’s ongoing use
            of the Platform;
          </li>
          <li>
            b) On the Practitioner Account, Contractor shall be responsible to
            regularly update Contractor’s availability calendar (“
            <strong>Calendar</strong>”), available regions to perform the
            Services, Contractor’s rate for the Services they wish to provide (“
            <strong>Rate</strong>”), and Contractor’s bank account PAD form (“
            <strong>Banking Instructions</strong>”);
          </li>
          <li>
            c) Last Minute Wellness’s Platform’s users (“
            <strong>Customers</strong>”) may book appointments on Contractor’s
            Calendar for Contractor to perform the Services (“
            <strong>Booking</strong>”), pursuant to which Contractor will
            receive a notification of the Booking specifying the Booking time,
            address and any details regarding the Customer (for example, health
            or medical concerns of the Customers) or for accessing the premises;
          </li>
          <li>
            d) To the extent the Booking was made for a time that is marked
            “available” on Contractor’s Calendar, the Booking shall be deemed
            confirmed without the requirement of further confirmation by
            Contractor unless Contract has selected on the Practitioner Account
            for manual approval of Bookings in which Contractor shall have the
            opportunity to confirm the Booking within 20 minutes of being
            notified upon which the Booking shall be deemed confirmed if
            Contractor does not accept the Booking manually. If Contractor
            cancels any Booking for any reason (other than for reasons
            attributed to the Customer, including without limitation, the
            Customer being in violation of any of Last Minute Wellness’ terms of
            service or policies), then the Customer shall receive a full refund
            and receive an opportunity for rescheduling. Contractor shall cancel
            the Booking on the Platform and [additionally notify Last Minute
            Wellness’s representative to discuss potential alternative Booking
            times with the Customer, whereby Last Minute Wellness will contact
            the Customer directly to provide rescheduling options]. Failure by
            the Contractor to attend a Booking without cancelling in accordance
            with these procedures may result in the immediate termination of
            this Agreement;
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="font-semibold text-xl mb-2 underline">
          2. Compliance with Laws, Licensing, Insurance, and Background
          Verification
        </h2>

        <p className="mb-4">
          In performing the Services, the Contractor shall strictly comply with
          all applicable laws, regulations, rules, codes, and professional
          standards imposed by any governmental or regulatory authority having
          jurisdiction over the parties to this Agreement, the Services, or the
          locations where such Services are provided. Without limiting the
          generality of the foregoing, the Contractor covenants and agrees as
          follows:
        </p>

        {/* Licensing and Registration */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">a) Licensing and Registration</h3>
          <p className="mb-2">
            For any Services requiring governmental or regulatory licensing,
            registration, or certification, whether at the individual or
            corporate level, the Contractor shall obtain and maintain, in good
            standing and at its own expense, all such licenses, registrations,
            certifications, and permits as may be required to lawfully provide
            the Services in each applicable jurisdiction. The Contractor shall
            provide Last Minute Wellness with copies of such licenses or
            registrations (and all renewals thereof) prior to the commencement
            of Services and upon any renewal thereof, and shall notify Last
            Minute Wellness immediately in writing upon any suspension,
            revocation, expiry, or other loss of such licenses or registrations;
          </p>
        </div>

        {/* Background Verification */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">
            b) Background Verification and Due Diligence
          </h3>
          <p className="mb-2">
            Contractor agrees to submit, and cause all personnel or
            subcontractors performing Services on its behalf to submit, to
            background checks and due diligence verification procedures as
            reasonably required by Last Minute Wellness from time to time, which
            may include without limitation: criminal background checks, credit
            checks, identity verification, review of corporate registration
            documents, annual returns, confirmation of professional licensing or
            trade certifications (where applicable), insurance certificates and
            such other documentation as Last Minute Wellness may reasonably
            require. A one-time fee of $[35] will be charged to Contractor for
            the performance of completing background and due diligence checks.
            Contractor shall not perform Services if they have not passed such
            background checks to Last Minute Wellness’s reasonable satisfaction;
          </p>
        </div>

        {/* Insurance */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">c) Insurance Requirements</h3>
          <p className="mb-2">
            Contractor shall, at its sole cost and expense, obtain and maintain
            during the term of this Agreement and for a period of not less than
            twelve (12) months thereafter, all insurance coverage that is
            customary and appropriate for the nature of the Services provided
            and as may be required by law or such minimum insurance specified by
            Last Minute Wellness from time to time. Such coverage shall include,
            at a minimum, commercial general liability and automobile insurance
            and such other insurance policies as are required for the lawful
            provision of the Services in each jurisdiction where Services are
            performed. Prior to commencing any Services under this Agreement,
            and upon each annual renewal of any applicable policy, Contractor
            shall provide Last Minute Wellness with a current certificate of
            insurance evidencing the coverage listed in this section. Any
            acceptance by Last Minute Wellness of such certificates will not
            relieve the Contractor from any liability which may be incurred in
            the course of providing Services to Last Minute Wellness, including
            liability claims in excess of those coverage limits described above.
          </p>
        </div>

        {/* Ongoing Notification */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">
            d) Ongoing Notification Obligations
          </h3>
          <p className="mb-2">
            Contractor shall promptly notify Last Minute Wellness in writing of
            any of the following events:
          </p>
          <ul className="space-y-1 mb-2">
            <li>
              )i) Any lapse, suspension, revocation, or non-renewal of any
              license, permit, certification, or insurance required to perform
              the Services;
            </li>
            <li>
              (ii) Any material customer complaints, damage claims, or refund
              demands arising out of the Services performed;
            </li>
            <li>
              (iii) Any investigation, warning, citation, suspension, or
              disciplinary action by a regulatory or licensing body, agency, or
              board having jurisdiction over the Contractor or its personnel;
            </li>
            <li>
              (iv) Any workplace safety incident, injury, or occupational health
              and safety violation, including near-miss incidents reportable
              under applicable occupational health and safety laws.
            </li>
          </ul>
          <p className="mb-2">
            The Contractor acknowledges and agrees that compliance with Last
            Minute Wellness’s Terms of Service is a condition of performing
            Services through the Platform and the Terms of Service are
            incorporated by reference into this Agreement, mutatis mutandis. A
            copy of the current Terms of Service is accessible on the Platform.
            Last Minute Wellness may amend the Terms of Service from time to
            time in its sole discretion, and the Contractor shall be deemed to
            have accepted such amendments upon continuing to offer or perform
            Services after the effective date of any such update. Without
            limiting any other rights or remedies available under this Agreement
            or at law, the Contractor shall have the right to refuse or
            discontinue Services at any Booking if, upon reasonable assessment,
            the Contractor determines that:
          </p>
          <ul className="space-y-1 mb-2">
            <li>
              (i) the Customer has provided an incorrect, misleading, or
              incomplete address or access information;
            </li>
            <li>
              (ii) the Contractor is unable to safely access or remain on the
              premises due to physical obstructions, locked access points, or
              uncooperative behaviour by the Customer;
            </li>
            <li>
              (iii) the environment poses health or safety risks, including but
              not limited to unsanitary conditions, aggressive persons or
              animals, hazardous substances, or the presence of illegal
              activities;
            </li>
            <li>
              (iv) the Customer behaves in an abusive, harassing, threatening,
              discriminatory, or otherwise inappropriate manner;
            </li>
            <li>
              (v) the Customer has materially breached the Terms of Service;
            </li>
            <li>
              (vi) the Booking otherwise contravenes Last Minute Wellness’s
              standards of professional conduct or safe working conditions as
              outlined in the Terms of Service.
            </li>
          </ul>
          <p className="mb-4">
            In any such case, the Contractor shall promptly notify Last Minute
            Wellness of the refusal or discontinuation of Services, providing
            reasonable details regarding the incident, and Last Minute Wellness
            shall determine, acting reasonably, whether the Booking shall be
            deemed cancelled by the Customer for the purposes of Contractor
            compensation.
          </p>
          <p>
            f) Contractor’s failure to comply with any of the above obligations
            shall constitute a material breach of this Agreement, entitling Last
            Minute Wellness to immediately suspend or terminate the Contractor’s
            access to the Platform or its ability to provide Services, and to
            pursue any other remedies available at law or in equity.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="font-semibold text-xl mb-2 underline">3. Term</h2>
        <p className="mb-4">
          The term of this Agreement shall commence as of the parties’ execution
          of this Agreement, and continue on a month-to-month basis (the “
          <strong>Term</strong>”), subject to any early termination of this
          Agreement in accordance with the provisions under the heading
          “Termination” below.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="font-semibold text-xl mb-2 underline">
          4. Skills and Experience
        </h2>
        <p className="mb-4">
          The Contractor hereby represents and warrants that it has, and during
          the Term of this Agreement shall continue to have, the requisite
          skills, experience, licenses and insurance necessary to perform the
          Services in accordance with the terms and conditions of this
          Agreement. The Contractor shall, at all times during the Term of the
          Agreement, act in the best interests of Last Minute Wellness and shall
          perform the Services in a competent and professional manner using due
          care and diligence.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="font-semibold text-xl mb-2 underline">
          5. Non-Exclusivity
        </h2>

        <p className="mb-4">
          Subject to the provisions under the headings "Confidentiality" and
          “Non-Compete and Non-Solicitation” below, nothing contained in this
          Agreement shall prohibit the Contractor from providing Services to
          third parties other than Customers, provided that such Services shall
          not:
        </p>

        <ol className="space-y-2 ml-4">
          <li>
            (i) prevent the timely performance by the Contractor of its
            obligations under this Agreement (for example, ensuring that their
            Calendar availability properly accounts for travel time between
            Contractor’s clients);
          </li>
          <li>
            (ii) create a conflict of interest with the business interests of
            Last Minute Wellness, its affiliates or related entities, including
            in respect of providing similar Services to any of Last Minute
            Wellness’s competitors, including through any other third-party
            mobile Service booking agency or service.
          </li>
        </ol>
      </div>

      <div className="mt-8">
        <h2 className="font-semibold text-xl mb-2 underline">
          6. Compensation
        </h2>

        <p className="mb-4">
          a) Upon the completion of a Booking, the Customer will be charged an
          amount comprising of:
        </p>

        <ol className="space-y-2 ml-4 mb-4">
          <li>(i) Contractor’s Rate;</li>
          <li>(ii) 1/3 of the Platform’s payment processing fees;</li>
          <li>(iii) Applicable taxes of (a) and (b) above; and</li>
          <li>(iv) Any voluntary gratuities paid for by the Customer.</li>
        </ol>

        <p className="mb-4">
          On a weekly basis, Last Minute Wellness shall pay to Contractor the
          amount equal to:
        </p>

        <ol className="space-y-2 ml-4 mb-4">
          <li>(i) [75%] of Contractor’s Rate;</li>
          <li>(ii) Plus Contractor’s proportion of any applicable taxes;</li>
          <li>
            (iii) Minus 1/3 of the Platform’s payment processing fees; and
          </li>
          <li>(iv) One hundred (100%) percent of the gross gratuities,</li>
        </ol>

        <p className="mb-4">
          for the completed Bookings performed within the preceding billing
          period (“<strong>Contractor Payment</strong>”). The Contractor Payment
          shall be remitted to the Contractor at its Banking Instructions
          specified on the Account. Last Minute Wellness shall not be liable or
          responsible for any errors in the Banking Instructions provided by
          Contractor.
        </p>

        <p className="mb-4">
          b) Contractor agrees and acknowledges that the Contractor Payment
          shall be Contractor’s sole compensation in respect of any Services
          rendered by Contractor to Last Minute Wellness pursuant to this
          Agreement.
        </p>

        <p className="mb-4">
          c) Last Minute Wellness shall use reasonable commercial efforts to
          advise and engage Contractor on investigating and resolving any
          Customer complaints, provided that Last Minute Wellness shall retain
          the right to resolve any Customer complaint in its sole and unfettered
          discretion. As such, Contractor agrees and acknowledges that the
          amount of Booking revenues received by Last Minute Wellness may be
          retroactively adjusted pursuant to the adjudication of Customer
          complaints, which may include, without limitation, a refund or
          discount on any properly investigated, bona fide Customer complaint
          made in good faith, pursuant to which the Contractor Payment payable
          for any subsequent billing period may be adjusted or set-off to
          reflect the reduction in Booking revenues in any prior billing period
          in respect of any such refund or discount. Without limiting any of
          Last Minute Wellness’s rights under this Agreement, where Last Minute
          Wellness receives a bona fide Customer complaint, refund request, or
          claim for damages relating to Services performed by the Contractor,
          Last Minute Wellness may, acting reasonably, withhold or defer all or
          part of any Contractor Payment otherwise due to the Contractor,
          pending the investigation and resolution of such complaint. If, upon
          investigation, Last Minute Wellness determines that the Contractor is
          responsible for a refund or loss, Last Minute Wellness may deduct such
          amount from the Contractor Payment and any future payments. The
          Contractor agrees that such withholding shall not constitute a breach
          of this Agreement.
        </p>

        <p className="mb-4">
          d) If the Term is terminated early by Last Minute Wellness as set
          forth below, Last Minute Wellness’s obligations shall extend only to
          the payment of the Contractor Payment for the Bookings performed by
          Contractor up to the date of termination.
        </p>

        <p className="mb-4">
          e) The Contractor agrees that any and all amounts on account of
          Contractor’s own taxes (income or otherwise), pension plan
          contributions, unemployment insurance contributions or any other
          applicable withholding taxes or payments payable to any government or
          other public authority by virtue of any law, rule or regulation in
          respect of any fees paid to the Contractor pursuant to the provisions
          of this Agreement, are the Contractor’s responsibility and shall be
          paid by the Contractor. Should Last Minute Wellness be obligated by
          law to make any payment or withholdings in respect of the Services on
          behalf of the Contractor, the Contractor hereby acknowledges that Last
          Minute Wellness shall have the authority to make such payments or
          withholdings, and to deduct such amounts from the Contractor Payment
          payable to the Contractor under this Agreement. The Contractor hereby
          agrees to indemnify and hold Last Minute Wellness harmless from and
          against any and all actions, claims, damages, costs and expenses
          whatsoever which may be brought against or suffered or incurred by
          Last Minute Wellness, or which Last Minute Wellness may incur, sustain
          or pay, arising out of or in any way connected with any remittances
          required by law in any jurisdiction in which the Services are being
          provided.
        </p>

        <p>
          f) Contractor shall be responsible for establishing a Rate that
          captures all of Contractor’s own costs including, but not limited to,
          fuel, transportation, wages, and supplies. Contractor shall not have
          the right to invoice or receive reimbursement from Last Minute
          Wellness for any fees or expenses (other than the Contractor Payment).
        </p>
      </div>

      <div className="mt-8">
        <h2 className="font-semibold text-xl mb-2 underline">7. Termination</h2>
        <p className="mb-4">
          Subject to the provisions of Section 3 above, either party may
          terminate the Term upon seven (7) days’ prior written notice to the
          other party, provided that, in the event of Contractor’s breach of any
          of its obligations under this Agreement, Last Minute Wellness may
          elect in its sole discretion to amend Contractor’s Calendar to limit
          available times or to cancel Contractor’s Bookings upon delivery of
          the notice of termination to Contractor.
        </p>
        <p className="mb-4">
          Upon termination of this Agreement as set out above, the parties shall
          thereafter have no further obligations to each other under this
          Agreement except that the provisions under the headings
          "Confidentiality", "Ownership of Information", "Indemnity",
          "Relationship of Parties" and “Non-Compete and Non-Solicitation” shall
          survive the termination of this Agreement and remain in full force and
          effect thereafter.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="font-semibold text-xl mb-2 underline">
          8. Confidentiality
        </h2>
        <p className="mb-4">
          In conjunction with providing the Services under this Agreement, it is
          acknowledged that the Contractor will have access to information ("
          <strong>Confidential Information</strong>") confidential to the
          business of Last Minute Wellness and its affiliated or related
          entities. "Confidential Information" shall include, but is not limited
          to, financial information, business plans, concepts, customer lists,
          vendor lists, strategies, intellectual property and any other
          information owned by, used by or concerning Last Minute Wellness and
          its affiliated or related entities, which is not publicly known
          (including the terms of this Agreement and any information developed
          in conjunction with the Contractor providing the Services) and any
          other proprietary information, records, trade secrets and
          documentation owned by, used by or concerning Last Minute Wellness and
          its affiliated or related entities, whether in written, oral,
          electronic or other form, whether disclosed before or after execution
          of this Agreement, whether or not specifically described or marked as
          "confidential" and whether provided by Last Minute Wellness or an
          authorized agent of Last Minute Wellness.
        </p>
        <p className="mb-4">
          The Contractor covenants and agrees that all Confidential Information
          disclosed to the Contractor shall (a) be kept in strict confidence by
          the Contractor, (b) not be used, dealt with or exploited for any
          purpose or purposes other than the provision of the Services, and (c)
          not be disclosed to any person or persons (other than the professional
          advisors of the Contractor, as required) unless required by law.
        </p>
        <p className="mb-4">
          The obligations of confidentiality set out above shall not apply to
          any Confidential Information which (a) is at the time of disclosure,
          or thereafter becomes part of the public domain through no violation
          of this Agreement or any act or omission on the part of the Contractor
          (b) as confirmed by the written records of the Contractor, was in the
          Contractor’s lawful possession prior to its disclosure to the
          Contractor by Last Minute Wellness (c) was lawfully acquired by the
          Contractor through a third party which, to the best of the
          Contractor’s knowledge, was not under an obligation of confidence to
          Last Minute Wellness, and which third party was not in a contractual
          or fiduciary relationship with Last Minute Wellness (d) is disclosed
          following the express written consent of Last Minute Wellness to such
          disclosure, or (e) the Contractor is by law compelled to disclose.
        </p>
        <p className="mb-4">
          The Contractor acknowledges and agrees that damages would be an
          inadequate remedy for breach of the foregoing obligations of
          confidentiality and that Last Minute Wellness shall be entitled to
          seek equitable relief (including injunction and specific performance)
          in addition to any other remedy available at law or in equity in
          respect of any such breach.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="font-semibold text-xl mb-2 underline">
          9. Ownership of Information
        </h2>
        <p className="mb-4">
          All materials and information of any kind whatsoever generated or
          obtained by the Contractor in performing the Services shall be the
          property of Last Minute Wellness. The Contractor shall inform Last
          Minute Wellness of all such materials and information and shall, upon
          request from Last Minute Wellness, deliver and assign Contractor’s
          intellectual property rights and copyright interests in all such
          materials and information to Last Minute Wellness.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="font-semibold text-xl mb-2 underline">10. Privacy Law</h2>
        <p className="mb-4">
          Contractor agrees and acknowledges that the protection of the privacy
          and dignity of Last Minute Wellness’s Customers is of the utmost
          importance for not only legal compliance, but also the preservation of
          Last Minute Wellness’s goodwill and reputation. As such, in providing
          Contractor’s Services hereunder, Contractor undertakes and agrees to
          act in compliance with any and all applicable privacy legislation when
          collecting any personal information or personal employee information
          or using or disclosing any personal information or personal employee
          information in the custody or care of Last Minute Wellness, including
          any personal information regarding any Customers. Contractor
          undertakes and agrees to confer with an authoritative representative
          of Last Minute Wellness in the event Contractor is unsure as to how to
          proceed in the face of privacy legislation, prior to proceeding.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="font-semibold text-xl mb-2 underline">11. Indemnity</h2>
        <p className="mb-4">
          The Contractor (the "<strong>Indemnifying Party</strong>") shall be
          liable for and shall indemnify, defend, and hold harmless Last Minute
          Wellness Inc., its affiliates, and each of their respective directors,
          officers, employees, representatives, and agents (each, an "
          <strong>Indemnified Party</strong>") from and against any and all
          losses, claims, demands, actions, damages, liabilities, judgments,
          settlements, costs and expenses (including legal fees on a full
          indemnity basis), whether direct, indirect, or consequential, arising
          from or in connection with: a) any breach or non-compliance with any
          term, representation, warranty, or obligation of this Agreement by the
          Indemnifying Party or its personnel; b) any act, omission, negligence,
          gross negligence, recklessness, or willful misconduct of the
          Indemnifying Party or its personnel in connection with the performance
          of the Services or their use of the Platform; and c) any claim,
          demand, complaint, investigation, or legal proceeding brought by a
          Customer or any third party against Last Minute Wellness or its
          affiliates arising from or in connection with the conduct,
          performance, or failure to perform by the Contractor or its personnel.
        </p>
        <p className="mb-4">
          Without limiting the foregoing, the Contractor expressly acknowledges
          and agrees that in the event of a claim, complaint, or dispute raised
          by a Customer or third party in relation to the Services performed or
          omitted by the Contractor, Last Minute Wellness may, in accordance
          with its Privacy Policy and applicable laws, disclose the Contractor’s
          name, contact information, insurance details, license or registration
          documentation, and any relevant incident information to the affected
          Customer or to any applicable authority or insurer for the purpose of
          facilitating the resolution, investigation, or adjudication of the
          claim. The Contractor hereby waives any objection to such disclosure
          made in good faith.
        </p>
        <p className="mb-4">
          Last Minute Wellness shall not be liable for any costs, losses, or
          liabilities incurred in connection with such Customer or other third
          party claims unless directly caused by Last Minute Wellness’s own
          gross negligence or willful misconduct. The Contractor’s indemnity
          obligations shall survive the termination or expiry of this Agreement.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="font-semibold text-xl mb-2 underline">
          12. Relationship of Parties
        </h2>
        <p className="mb-4">
          Both parties are independent contractors under this Agreement. Nothing
          herein contained shall be deemed to create an employment, agency,
          joint venture or partnership relationship between the parties hereto
          or any of their agents or employees, or any other legal arrangement
          that would impose liability upon one party for the act or failure to
          act of the other party. Neither party shall have any express or
          implied power to enter into any contracts or commitments or to incur
          any liabilities in the name of, or on behalf of, the other party, or
          to bind the other Party in any respect whatsoever. The Contractor
          shall not subcontract any of the Services without the prior written
          consent of Last Minute Wellness.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="font-semibold text-xl mb-2 underline">
          13. Non-Competition and Non-Solicitation
        </h2>
        <p className="mb-4">
          During the period of the Term, and for a period of one (1) year
          following termination of this Agreement, for whatever reason, the
          Contractor shall not, on their own behalf or on behalf of or in
          connection with any person, either directly or indirectly, in any
          capacity whatsoever, carry on, be engaged in, assist, service, consult
          for, represent, advise or be otherwise commercially involved anywhere
          in Alberta or British Columbia in the provision of web or app-based
          mobile booking applications for the provision of Services.
        </p>
        <p className="mb-4">
          During the period of the Term, and for a period of one (1) year
          following termination of this Agreement, for whatever reason, the
          Contractor shall not, on their own behalf or on behalf of or in
          connection with any other person, in any capacity whatsoever:
          <ul className="space-y-2">
            <li>
              a) canvass or solicit any Customer first introduced to Contractor
              through the Platform or by Last Minute Wellness, or any vendor or
              independent contractor of Last Minute Wellness in an attempt to
              induce them to cease any business activity with Last Minute
              Wellness or commence any business activity with a competitor of
              Last Minute Wellness, or for Contractor to perform Services
              directly to the Customer outside of the scope of the Platform;
            </li>
            <li>
              b) accept any business to provide Services to any Customer, vendor
              or independent contractor of Last Minute Wellness outside of the
              scope of the Platform; or
            </li>
            <li>
              c) supply any goods or services to any Last Minute Wellness
              Customer that are similar to goods and services supplied by Last
              Minute Wellness to any Customer.
            </li>
          </ul>
        </p>
        <p className="mb-4">
          During the period of the Term, and for a period of one (1) year
          following termination of this Agreement, for whatever reason, the
          Contractor shall not, on their own behalf or on behalf of or in
          connection with any other person, in any capacity whatsoever, solicit
          the employment or contractual engagement of or otherwise entice away
          from the employment or contractual engagement of Last Minute Wellness
          any individual who is employed or contractually engaged by Last Minute
          Wellness whether or not such individual would commit any breach of
          their contract or terms of employment or contractual engagement by
          terminating their employment or contract with Last Minute Wellness.
        </p>
        <p className="mb-4">
          During the period of the Term, and for a period of one (1) year
          following termination of this Agreement, for whatever reason, the
          Contractor shall not on their own behalf or on behalf of or in
          connection with any other person, in any capacity whatsoever,
          interfere or attempt to interfere, in an adverse manner, with the
          business of Last Minute Wellness or persuade or attempt to persuade
          any client, Customer, potential client, employee, supplier, vendor or
          independent contractor of Last Minute Wellness to discontinue or
          alter, in an adverse manner, such party's relationship with Last
          Minute Wellness.
        </p>
        <p className="mb-4">
          During the period of the Term, and for a period of one (1) year
          following termination of this Agreement, for whatever reason, the
          Contractor shall not participate in any project or venture related to
          any business concept or service, including, without limitation, the
          provision of web or app-based mobile booking applications for the
          provision of Services, which originated as part of Last Minute
          Wellness’s business or during the Contractor’s engagement with Last
          Minute Wellness, regardless of whether or not the Contractor
          participated in such project or venture.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="font-semibold text-xl mb-2 underline">
          14. Laws and Independent Legal Advice
        </h2>
        <p className="mb-4">
          This Agreement shall be interpreted, and the legal relations of the
          parties hereto, shall be governed in accordance with the laws of the
          province of Alberta excluding and without regard to any conflict of
          laws, principles or rules that would impose a law of another
          jurisdiction for the construction and interpretation of this
          Agreement. Without limitation to the provisions of this Section 14,
          the parties agree to irrevocably attorn to the courts in the province
          of Alberta sitting in Calgary, Alberta for the enforcement and
          adjudication of any matters arising under this Agreement.
        </p>
        <p className="mb-4">
          The Contractor and Last Minute Wellness agree that any dispute arising
          out of, or connected in any way with, this Agreement shall be resolved
          and determined by a single arbitrator pursuant to the Arbitration Act
          (Alberta) at Calgary, Alberta.
        </p>
        <p className="mb-4">
          Both the Contractor and Last Minute Wellness further agree that unless
          this Agreement is terminated in accordance with the provisions herein,
          the Contractor will continue to provide the Services as may be
          required by Last Minute Wellness notwithstanding a dispute has arisen.
        </p>
        <p className="mb-4">
          Each of the parties hereby acknowledges that it has been afforded the
          opportunity to obtain independent legal advice and confirms by the
          execution and delivery of this Agreement that they have either done so
          or waived their right to do so in connection with the entering into of
          this Agreement.
        </p>
      </div>

      <div className="mt-8">
        <h2 className="font-semibold text-xl mb-2 underline">15. Notice</h2>

        <p className="mb-4">
          Any notice given pursuant to the terms and conditions of this
          Agreement shall be served by way of ordinary pre-paid first-class
          mail, or by way of email, addressed as follows:
        </p>

        <div className="mb-4 ml-4 space-y-2">
          <p>
            <span className="font-semibold">To Last Minute Wellness:</span> Last
            Minute Wellness Inc.
            <br />
            [Address]
            <br />
            Attention: Chief Executive Officer
            <br />
            Email: [Email]
          </p>
          <p>
            <span className="font-semibold">To the Contractor:</span>{" "}
            [Contractor Address and Email]
          </p>
        </div>

        <p className="mb-4">
          Notice shall be deemed to have been delivered four (4) days after the
          date of mailing or within twenty-four (24) hours after the sending of
          an email. Either party may change the particulars of its address for
          service as set out above by notice to the other party.
        </p>

        <h2 className="font-semibold text-xl mb-2 underline">16. Time</h2>
        <p className="mb-4">Time is of the essence in this Agreement.</p>

        <h2 className="font-semibold text-xl mb-2 underline">
          17. Enurement, Assignment, Amendments and Counterpart Execution
        </h2>
        <p className="mb-2">
          Neither the Contractor nor Last Minute Wellness shall be entitled to
          assign this Agreement without the prior written consent of the other
          party. This Agreement is binding upon the successors and permitted
          assigns of both Last Minute Wellness and the Contractor.
        </p>
        <p className="mb-2">
          This Agreement represents the only agreement between the parties with
          respect to the subject matter referred to herein. This Agreement
          supersedes any and all prior agreements or understandings between Last
          Minute Wellness and the Contractor, whether written, oral or
          otherwise.
        </p>
        <p className="mb-2">
          Any amendment to this Agreement must be in writing and signed by both
          parties hereto.
        </p>
        <p className="mb-4">
          <h2 className="font-semibold text-xl mb-4">Digital Signature</h2>

          <div className="border border-gray-300 rounded-md mb-4">
            <SignatureCanvas
              penColor="black"
              canvasProps={{ width: 500, height: 200, className: "rounded-md" }}
            />
          </div>

          <div className="flex gap-4 mb-4">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Save Signature
            </button>
            <button
              className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
            >
              Clear
            </button>
          </div>
        </p>

        <p className="mb-2">
          This Agreement, and any amendment hereto, may be executed in one or
          more counterparts, each of which shall be deemed an original, and
          shall become a binding agreement when each of the parties hereto shall
          have executed and delivered a counterpart of this Agreement or
          amendment, as the case may be, to the other party.
        </p>

        <p className="mb-4 font-semibold">
          IN WITNESS WHEREOF, the parties have agreed to this Agreement as of
          the Effective Date.
        </p>

        <div className="mb-6">
          <p className="font-semibold">LAST MINUTE WELLNESS INC.</p>
          <p>By:</p>
          <p>Name:</p>
          <p>Title:</p>
        </div>

        <div className="mb-6">
          <p className="font-semibold">
            ACCEPTED AND AGREED TO AS OF THIS [Date]
          </p>
          <p>[Contractor’s Name]</p>
          <p>By:</p>
          <p>Name:</p>
          <p>Title:</p>
        </div>
      </div>
    </div>
  );
}
