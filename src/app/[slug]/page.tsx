import React from "react";
import { routes } from "../routes";
import dynamic from "next/dynamic";

interface PageProps {
  params: { slug: string | string[] }; // `slug` can be a string or an array
}

export default function DynamicPage({ params }: PageProps) {
  // Normalize `params.slug` to an array
  const slugPathArray = Array.isArray(params.slug)
    ? params.slug
    : [params.slug];
  const slugPath = `/${slugPathArray.join("/")}`; // Convert to a path string

  // Find the route from the routes array
  const route = routes.find((r) => r.path === slugPath);

  if (!route) {
    return <h1>404 - Page Not Found</h1>;
  }

  // Dynamically import the correct component based on the route
  const Component = dynamic(
    () => import(`../themes/default/pages/${route.component}`)
  );

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Component />
    </React.Suspense>
  );
}
