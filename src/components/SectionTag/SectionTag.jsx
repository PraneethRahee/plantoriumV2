export default function SectionTag({ children, className = '' }) {
  return (
    <span className={`section-tag ${className}`}>
      <span className="grid grid-cols-2 gap-[1px] w-[11px] h-[11px]" aria-hidden="true">
        <img src="/assets/logo/1.png" alt="" />
        <img src="/assets/logo/2.png" alt="" />
        <img src="/assets/logo/3.png" alt="" />
        <img src="/assets/logo/4.png" alt="" />
      </span>
      {children}
    </span>
  )
}
