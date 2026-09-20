type Props = {
  src?: string;
  title: string;
  caption?: string;
};

export default function VideoTalk({ src, title, caption }: Props) {
  const isYoutube = src?.includes("youtube.com") || src?.includes("youtu.be");
  const isInsta = src?.includes("instagram.com");
  return (
    <div className="rounded-[1.6rem] border border-sand bg-cream/60 p-4">
      <div className="relative aspect-video overflow-hidden rounded-[1.2rem] bg-sand/40">
        {src ? (
          isYoutube ? (
            <iframe
              src={src.replace("watch?v=", "embed/").replace("youtu.be/", "www.youtube.com/embed/")}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <embed
              className="absolute inset-0 h-full w-full"
              style={{ width: 720, height: 405 }}
              src={`${src}${src.includes("?") ? "&" : "?"}embed=true`}
              title={title}
            />
          )
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-sand bg-white text-clay">▶</span>
            <p className="px-6 text-[13px] leading-relaxed text-faint">
              A short recorded explanation will live here soon
            </p>
          </div>
        )}
      </div>
      <p className="mt-4 px-1 text-[14px] font-semibold text-ink">{title}</p>
      {caption && <p className="mt-1 px-1 pb-1 text-[13px] text-mute">{caption}</p>}
      {isInsta && null}
    </div>
  );
}
