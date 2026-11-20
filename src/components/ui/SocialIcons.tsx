import type { ReactNode } from "react";

type Social = {
  label: string;
  href: string;
  icon: ReactNode;
};

/* Shared wrapper so every icon has the same size and stroke */
function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
      aria-hidden
    >
      {children}
    </svg>
  );
}

function Instagram() {
  return (
    <Icon>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </Icon>
  );
}

function TikTok() {
  return (
    <Icon>
      <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
      <path d="M14 3c.3 2.3 1.9 4 4.5 4.2" />
    </Icon>
  );
}

function Facebook() {
  return (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="M13.5 21v-8h2.3l.4-2.7h-2.7V8.6c0-.8.3-1.3 1.4-1.3h1.4V5c-.3 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5v1.9H8.5V13h2.4v8" />
    </Icon>
  );
}

function LinkedIn() {
  return (
    <Icon>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V16" />
      <circle cx="8" cy="7.7" r="0.6" fill="currentColor" />
      <path d="M12 16v-5.5" />
      <path d="M12 13c0-1.5 1-2.5 2.3-2.5S16.5 11.5 16.5 13v3" />
    </Icon>
  );
}

/* Change the href values to your real profiles */
export const SOCIALS: Social[] = [
  { label: "Instagram", href: "https://instagram.com", icon: <Instagram /> },
  { label: "TikTok", href: "https://tiktok.com", icon: <TikTok /> },
  { label: "Facebook", href: "https://facebook.com", icon: <Facebook /> },
  { label: "LinkedIn", href: "https://linkedin.com", icon: <LinkedIn /> },
];
