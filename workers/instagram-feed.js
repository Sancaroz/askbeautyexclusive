const DEFAULT_GRAPH_VERSION = "v24.0";

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=UTF-8",
      "cache-control": "public, max-age=900, s-maxage=1800",
      "access-control-allow-origin": "*"
    }
  });
}

function mapPost(post) {
  const isVideo = post.media_type === "VIDEO";

  return {
    id: post.id,
    title: post.caption?.split("\n")[0]?.trim() || "AŞK Beauty çalışması",
    tag: isVideo ? "Instagram Reels" : "Instagram",
    mediaType: post.media_type,
    image: isVideo ? post.thumbnail_url : post.media_url,
    videoUrl: isVideo ? post.media_url : "",
    postUrl: post.permalink || ""
  };
}

export default {
  async fetch(request, env, ctx) {
    if (request.method !== "GET") {
      return json({ error: "Method not allowed" }, 405);
    }

    if (!env.INSTAGRAM_ACCESS_TOKEN || !env.INSTAGRAM_USER_ID) {
      return json({ error: "Instagram Worker secrets are not configured" }, 503);
    }

    const version = env.META_GRAPH_VERSION || DEFAULT_GRAPH_VERSION;
    const graphUrl = new URL(`https://graph.facebook.com/${version}/${env.INSTAGRAM_USER_ID}/media`);
    graphUrl.searchParams.set("fields", "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp");
    graphUrl.searchParams.set("limit", "12");
    graphUrl.searchParams.set("access_token", env.INSTAGRAM_ACCESS_TOKEN);

    try {
      const response = await fetch(graphUrl);
      const payload = await response.json();

      if (!response.ok || payload.error) {
        return json({ error: "Instagram API request failed" }, 502);
      }

      const posts = (payload.data || [])
        .filter(post => post.media_url || post.thumbnail_url)
        .map(mapPost);

      return json({ posts, fetchedAt: new Date().toISOString() });
    } catch (error) {
      return json({ error: "Instagram feed unavailable" }, 502);
    }
  }
};
