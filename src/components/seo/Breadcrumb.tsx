import Link from "next/link";

type BreadcrumbProps = {
  items: {
    name: string;
    href: string;
  }[];
};


export default function Breadcrumb({
  items,
}: BreadcrumbProps) {


  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item:
        `https://azar-bonian-marava.vercel.app${item.href}`,
    })),

  };


  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />


      <nav className="text-sm text-white/60 mb-8">

        <ol className="flex gap-2">

          {items.map((item, index) => (

            <li key={item.href}>

              <Link
                href={item.href}
                className="hover:text-accent transition"
              >
                {item.name}
              </Link>

              {index !== items.length - 1 && (
                <span className="mx-2">
                  /
                </span>
              )}

            </li>

          ))}

        </ol>

      </nav>
    </>
  );
}