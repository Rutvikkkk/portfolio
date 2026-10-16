import React from "react";

export function ReactIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.05" fill="#00D8FE" />
      <g stroke="#00D8FE" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

export function NextjsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 180 180" fill="none">
      <circle cx="90" cy="90" r="90" fill="#000000" />
      <circle cx="90" cy="90" r="88" stroke="#FFFFFF" strokeWidth="4" />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="url(#paint0_linear_next)"
      />
      <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear_next)" />
      <defs>
        <linearGradient
          id="paint0_linear_next"
          x1="109"
          y1="116.5"
          x2="144.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_next"
          x1="121"
          y1="54"
          x2="120.799"
          y2="106.875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function NodeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 289" fill="none">
      <path
        d="M128 0L256 74V215L128 289L0 215V74L128 0Z"
        fill="#539E43"
      />
      <path
        d="M128 14L243 81V208L128 274L13 208V81L128 14Z"
        fill="#333333"
      />
      <path
        d="M128 70C96 70 70 96 70 128C70 160 96 186 128 186C160 186 186 160 186 128C186 96 160 70 128 70ZM128 162C109 162 94 147 94 128C94 109 109 94 128 94C147 94 162 109 162 128C162 147 147 162 128 162Z"
        fill="#539E43"
      />
    </svg>
  );
}

export function MongoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 1.5C11.6 1.8 7.5 7.1 7.5 13.2C7.5 18 10.1 21.2 11.8 22.3C11.9 22.4 12 22.4 12.1 22.3C13.8 21.2 16.5 18 16.5 13.2C16.5 7.1 12.4 1.8 12 1.5Z"
        fill="#00ED64"
      />
      <path
        d="M12 1.5V22.5C12.1 22.5 12.1 22.4 12.2 22.3C13.9 21.2 16.6 18 16.6 13.2C16.6 7.1 12.5 1.8 12.1 1.5H12Z"
        fill="#00684A"
      />
      <path
        d="M12 22.5V1.5C11.6 1.8 7.5 7.1 7.5 13.2C7.5 18 10.1 21.2 11.8 22.3C11.9 22.4 12 22.5 12 22.5Z"
        fill="#023430"
        opacity="0.3"
      />
    </svg>
  );
}

export function TailwindIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function SupabaseIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M13.359 1.583a.75.75 0 0 0-1.298.53v8.637H3.125a.75.75 0 0 0-.584 1.222l8.936 11.042a.75.75 0 0 0 1.298-.53v-8.637h8.936a.75.75 0 0 0 .584-1.222L13.359 1.583Z"
        fill="#3ECF8E"
      />
    </svg>
  );
}
