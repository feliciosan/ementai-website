export default function HeroInfo({
  titleStart,
  titleEndColored,
  description,
}: {
  titleStart: string;
  titleEndColored: string;
  description: string;
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-10 text-center">
        {titleStart}
        <span className="text-teal-600"> {titleEndColored}</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
        {description}
      </p>
    </div>
  );
}
