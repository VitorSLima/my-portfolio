import { techIcons } from "@/lib/techIcons";

type TechTagProps = {
  label: string;
  /** "lg" é a versão em destaque usada na Home */
  size?: "sm" | "lg";
};

export default function TechTag({ label, size = "sm" }: TechTagProps) {
  const icon = techIcons[label];
  const isLarge = size === "lg";

  return (
    <span
      className={`font-inconsolata inline-flex items-center whitespace-nowrap border ${
        isLarge
          ? "gap-2.5 rounded-full px-5 py-2.5 text-base"
          : "gap-1.5 rounded-md px-2 py-0.5 text-xs"
      }`}
      style={{
        borderColor: isLarge ? '#3A3F4B' : '#292C34',
        backgroundColor: isLarge ? '#16181D' : undefined,
        color: isLarge ? '#E2E4E9' : '#C0C4CE',
      }}
    >
      {icon && (
        <svg
          viewBox="0 0 24 24"
          width={isLarge ? 22 : 14}
          height={isLarge ? 22 : 14}
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
