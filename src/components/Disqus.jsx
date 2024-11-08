"use client";
import { DiscussionEmbed } from "disqus-react";

export default function Disqus({ url, identifier, title}) {
  return (
    <DiscussionEmbed
      shortname="mayo-games"
      config={{
        url: url,
        identifier: identifier,
        title: title,
        language: "EN",
      }}
    />
  );
}