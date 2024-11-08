import Image from "next/image";

export default function GameCategory({ category }) {
  return (
    <section className="mb-4">
      <div className="flex justify-between gap-4">
        <h2 className="font-display mb-4 items-center">{category.title}</h2>
        <a
          href={`/category/${category.slug}`}
          className="text-sm font-medium hover:underline underline-offset-4 flex items-center"
        >
          View All
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 ml-1 text-accent"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {category.games.map((game) => (
          <a
            href={`/game/${game.slug}`}
            key={game.id}
            className="group"
          >
            <div className="overflow-hidden rounded-lg border border-accent-secondary mb-2">
              <Image
                src={`/game/${game.image}`}
                width={300}
                height={300}
                alt={game.title}
                quality={80}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="text-sm text-accent">{category.title}</p>
            <h1 className="font-medium">{game.title}</h1>
          </a>
        ))}
      </div>
    </section>
  );
}
