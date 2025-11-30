import Image from "next/image";

// ...inside your Footer JSX:
<div className="flex items-center gap-2">
  <Image
    src="/luma-sigil.svg"
    alt="LUMA sigil"
    width={28}
    height={28}
    className="opacity-80"
  />
  <span className="text-xs text-slate-300/80">
    LUMA Economy · A Living Economy of Light
  </span>
</div>
