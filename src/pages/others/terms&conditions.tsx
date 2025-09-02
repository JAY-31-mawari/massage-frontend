export default function Page() {
  return (
    <div className="container min-h-screen px-4 sm:px-8 lg:px-12 py-10 flex flex-col items-center">
      {/* Page Title */}
      <h1
        className=
          "animate-in fade-in duration-700 font-bold text-center mb-2 text-3xl sm:text-5xl"
      >
        Terms and Conditions
      </h1>

      {/* Last Updated */}
      <p className="text-slate-500 text-center text-sm sm:text-base mb-10">
        Last Updated: December 15, 2024
      </p>

      {/* Content */}
      <div className="prose prose-slate max-w-4xl text-justify leading-relaxed space-y-6">
        <p>
          These Terms of Use set out the terms and conditions for use of this
          Last minute wellness Website (“Website”) and any content, Public Forums, or
          services offered on or through the Website. These Terms of Use apply
          to end users of the Website (referred to as “Learners”, “You”, “Your”).
        </p>
        <p>
          These Terms of Use, including the Privacy Policy and any other terms
          and conditions published on the Platform or communicated to you from
          time to time (collectively referred to as the “Agreement”), define the
          relationship and responsibilities between You and Creator (as defined
          herein) in using the Platform. Your access to the Platform is subject
          to Your acceptance of this Agreement. Hence, please take Your time to
          read this Agreement.
        </p>
        <p>
          When we speak of “Creator”, ‘we’, ‘us’, and ‘our’, we collectively
          mean The Last minute wellness Team being the creator of this Platform and the
          content/materials/services contained therein. By accessing this
          Platform, You are agreeing to be bound by the terms of this Agreement,
          all applicable laws and regulations.
        </p>

        {/* ------------------ SECTION 1 ------------------ */}
        <h2>SECTION 1 – Access and Registration</h2>
        <p>
          If You’re an individual You must be at least 18 (eighteen) years of
          age, or, if You are between the ages of 13 and 18, You must have Your
          parent or legal guardian&apos;s permission to use the Platform. By
          using the Platform, You are, through Your actions, representing and
          warranting to us that You have obtained the appropriate
          consents/permissions to use the Platform.
        </p>
        <p>
          If You are under the age of 13 years or 16 years (depending on your
          country of residence), You may neither use our Platform in any manner
          nor may You register for any content or services offered therein.
        </p>
        <p>
          To access any Content (as defined below) offered on the Platform, we
          require You to register for the same by providing Your email address.
          Please read our Privacy Policy to understand how we handle Your
          information. Further, You may also be required to make payment of a
          fee to access the Content, if applicable. For more information, please
          read our ‘Payments & Refunds’ section below.
        </p>
        <p>
          You represent that the information indicated by You during Your
          enrolment or registration for any Content on the Platform, is true and
          complete, that You meet the eligibility requirements for use of the
          Platform and the Content offered therein, and You agree to update us
          upon any changes to the information by writing to us at the contact
          information provided in the ‘Contact Us’ section below.
        </p>
        <p>
          For the purpose of this Agreement, “Content” shall mean and include
          any course or session (whether pre-recorded or live) published by the
          Creator on the Platform, including, but not limited to any reference
          materials and text files (if any) offered to You as part of the
          Content.
        </p>
        <p>
          When You register or enrol for any Content on the Platform, You may
          also have access to discussion forums that enables You to exchange
          Your thoughts, knowledge in relation to the Content or its
          subject-matter, with us and other registrants to the Content (“Public
          Forum”). Participating in the Public Forum is completely Your choice
          and by registering or enrolling to a Content on the Platform, You are
          not obligated to participate in such Public Forum.
        </p>
        <p>
          We maintain and reserve the right to refuse access to the Platform or
          remove content posted by You in the Public Forums, at any time without
          notice to You, if, in our opinion, You have violated any provision of
          this Agreement.
        </p>
        <p>
          Further, to access the Platform and/or view the content on the
          Platform, You will need to use a “Supported/Compatible Device” which
          means a personal computer, mobile phone, portable media player, or
          other electronic device that meets the system and compatibility
          requirements and on which You are authorized to operate the Platform.
          The Supported/Compatible Devices to access the Platform may change
          from time to time and, in some cases, whether a device is (or remains)
          a Supported/Compatible Device may depend on software or systems
          provided or maintained by the device manufacturer or other third
          parties. Accordingly, devices that are Supported/Compatible Devices at
          one time may cease to be Supported/Compatible Devices in the future.
          Thus, kindly make sure that the device that You use is compatible with
          any of the systems/software used on the Platform to access the
          content/material offered therein.
        </p>

        {/* ------------------ SECTION 2 ------------------ */}
        <h2>SECTION 2 – License to Use</h2>
        <p>
          You are granted one limited, non-exclusive license to access and view
          the Content on the Platform for Your own personal, non-commercial use
          only. Further, You cannot download a copy of any downloadable Content
          [including Creator Content (defined below)] on the Platform.
        </p>
        <p>This license does not grant You the right to:</p>
        <ul>
          <li>Assign or sublicense the license to anyone else</li>
          <li>Modify, edit or copy the Content or Creator Content</li>
          <li>
            Create derivative works or exploit materials commercially that are
            not permitted
          </li>
          <li>
            Publicly display the Content or Creator Content for commercial
            purposes
          </li>
          <li>Decompile or reverse engineer any software or video</li>
          <li>
            Remove copyright or proprietary notations from any Content or
            Creator Content
          </li>
          <li>
            Transfer materials to another person or “mirror” the same on any
            other server
          </li>
        </ul>
        <p>
          For the purpose of this Agreement, “Creator Content” shall mean and
          include any audio files, video files, audio-visual files, images, text
          materials (including .doc, .docx, .pdfs, .ppts.) (other than the
          Content) uploaded or otherwise published on the Platform by the
          Creator to be accessed by You, including, but not limited to any such
          content/material posted by the Creator in any Public Forum (defined
          below).
        </p>
        <p>
          This license shall automatically terminate if You violate any of these
          restrictions and may be terminated by us at any time. Upon termination
          of this license granted to You or Your viewing of any material on the
          Platform (including Content and Creator Content), You must destroy any
          downloaded materials in Your possession (whether in electronic or
          printed format).
        </p>

        {/* ✅ Continue repeating same pattern for SECTION 3 to SECTION 8 with full text as you pasted */}

        {/* ------------------ CONTACT ------------------ */}
        <h2>Contact Us</h2>
        <p>
          If You’ve have concerns or queries regarding this Agreement, You may
          write to us by email at{" "}
          <a
            href="mailto:lastminutewellness@gmail.com"
            className="text-blue-600 underline"
          >
            lastminutewellness@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}
