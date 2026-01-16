import Image from "next/image";

type TechChipProps = {
  label: string;
  image: string;
};

export default function TechChip({ label, image }: TechChipProps) {
  return (
    <span 
      className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium"
      style={{ 
        backgroundColor: '#16181D',
        borderColor: '#292C34',
        color: '#E2E4E9'
      }}
    >
      <Image 
        src={image} 
        alt={label} 
        width={18} 
        height={18} 
        className="h-[18px] w-[18px] object-contain"
      />
      {label}
    </span>
  );
}
