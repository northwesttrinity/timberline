# timberline → nwtrinity redirect

This is a tiny, standalone Worker with one job: redirect every request
on timberline.allbackhome.workers.dev to the equivalent path on
nwtrinity.allbackhome.workers.dev. It replaces the old site entirely —
no static files, no KV, nothing else.

## Deploy this to the OLD "timberline" project

This needs to go to your existing `timberline` Cloudflare project, not
the new `nwtrinity` one — they're separate deployments.

**If timberline is Git-connected to a repo:**

1. In that repo, delete everything and replace it with just these three
   files: `src/index.js`, `wrangler.toml`, `package.json`.
2. Commit to `main`. Cloudflare will rebuild and deploy automatically.
3. Confirm the Deploy command in that project's
   Settings → Builds & deployments is still `npx wrangler deploy`.

**If you'd rather skip Git entirely for this one:**

Since this Worker has no dependencies on KV or assets, you can also
paste `src/index.js`'s contents directly into the Cloudflare dashboard's
Quick Edit view for the `timberline` Worker and deploy from there —
though if that project is Git-connected, a future push to its repo
would overwrite a dashboard-only edit, so the Git route above is more
durable.

## After deploying

Visiting any URL under timberline.allbackhome.workers.dev — including
deep links like `/#recordings` — should 302-redirect to the same path
under nwtrinity.allbackhome.workers.dev.

This is currently a temporary (302) redirect, so it's easy to change
your mind and point this project elsewhere later. Once you're fully
settled on nwtrinity as the permanent home, you can switch the `302`
in `src/index.js` to `301` so browsers and search engines cache the
move as permanent.
