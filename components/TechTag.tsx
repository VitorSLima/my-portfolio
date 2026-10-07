import { techIcons } from "@/lib/techIcons";

type TechTagProps = {
  label: string;
};

export default function TechTag({ label }: TechTagProps) {
  const icon = techIcons[label];

  return (
    <span
      className="font-inconsolata inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-xs"
      style={{
        borderColor: '#292C34',
        color: '#C0C4CE',
      }}
    >
      {icon && (
        <svg
          viewBox="0 0 24 24"
          width={14}
          height={14}
          fill={icon.color}
          aria-hidden="true"
          className="shrink-0"
        >
          <path d={icon.path} />
        </svg>
      )}
      {label}
    </span>
  );
}
