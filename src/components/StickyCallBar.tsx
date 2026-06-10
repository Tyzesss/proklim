import { useEffect, useState } from "react";
import { MessageSquare, Phone } from "lucide-react";

import { PHONE_HREF, SMS_HREF } from "@/lib/site";

export function StickyCallBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 150);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-4 right-4 z-50 flex gap-3 rounded-2xl border border-border/60 bg-background/90 p-3 shadow-cool backdrop-blur-xl transition-all duration-300 transform md:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
      }`}
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
    >
      <a
        href={SMS_HREF}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-card text-foreground transition-smooth hover:bg-muted active:scale-95"
        aria-label="Wyślij SMS"
      >
        <MessageSquare className="h-5 w-5 text-accent" />
      </a>
      <a
        href={PHONE_HREF}
        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-accent py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth active:scale-[0.98]"
      >
        <Phone className="h-4 w-4" />
        Zadzwoń teraz
      </a>
    </div>
  );
}
