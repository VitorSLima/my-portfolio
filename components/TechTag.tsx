type TechTagProps = {
  label: string;
};

export default function TechTag({ label }: TechTagProps) {
  return (
    <span
      className="font-inconsolata rounded-md border px-2 py-0.5 text-xs"
      style={{
        borderColor: '#292C34',
        color: '#C0C4CE',
      }}
    >
      {label}
    </span>
  );
}
