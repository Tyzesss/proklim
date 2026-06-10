import { COMPANY_LEGAL_NAME, SITE_NAME } from "@/lib/site";
import { LOGO_WORDMARK } from "@/lib/brand";

type BrandMarkProps = {
  className?: string;
  wordmarkClassName?: string;
};

export function BrandMark({
  className = "flex items-center",
  wordmarkClassName = "h-9 w-auto max-w-[10rem] object-contain object-left",
}: BrandMarkProps) {
  return (
    <span className={className}>
      <img
        src={LOGO_WORDMARK}
        alt={`${SITE_NAME} — ${COMPANY_LEGAL_NAME}`}
        className={wordmarkClassName}
        width={160}
        height={36}
      />
    </span>
  );
}
