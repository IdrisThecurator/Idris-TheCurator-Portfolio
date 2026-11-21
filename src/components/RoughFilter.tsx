/** Hand-drawn edge used by the card borders. Render once per page; reference with filter: url(#rough-edge). */
export default function RoughFilter() {
  return (
    <svg aria-hidden width="0" height="0" className="absolute">
      <filter id="rough-edge" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="3" seed="7" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
      </filter>
    </svg>
  );
}
