import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_z9trl17",
        "template_oryp3ky",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        "yrD-HAhiaPwpLZ6z6"
      );

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-6" />

            {/* Description */}
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of something meaningful. Feel free to reach out.
            </p>

            {/* Contact Links */}
            <div className="space-y-4">

              <a
                href="mailto:arunkumarakx1129@gmail.com"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={18} />
                </div>
                <span className="text-sm">arunkumarakx1129@gmail.com</span>
              </a>

              <a
                href="tel:+916380436268"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary" size={18} />
                </div>
                <span className="text-sm">+91 6380436268</span>
              </a>

              <a
                href="https://github.com/Arunkumar-1129"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Github className="text-primary" size={18} />
                </div>
                <span className="text-sm">GitHub</span>
              </a>

              <a
                href="http://www.linkedin.com/in/arun-kumar-p-p"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="text-primary" size={18} />
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>

            </div>
          </motion.div>


          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <div className="w-16 h-1 bg-primary rounded-full mb-6" />

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 space-y-5"
            >

              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground text-sm focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all glow-cyan disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending...
                  </>
                ) : status === "sent" ? (
                  <>
                    <CheckCircle size={18} /> Message Sent!
                  </>
                ) : status === "error" ? (
                  <>Failed. Try again</>
                ) : (
                  <>
                    <Send size={18} /> Send Message
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;