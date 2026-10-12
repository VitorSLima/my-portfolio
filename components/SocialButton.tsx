import type { ElementType } from "react";
import { ArrowUpRight, Download } from "lucide-react";

type SocialButtonProps = {
  label: string;
  href: string;
  Icon: ElementType;
  /** Nome do arquivo: faz o link baixar em vez de abrir em nova aba */
  download?: string;
};

export default function SocialButton({
  label,
  href,
  Icon,
  download,
}: SocialButtonProps) {
  return (
    <a
      className="group flex w-full items-center justify-between rounded-lg border px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:!border-[#3996DB] hover:!bg-[rgba(57,150,219,0.1)]"
      href={href}
      {...(download
        ? { download }
        : { target: "_blank", rel: "noopener noreferrer" })}
      style={{ 
        backgroundColor: '#16181D',
        borderColor: '#292C34',
        color: '#E2E4E9'
      }}
    >
      <span className="flex items-center gap-3">
        <Icon size={20} style={{ color: '#3996DB' }} />
        <span className="font-medium">{label}</span>
      </span>
      {download ? (
        <Download
          size={18}
          className="transition-transform group-hover:translate-y-0.5"
          style={{ color: '#3996DB' }}
        />
      ) : (
        <ArrowUpRight
          size={18}
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          style={{ color: '#3996DB' }}
        />
      )}
    </a>
  );
}
