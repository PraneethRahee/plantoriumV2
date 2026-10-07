function leaf(x, y, [tl, tr, br, bl]) {
  const w = 108
  const h = 104
  return (
    `M${x + tl} ${y}H${x + w - tr}` +
    (tr ? `A${tr} ${tr} 0 0 1 ${x + w} ${y + tr}` : '') +
    `V${y + h - br}` +
    (br ? `A${br} ${br} 0 0 1 ${x + w - br} ${y + h}` : '') +
    `H${x + bl}` +
    (bl ? `A${bl} ${bl} 0 0 1 ${x} ${y + h - bl}` : '') +
    `V${y + tl}` +
    (tl ? `A${tl} ${tl} 0 0 1 ${x + tl} ${y}` : '') +
    'Z'
  )
}

const R = 50
const DARK = '#12291f'
const GREEN = '#2e7d4f'

export default function CloverMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 230 222" aria-hidden="true">
      <path d={leaf(0, 0, [R, R, 0, R])} fill={DARK} />
      <path d={leaf(122, 0, [R, R, R, 0])} fill={GREEN} />
      <path d={leaf(0, 118, [R, 0, R, R])} fill={GREEN} />
      <path d={leaf(122, 118, [0, R, R, R])} fill={DARK} />
    </svg>
  )
}
