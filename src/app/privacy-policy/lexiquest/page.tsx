import React from "react";

export default function LexiQuestPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Header */}
        <div className="rounded-3xl bg-white shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-8 py-10 text-white">
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
            <p className="mt-3 text-indigo-100">
              LexiQuest • Last Updated: July 2026
            </p>
          </div>

          <div className="p-8 space-y-10">
            {/* Intro */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900">
                Welcome to LexiQuest
              </h2>

              <p className="mt-4 text-slate-600 leading-8">
                LexiQuest ("we", "our", or "us") respects your privacy. This
                Privacy Policy explains how our application collects, uses, and
                protects your information while you use our vocabulary learning
                platform.
              </p>
            </section>

            {/* Information */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900">
                Information We Collect
              </h2>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-slate-50 p-5 border">
                  <h3 className="font-semibold text-lg">Learning Progress</h3>
                  <p className="mt-2 text-slate-600">
                    Your learning progress, completed modules, streaks,
                    downloaded study packs, and test results are stored locally
                    on your device.
                  </p>
                </div>

                <div className="rounded-xl bg-slate-50 p-5 border">
                  <h3 className="font-semibold text-lg">
                    Diagnostic Information
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Crash reports and anonymous diagnostic information may be
                    collected to improve app stability and performance.
                  </p>
                </div>
              </div>
            </section>

            {/* Offline */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900">
                Offline Learning
              </h2>

              <p className="mt-4 text-slate-600 leading-8">
                Study packs are downloaded directly to your device for offline
                learning. Your vocabulary progress, module completion, and test
                history remain stored locally unless future cloud
                synchronization features are introduced.
              </p>
            </section>

            {/* Permissions */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900">
                Permissions
              </h2>

              <ul className="mt-4 space-y-3 text-slate-600 list-disc pl-6">
                <li>Internet access for downloading study packs.</li>
                <li>Network access for advertisements.</li>
                <li>
                  Storage access (if required by your Android version) for
                  downloaded learning content.
                </li>
              </ul>
            </section>

            {/* Ads */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900">
                Advertising
              </h2>

              <p className="mt-4 text-slate-600 leading-8">
                LexiQuest displays advertisements provided by
                <strong> Google AdMob</strong>. AdMob may collect device
                identifiers, advertising identifiers, approximate location,
                interaction data, and other information as described in Google's
                Privacy Policy to provide and improve personalized or
                non-personalized advertisements.
              </p>

              <p className="mt-4 text-slate-600 leading-8">
                We do not control how Google collects or processes this
                information. Please review Google's Privacy Policy for more
                details.
              </p>
            </section>

            {/* Third Party */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900">
                Third-Party Services
              </h2>

              <ul className="mt-4 space-y-3 text-slate-600 list-disc pl-6">
                <li>Google AdMob</li>
                <li>Google Play Services</li>
                <li>Firebase services (if introduced in future updates)</li>
              </ul>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900">
                Data Security
              </h2>

              <p className="mt-4 text-slate-600 leading-8">
                We take reasonable precautions to protect your information.
                However, no electronic storage or transmission method is
                completely secure.
              </p>
            </section>

            {/* Children */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900">
                Children's Privacy
              </h2>

              <p className="mt-4 text-slate-600 leading-8">
                LexiQuest is not intended for children under 13 years of age. We
                do not knowingly collect personal information from children.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-2xl font-semibold text-slate-900">
                Changes to This Privacy Policy
              </h2>

              <p className="mt-4 text-slate-600 leading-8">
                We may update this Privacy Policy periodically. Any changes will
                be published on this page along with the updated revision date.
              </p>
            </section>

            {/* Contact */}
            <section className="rounded-2xl bg-indigo-50 border border-indigo-200 p-6">
              <h2 className="text-2xl font-semibold text-slate-900">
                Contact Us
              </h2>

              <p className="mt-4 text-slate-600">
                If you have any questions or concerns regarding this Privacy
                Policy, feel free to contact us:
              </p>

              <div className="mt-5">
                <p className="font-medium text-slate-900">📧 Email</p>

                <p className="text-indigo-600 font-semibold">
                  satya95340@gmail.com
                </p>
              </div>
            </section>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} LexiQuest. All rights reserved.
        </p>
      </div>
    </div>
  );
}
