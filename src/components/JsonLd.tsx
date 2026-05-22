// Renders one or more JSON-LD structured-data objects into the page <head>/body.
// Server-safe (no "use client") so the markup is in the prerendered HTML for crawlers.

export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
