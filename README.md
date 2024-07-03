# Supabase Edge Functions and NextJS

![image](https://github.com/isaacdarcilla/supabase-edge-nextjs/assets/22732118/8d1faf88-c7b0-440d-90b3-8fa479844a91)

### Running Locally
```
$ git clone https://github.com/isaacdarcilla/supabase-edge-nextjs
$ cd supabase-edge-nextjs
$ cp .env.example .env.local
$ bun install // or pnpm, npm, yarn
$ bun run dev // or pnpm, npm, yarn
```

Should now be accessible in `http://localhost:3000`

### Edge Functions

The Supabase edge functions for `students` can be viewed in [supabase/functions/students](https://github.com/isaacdarcilla/supabase-edge-nextjs/blob/main/supabase/functions/students/index.ts) folder.

### Linting

```
$ bun lint // or pnpm, npm, yarn
```

Linting is automatically executed on commit. 
