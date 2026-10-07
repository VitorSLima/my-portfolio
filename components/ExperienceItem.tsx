type ExperienceItemProps = {
  company: string;
  role: string;
  period: string;
  current: boolean;
  bullets: string[];
};

export default function ExperienceItem({
  company,
  role,
  period,
  current,
  bullets,
}: ExperienceItemProps) {
  return (
    <li className="relative pb-10 pl-8 last:pb-0">
      {/* Marcador na linha do tempo; o cargo atual vem preenchido */}
      <span
        aria-hidden="true"
        className="absolute -left-[7.5px] top-1.5 h-3.5 w-3.5 rounded-full border-2"
        style={{
          borderColor: '#3996DB',
          backgroundColor: current ? '#3996DB' : '#0D0E11',
        }}
      />
      <p className="font-inconsolata text-sm" style={{ color: '#3996DB' }}>
        {period}
      </p>
      <h3 className="font-asap mt-1 text-xl font-semibold" style={{ color: '#E2E4E9' }}>
        {company}
      </h3>
      <p className="font-maven text-sm" style={{ color: '#C0C4CE' }}>
        {role}
      </p>
      <ul className="font-maven mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed" style={{ color: '#878EA1' }}>
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </li>
  );
}
