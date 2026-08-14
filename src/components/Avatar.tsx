export default function Avatar({
  title,
  subtitle,
  imgSrc,
  description,
}: {
  title: string;
  subtitle: string;
  imgSrc: string;
  description: string;
}) {
  return (
    <div className="flex items-center justify-center flex-col bg-purple-400">
      <img src={imgSrc} alt="Avatar" className="rounded-full" />
      <div>
        <p>{title}</p>
        <p>{subtitle}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}