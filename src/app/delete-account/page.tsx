import type { Metadata } from "next";
import HeaderTools from "../components/HeaderTools";

export const metadata: Metadata = {
  title: "Delete AniTrain Account & Data",
  description: "Request deletion of your AniTrain account and associated personal data. This public page can be used without signing in to the website.",
  alternates: { canonical: "/delete-account" },
};

const deletionMail = "mailto:anitrainapp@gmail.com?subject=Delete%20my%20AniTrain%20account&body=Hello%20AniTrain%2C%0A%0AI%20would%20like%20to%20delete%20my%20AniTrain%20account%20and%20associated%20personal%20data.%0A%0AEmail%20used%20for%20my%20AniTrain%20account%3A%20%0AOptional%20username%20or%20display%20name%3A%20%0A%0AThank%20you.";

export default function DeleteAccountPage() {
  return (
    <main className="about-note-page">
      <header className="site-header about-note-header">
        <a className="brand-mark brand-mark-image" href="/" aria-label="AniTrain home">
          <img src="/anitrain-icon.png" alt="" />
        </a>
        <span className="header-kicker">ACCOUNT DELETION · ANITRAIN</span>
        <HeaderTools lang="EN" />
      </header>

      <div className="about-room" aria-hidden="true">
        <div className="about-room-wall" />
        <div className="about-room-window"><i /><b /></div>
        <div className="about-room-plant"><i /><i /><i /></div>
        <div className="about-room-floor" />
      </div>

      <section className="about-note-layout">
        <a className="about-back" href="/"><span>←</span> BACK TO ANITRAIN</a>

        <article className="about-paper-note">
          <span className="about-tape" aria-hidden="true" />
          <span className="about-note-number">ACCOUNT + DATA DELETION · PUBLIC REQUEST PAGE</span>
          <h1>Delete your AniTrain account.</h1>
          <p className="about-lead">
            You can use this page to start deletion of your AniTrain account and associated personal data. You do not need to sign in to this website.
          </p>

          <div className="about-rule" />

          <div className="about-note-sections">
            <section>
              <span>01 · START THE REQUEST</span>
              <h2>Email AniTrain from the account email.</h2>
              <p>Send an email to <a href="mailto:anitrainapp@gmail.com"><strong>anitrainapp@gmail.com</strong></a> using the email address connected to your AniTrain account whenever possible.</p>
              <p>Use the subject <strong>Delete my AniTrain account</strong>. You may include your AniTrain username or display name if it helps us locate the account.</p>
              <p><strong>Never send your password.</strong></p>
            </section>

            <section>
              <span>02 · VERIFY THE ACCOUNT</span>
              <h2>We may confirm that the request is yours.</h2>
              <p>To protect accounts from unauthorized deletion, AniTrain may ask you to verify information connected to the account before completing the request.</p>
            </section>

            <section>
              <span>03 · WHAT IS DELETED</span>
              <h2>Account data associated with you.</h2>
              <p>After a verified deletion request, AniTrain will delete or de-identify personal data associated with the account from active systems where applicable, including account/profile information and AniTrain fitness or progress data linked to that account.</p>
            </section>

            <section>
              <span>04 · WHAT MAY BE RETAINED</span>
              <h2>Limited data may remain when necessary.</h2>
              <p>Some information may be retained when reasonably necessary for security, fraud prevention, legal obligations, dispute resolution, enforcement of agreements, or technical backup and disaster-recovery processes. Backup copies may take additional time to age out of protected backup systems.</p>
            </section>

            <section>
              <span>05 · THIS DELETES THE ACCOUNT</span>
              <h2>Deletion is different from uninstalling the app.</h2>
              <p>Removing AniTrain from your phone does not by itself delete an AniTrain account. Use the deletion request on this page when you want the account and associated data removed.</p>
            </section>

            <section>
              <span>NEED HELP?</span>
              <h2>Contact us directly.</h2>
              <p>If you cannot access the email address connected to your account, email <a href="mailto:anitrainapp@gmail.com"><strong>anitrainapp@gmail.com</strong></a> and explain the situation. We may request additional verification before acting on the request.</p>
            </section>
          </div>

          <div className="about-note-footer">
            <div><span>READY?</span><strong>Start your verified deletion request by email.</strong></div>
            <a href={deletionMail}>REQUEST ACCOUNT DELETION <b>↗</b></a>
          </div>
        </article>

        <aside className="about-character-note">
          <span className="about-small-tape" aria-hidden="true" />
          <span className="about-character-kicker">DELETION CHECKLIST</span>
          <h2>Three clear steps.</h2>
          <p><strong>1.</strong> Send the deletion request from your AniTrain account email.</p>
          <p><strong>2.</strong> Complete verification if we need to confirm ownership.</p>
          <p><strong>3.</strong> Account-linked personal data is deleted or de-identified from active systems where applicable.</p>
          <p><a href={deletionMail}><strong>Start deletion request ↗</strong></a></p>
          <div className="about-progress"><i className="active" /><i className="active" /><i className="active" /><i /><i /><i /></div>
        </aside>
      </section>
    </main>
  );
}
