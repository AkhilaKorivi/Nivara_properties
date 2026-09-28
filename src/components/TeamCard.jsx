import Reveal from './Reveal'

export default function TeamCard({ member, index = 0 }) {
  return (
    <Reveal variant="up" className="team-card" style={{ ['--tm-index']: index }}>
      <div className="team-avatar">
        <span className="team-initials">{member.initials}</span>
      </div>
      <p className="team-role">{member.role}</p>
      <p className="team-focus">{member.focus}</p>
      <p className="team-bio">{member.bio}</p>
    </Reveal>
  )
}