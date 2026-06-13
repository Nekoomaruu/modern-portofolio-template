import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/data/config";
import SectionHeading from "./SectionHeading";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!site.formspreeEndpoint || site.formspreeEndpoint.includes("your-id")) {
      // No endpoint configured — fall back to a mailto link.
      const subject = encodeURIComponent(`Portfolio contact from ${data.get("name")}`);
      const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} <${data.get("email")}>`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      return;
    }

    try {
      setStatus("loading");
      const res = await fetch(site.formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="container-mono py-24 md:py-32">
      <SectionHeading
        eyebrow="Say hello"
        title="Contact"
        description="Have a project in mind or just want to chat? Drop a message."
      />
      <form onSubmit={onSubmit} className="reveal grid gap-4 max-w-xl">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            required
            name="name"
            placeholder="Your name"
            maxLength={100}
            className="h-11 px-4 rounded-md bg-card border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="you@example.com"
            maxLength={255}
            className="h-11 px-4 rounded-md bg-card border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <textarea
          required
          name="message"
          placeholder="Your message…"
          rows={5}
          maxLength={2000}
          className="px-4 py-3 rounded-md bg-card border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y"
        />
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground" aria-live="polite">
            {status === "success" && "✓ Message sent. Talk soon!"}
            {status === "error" && "Something went wrong. Try again."}
            {status === "idle" && "Powered by Formspree."}
            {status === "loading" && "Sending…"}
          </p>
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
