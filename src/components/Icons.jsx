const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const ArrowRight = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><path d="M4 12h15M13 6l6 6-6 6" /></svg>
)

export const ArrowDown = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><path d="M12 4v15M6 13l6 6 6-6" /></svg>
)

export const Play = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><path d="M7 5.5v13l11-6.5z" fill="currentColor" stroke="none" /></svg>
)

export const Close = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><path d="M6 6l12 12M18 6L6 18" /></svg>
)

export const MenuIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><path d="M3 7h18M3 12h18M3 17h18" /></svg>
)

export const Pause = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><path d="M8 5v14M16 5v14" strokeWidth={2} /></svg>
)

export const VolumeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><path d="M4 9v6h4l5 4V5L8 9H4z" /><path d="M16.5 8.5a5 5 0 010 7M19 6a9 9 0 010 12" /></svg>
)

export const MuteIcon = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><path d="M4 9v6h4l5 4V5L8 9H4z" /><path d="M16.5 8.5l5 7M21.5 8.5l-5 7" /></svg>
)

export const Maximize = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" /></svg>
)

export const Instagram = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><rect x="3.5" y="3.5" width="17" height="17" rx="4.5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" /></svg>
)

export const Facebook = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><path d="M14 8.5V7a1.5 1.5 0 011.5-1.5H17V2.5h-2.5A4.5 4.5 0 0010 7v1.5H7.5V13H10v9h4v-9h2.7l.8-4.5H14z" /></svg>
)

export const LinkedIn = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><rect x="3.5" y="3.5" width="17" height="17" rx="2.5" /><path d="M8 10.5V17M8 7.5v.5" /><path d="M12 17v-4a2.5 2.5 0 010-5 2.5 2.5 0 012.5 2.5V17" /></svg>
)

export const YouTube = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><rect x="2.5" y="6" width="19" height="12.5" rx="3.5" /><path d="M10.2 9.8l4.6 2.7-4.6 2.7v-5.4z" fill="currentColor" stroke="none" /></svg>
)

export const MapPin = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><path d="M12 21s-6.5-5.4-6.5-10.2a6.5 6.5 0 0113 0C18.5 15.6 12 21 12 21z" /><circle cx="12" cy="10.5" r="2.5" /></svg>
)

export const Phone = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><path d="M5 4h4l1.5 4L8 10a12 12 0 006 6l2-2.5 4 1.5v4a2 2 0 01-2 2A17 17 0 013 6a2 2 0 012-2z" /></svg>
)

export const Mail = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><rect x="3.5" y="5.5" width="17" height="13" rx="2" /><path d="M4 7l8 6 8-6" /></svg>
)

export const Check = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
)

export const Plus = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><path d="M12 5v14M5 12h14" /></svg>
)

export const QuoteMark = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><path d="M9.5 7C6.7 8 5 10.3 5 13.6V17h4.5v-4.5H7.3c0-1.8.8-3.1 2.7-4L9.5 7zm9 0c-2.8 1-4.5 3.3-4.5 6.6V17H18.5v-4.5h-2.2c0-1.8.8-3.1 2.7-4L18.5 7z" fill="currentColor" stroke="none" /></svg>
)

export const Calendar = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><rect x="3.5" y="5" width="17" height="15.5" rx="2" /><path d="M3.5 9.5h17M8 2.5V6M16 2.5V6" /></svg>
)

export const Chip = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><rect x="7" y="7" width="10" height="10" rx="1.5" /><path d="M10 7V3M14 7V3M10 21v-4M14 21v-4M7 10H3M7 14H3M21 10h-4M21 14h-4" /></svg>
)

export const Leaf = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><path d="M5 19c0-8 5-14 14-15-1 9-7 14-14 15z" /><path d="M5 19c3-6 8-9 12-10" /></svg>
)

export const Spark = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" /></svg>
)

export const Building = (props) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...base} {...props}><path d="M4 21V5a1 1 0 011-1h9a1 1 0 011 1v16M15 10h4a1 1 0 011 1v10M2.5 21h19" /><path d="M7.5 8h2M7.5 12h2M7.5 16h2M11.5 8h2M11.5 12h2" /></svg>
)