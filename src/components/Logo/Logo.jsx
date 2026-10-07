import CloverMark from './CloverMark'

export default function Logo({ className = '', textClassName = '' }) {
  return (
    <a href="/" data-transition className={`flex items-center gap-2 ${className}`} aria-label="Coco Studio home">
      <CloverMark className="w-8 h-8 shrink-0" />
      <span className={`font-logo text-[27px] leading-none uppercase text-[#10261b] ${textClassName}`}>
        Coco Studio
      </span>
    </a>
  )
}
