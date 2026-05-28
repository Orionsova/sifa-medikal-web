import type { IconName } from "@/data/site";

type IconProps = {
  name: IconName;
  className?: string;
};

export function Icon({ name, className = "h-6 w-6" }: IconProps) {
  const shared = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    className,
    "aria-hidden": true,
  };

  switch (name) {
    case "shield":
      return (
        <svg {...shared}>
          <path d="M12 3l7 3v6c0 4.4-2.7 7.8-7 9-4.3-1.2-7-4.6-7-9V6l7-3z" />
          <path d="M9.5 12.5l1.7 1.7 3.3-4" />
        </svg>
      );
    case "guide":
      return (
        <svg {...shared}>
          <path d="M8 19h8" />
          <path d="M12 3v12" />
          <path d="M5 8l7-5 7 5" />
        </svg>
      );
    case "phone":
      return (
        <svg {...shared}>
          <path d="M6.8 4.5h2.6l1.2 4-1.6 1.6a16.4 16.4 0 005 5l1.6-1.6 4 1.2v2.6c0 .8-.7 1.5-1.5 1.5C11.2 19.8 4.2 12.8 4.2 6c0-.8.7-1.5 1.6-1.5z" />
        </svg>
      );
    case "orthopedic":
      return (
        <svg {...shared}>
          <path d="M8 6c0-1.7 1.3-3 3-3h1" />
          <path d="M10 3h3a3 3 0 013 3v2a4 4 0 01-4 4h-2v9" />
          <path d="M14 12l4 7" />
        </svg>
      );
    case "therapy":
      return (
        <svg {...shared}>
          <path d="M4 13h4l2-6 4 12 2-6h4" />
        </svg>
      );
    case "insole":
      return (
        <svg {...shared}>
          <path d="M9 6c-2.5 0-4 1.8-4 4.3C5 14.7 8 19 10.8 19c1.4 0 2.2-.9 2.2-2.1C13 13.1 11.8 6 9 6z" />
          <path d="M15 5c-1.7 0-3 1.4-3 3.2 0 2.7 1.6 8.8 4.3 8.8 1.5 0 2.7-1.4 2.7-3.1C19 9.6 17.5 5 15 5z" />
        </svg>
      );
    case "compression":
      return (
        <svg {...shared}>
          <path d="M8 3h8" />
          <path d="M9 3v9c0 2 1.2 3.5 3 4.5 1.8-1 3-2.5 3-4.5V3" />
          <path d="M9 8h6" />
        </svg>
      );
    case "lymph":
      return (
        <svg {...shared}>
          <path d="M12 20s-6-3.7-6-9a3.5 3.5 0 016-2.2A3.5 3.5 0 0118 11c0 5.3-6 9-6 9z" />
        </svg>
      );
    case "prosthesis":
      return (
        <svg {...shared}>
          <path d="M7 7a5 5 0 0110 0v8a5 5 0 01-10 0V7z" />
          <path d="M9 10h6" />
        </svg>
      );
    case "pressure":
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="7" />
          <path d="M12 12l3-3" />
          <path d="M12 8v1" />
        </svg>
      );
    case "respiratory":
      return (
        <svg {...shared}>
          <path d="M9 5v14" />
          <path d="M15 7c2.2 0 4 1.8 4 4s-1.8 4-4 4h-1V7h1z" />
          <path d="M9 10H6a2 2 0 100 4h3" />
        </svg>
      );
    case "care":
      return (
        <svg {...shared}>
          <path d="M12 5v14" />
          <path d="M5 12h14" />
          <path d="M7 7h10v10H7z" />
        </svg>
      );
    case "location":
      return (
        <svg {...shared}>
          <path d="M12 21s6-5.5 6-11a6 6 0 10-12 0c0 5.5 6 11 6 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...shared}>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="M16.5 7.5h.01" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...shared}>
          <path d="M20 11.5A8.5 8.5 0 005.8 5.4 8.5 8.5 0 004.9 17l-.9 3.5 3.6-.9A8.5 8.5 0 0020 11.5z" />
          <path d="M9 9.5c.2-.4.5-.4.8-.4h.6c.2 0 .4 0 .6.5l.6 1.4c.1.2.1.4 0 .6l-.5.8c.6 1 1.5 1.8 2.5 2.4l.8-.5c.2-.1.4-.1.6 0l1.4.6c.5.2.5.4.5.6v.6c0 .3 0 .6-.4.8-.5.2-1 .3-1.5.2-2.7-.4-5.9-3.5-6.3-6.2-.1-.5 0-1 .2-1.4z" />
        </svg>
      );
    case "menu":
      return (
        <svg {...shared}>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...shared}>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </svg>
      );
    case "check":
      return (
        <svg {...shared}>
          <path d="M5 12l4 4L19 6" />
        </svg>
      );
    default:
      return null;
  }
}

