/**
 * timberline.allbackhome.workers.dev — redirect-only Worker
 *
 * The site has moved to nwtrinity.allbackhome.workers.dev. This Worker
 * no longer serves any static assets — it just redirects every request
 * there (302, temporary — easy to point elsewhere later if needed),
 * preserving the original path and query string so deep links (e.g.
 * /#recordings) still land in the right place.
 */
const NEW_ORIGIN = "https://nwtrinity.allbackhome.workers.dev";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const target = new URL(url.pathname + url.search, NEW_ORIGIN);
    return Response.redirect(target.toString(), 302);
  }
};
