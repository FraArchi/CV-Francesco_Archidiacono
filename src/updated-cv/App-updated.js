import React, { useState } from "react";

function CardSection({ title, icon, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-2xl shadow-md p-5 transition-all duration-300">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h3 className="text-lg font-semibold text-blue-900 flex items-center gap-2">
          <i className={`fas ${icon}`}></i> {title}
        </h3>
        <span className="text-blue-500">{open ? '−' : '+'}</span>
      </div>
      {open && <div className="mt-4 text-sm text-gray-700">{children}</div>}
    </div>
  );
}

export default function CVFrancesco() {
  return (
    <div className="bg-gray-100 min-h-screen p-6 text-gray-800 font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-3 gap-6 p-8">

        {/* Left Column */}
        <div className="space-y-6">

          {/* Photo */}
          <div className="flex justify-center">
            <img
              src="/photo.jpg"
              alt="Francesco Archidiacono"
              className="w-36 h-36 rounded-full object-cover border-4 border-blue-100 shadow-md"
            />
          </div>

          <CardSection title="Contact" icon="fa-envelope">
            <p>Email: <a href="mailto:flarchidiacono@gmail.com" className="text-blue-600 hover:underline">flarchidiacono@gmail.com</a></p>
            <p>Location: Avellino, Italy (Remote)</p>
            <p>Age: 19</p>
          </CardSection>

          <CardSection title="Languages" icon="fa-language">
            <ul className="list-disc ml-5 space-y-1">
              <li>Italian: native</li>
              <li>English: fluent</li>
              <li>French: basic</li>
            </ul>
          </CardSection>

          <CardSection title="Personal Skills" icon="fa-lightbulb">
            <ul className="list-disc ml-5 space-y-1">
              <li>Reliable, organized, self-taught</li>
              <li>Strong written communication</li>
              <li>Analytical thinking</li>
              <li>Problem solving</li>
              <li>Simplifies complex concepts</li>
            </ul>
          </CardSection>

          <CardSection title="Interests" icon="fa-heart">
            <ul className="list-disc ml-5 space-y-1">
              <li>Artificial Intelligence</li>
              <li>IT Automation</li>
              <li>Reading &amp; writing</li>
              <li>Volunteering</li>
              <li>Prompt design</li>
            </ul>
          </CardSection>

        </div>

        {/* Right Column */}
        <div className="md:col-span-2 space-y-6">

          {/* Name heading */}
          <div>
            <h1 className="text-4xl font-bold text-gray-300 tracking-wide">Francesco Archidiacono</h1>
            <p className="text-blue-700 font-medium mt-1">AI Automation Specialist · Linux &amp; CLI Power User</p>
          </div>

          <CardSection title="Profile" icon="fa-user-circle">
            <p>
              Self-taught technology enthusiast with a strong focus on AI tools, workflow automation,
              and Linux-based environments. I work daily with CLI tools — including{" "}
              <strong>qwen-code</strong>, <strong>gemini-cli</strong>, and other AI-powered terminal tools —
              and I am deeply familiar with the main large language models (ChatGPT, Claude, Gemini,
              DeepSeek, Qwen, Grok, Kimi). I have hands-on experience deploying real automations in
              business contexts, including an email-to-WhatsApp notification system built and maintained
              for a local IT company. Fluent in English, available for remote work.
            </p>
          </CardSection>

          <CardSection title="Education" icon="fa-graduation-cap">
            <div className="space-y-3">
              <div>
                <p><strong>Diploma AFM – Administration, Finance &amp; Marketing</strong></p>
                <p className="text-gray-500">Istituto Enrico Fermi, Vallata (AV)</p>
              </div>
              <div>
                <p><strong>Self-taught · AI Tools &amp; Prompt Engineering</strong></p>
                <p className="text-gray-500 text-xs">
                  Daily use of ChatGPT, Claude, Gemini, DeepSeek, Qwen, Grok, Kimi —
                  advanced prompt design techniques, LLM chaining, structured outputs
                </p>
              </div>
              <div>
                <p><strong>Self-taught · Linux &amp; CLI Automation</strong></p>
                <p className="text-gray-500 text-xs">
                  Intermediate Linux user — terminal-first workflow, bash scripting,
                  AI CLI tools: qwen-code, gemini-cli, kimi-code, opencode, codex
                </p>
              </div>
            </div>
          </CardSection>

          <CardSection title="Experience" icon="fa-briefcase">
            <div className="space-y-4">

              <div>
                <p><strong>IT Collaboration – A.M. Technology s.r.l.s</strong></p>
                <p className="text-gray-500 text-xs">Grottaminarda (AV) · 2025</p>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>
                    Designed and deployed an <strong>email-to-WhatsApp automation</strong> system on Linux,
                    replacing a fully manual notification workflow
                  </li>
                  <li>
                    Resolved a Google anti-spam block during deployment independently,
                    restoring full functionality within a few hours
                  </li>
                  <li>Provided practical IT support and assisted with digital operations</li>
                </ul>
              </div>

              <div>
                <p><strong>Virtual Assistant &amp; AI Tools Specialist</strong></p>
                <p className="text-gray-500 text-xs">Freelance · 2023 – present</p>
                <ul className="list-disc ml-5 mt-1 space-y-1">
                  <li>Email management, scheduling, documents, and presentations</li>
                  <li>Prompt development, AI-assisted writing, research support</li>
                  <li>Workflow automation using free and open-source AI tools</li>
                </ul>
              </div>

              <div>
                <p><strong>English Tutor</strong></p>
                <p className="text-gray-500 text-xs">Private · middle and high school students</p>
              </div>

            </div>
          </CardSection>

          <CardSection title="Technical Skills" icon="fa-cogs">
            <ul className="list-disc ml-5 space-y-1">
              <li>Linux – intermediate (terminal-first, bash scripting, file system, networking basics)</li>
              <li>AI CLI tools: qwen-code, gemini-cli, kimi-code, opencode, codex</li>
              <li>LLM expertise: ChatGPT, Claude, Gemini, DeepSeek, Qwen, Grok, Kimi</li>
              <li>Prompt design &amp; engineering (system prompts, few-shot, chaining)</li>
              <li>Email &amp; WhatsApp API automation (unofficial + Twilio-compatible)</li>
              <li>Content generation and synthesis with LLMs</li>
              <li>Office suite &amp; Google Workspace</li>
              <li>Persuasive and structured writing</li>
            </ul>
          </CardSection>

        </div>
      </div>
    </div>
  );
}
