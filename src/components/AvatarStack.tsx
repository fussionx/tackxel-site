// Overlapping circular avatar stack like LinkedIn / Notion "members" indicator

type Props = {
  className?: string;
};

function PortraitAvatar({
  size, skin, hair, shirt, ringColor = "#fff",
}: { size: number; skin: string; hair: string; shirt: string; ringColor?: string }) {
  return (
    <svg viewBox="0 0 60 60" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      {/* ring */}
      <circle cx="30" cy="30" r="29" fill={ringColor} />
      {/* background */}
      <circle cx="30" cy="30" r="27" fill={shirt} />
      <clipPath id={`clip-${shirt.replace("#", "")}`}>
        <circle cx="30" cy="30" r="27" />
      </clipPath>
      <g clipPath={`url(#clip-${shirt.replace("#", "")})`}>
        {/* shirt area */}
        <ellipse cx="30" cy="56" rx="22" ry="14" fill={shirt} />
        {/* head */}
        <circle cx="30" cy="26" r="13" fill={skin} />
        {/* hair */}
        <path d={`M 17 23 Q 18 12 30 12 Q 42 12 43 23 Q 36 19 30 19 Q 24 19 17 23`} fill={hair} />
      </g>
    </svg>
  );
}

// Five diverse team member avatars stacked horizontally
export const AvatarStack = ({ className = "" }: Props) => {
  const members = [
    { skin: "#E5C6A3", hair: "#2A1810", shirt: "#1F2937" }, // dark navy shirt
    { skin: "#C68B5D", hair: "#1A0F0A", shirt: "#374151" }, // light skin asian woman
    { skin: "#A66B3F", hair: "#0D0807", shirt: "#1F2937" }, // dark skinned male
    { skin: "#F2D4B4", hair: "#5C2E1A", shirt: "#374151" }, // beard man
    { skin: "#8B5E3C", hair: "#0A0605", shirt: "#1F2937" }, // dark skinned
  ];

  return (
    <div className={`flex items-center ${className}`}>
      {members.map((m, i) => (
        <div
          key={i}
          className="rounded-full"
          style={{ marginLeft: i === 0 ? 0 : -16 }}
        >
          <PortraitAvatar size={56} skin={m.skin} hair={m.hair} shirt={m.shirt} />
        </div>
      ))}
    </div>
  );
};
