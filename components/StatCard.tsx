type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div
      className="rounded-2xl border p-6 text-center"
      style={{ backgroundColor: '#16181D', borderColor: '#292C34' }}
    >
      <p className="font-asap text-4xl font-bold" style={{ color: '#3996DB' }}>
        {value}
      </p>
      <p className="font-maven mt-2 text-sm leading-relaxed" style={{ color: '#878EA1' }}>
        {label}
      </p>
    </div>
  );
}
