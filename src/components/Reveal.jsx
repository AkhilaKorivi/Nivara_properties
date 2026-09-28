import { useReducedMotion, useReveal } from '../hooks/useReveal'

export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0, variant = 'up', ...rest }) {
  const reduced = useReducedMotion()
  const [ref, visible] = useReveal()
  return (
    <Tag
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? 'is-visible' : ''} ${className}`}
      style={reduced ? undefined : { transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}