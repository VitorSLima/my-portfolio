type StatCardProps = {
  value: string;
  title: string;
  label: string;
};

export default function StatCard({ value, title, label }: StatCardProps) {
  return (
    <div
      className="h-full rounded-2xl border p-6 text-center"
      style={{ backgroundColor: '#0D0E11', borderColor: '#292C34' }}
    >
      <p className="font-asap text-4xl font-bold" style={{ color: '#3996DB' }}>
        {value}
      </p>
      <p className="font-asap mt-2 text-base font-semibold" style={{ color: '#E2E4E9' }}>
        {title}
      </p>
      <p className="font-maven mt-3 text-sm leading-relaxed" style={{ color: '#878EA1' }}>
        {label}
      </p>
    </div>
  );
}
