# Project Setup Instructions

Follow these steps to set up and deploy the project using Supabase, Docker, and Next.js.

---

## Prerequisites

- **Supabase Account**: Set up an account at [supabase](https://supabase.com/) and create a project.
- **Docker Desktop**: [Install Docker Desktop](https://www.docker.com/products/docker-desktop).
- **Supabase CLI**: [Install Supabase CLI](https://supabase.com/docs/guides/cli).
- **Resend Account**: Set up an account at [Resend](https://resend.com).
- **Unplash Account**: Set up an account at [Unsplash](https://unsplash.com/).

---

```bash
git clone https://github.com/visio-cms/visio-cms-next-template.git your-project_name

cd your-project-name
npm i visio-cms-lib@latest
```

## Setup Steps

### 1. Link Supabase Project

Link your local environment to your Supabase project with the following command:

```bash
supabase login
supabase link --project-ref <project-id>
```

### 2. Run migrations

```bash
supabase db push
```

From your supabase storage change the `media` storage to public

### 3. Start docker

start docker desktop

### 4. Deploy supabase edge functions

```bash
supabase functions deploy
```

### 4. Set Supabase Secrets

```bash
cp supabase/.env.example supabase/.env
```

past your resend api key in the `supabase/.env` file

RESEND_API_KEY=[YOUR-RESEND-API-KEY-HERE]

### 5. Deploy your secret to supabase

```bash
supabase secrets set --env-file ./supabase/.env
```

### 6. link resend to supabase

[https://resend.com/settings/integrations](https://resend.com/settings/integrations)

### 7. update tsconfig.ts

add "@/node_modules/_": ["./node_modules/_"] to paths

```json
{
  "compilerOptions": {
    "paths": {
       .....,
      "@/node_modules/*": ["./node_modules/*"]
    }
  }
}
```

### 8. update next.config.ts to accept served media files

```js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "[YOUR-SUPABASE-PROJECT-ID].supabase.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
    ],
  },
};
```

### 9. set up `pg_cron` and `pg_net` extensions

Database > extensions
Search and enable `pg_cron` and `pg_next`

### 10. Add your supabase and unsplash keys to `.env`

```bash
cp .env.example .env
```

NEXT_PUBLIC_SUPABASE_PROJECT_ID=<br/>
NEXT_PUBLIC_SUPABASE_ANONKEY=<br/>
NEXT_PUBLIC_UNSPLASH_ACCESSKEY=<br/>
NEXT_PUBLIC_SUPABASE_URL=<br/>
NEXT_PUBLIC_EMAIL_SENDER="[Sender Id] <username@your-domain.com>"

### 11. run your app and register as an admin

```bash
npm run dev
```

`localhost:3000/cms/register`

Confirm your email address and login

`localhost:300/cms/login`
