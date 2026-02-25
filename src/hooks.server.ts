import type { Handle } from "@sveltejs/kit";

type HTMLAttributes = {
  "data-layout": "white" | "standard";
  "data-theme": "light" | "dark";
};

const addHtmlAttributes = (html: string, attrs: HTMLAttributes) =>
  html.replace(
    "<html",
    `<html ${Object.entries(attrs)
      .map(([key, val]) => `${key}="${val}"`)
      .join(" ")}`,
  );

export const handle: Handle = async ({ event, resolve }) => {
  let slug = event.route.id?.split("/").join("");
  let layout: HTMLAttributes["data-layout"] =
    slug !== "" ? "white" : "standard";
  const response = await resolve(event, {
    transformPageChunk: ({ html }) =>
      addHtmlAttributes(html, {
        "data-layout": layout,
        "data-theme": "light",
      }),
  });
  return response;
};
