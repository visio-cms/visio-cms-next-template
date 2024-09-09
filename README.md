# Project Setup Instructions

Follow these steps to set up and deploy the project using Supabase, Docker, and Next.js.

---

## Prerequisites

- **Docker Desktop**: [Install Docker Desktop](https://www.docker.com/products/docker-desktop).
- **Supabase CLI**: [Install Supabase CLI](https://supabase.com/docs/guides/cli).
- **Resend Account**: Set up an account at [Resend](https://resend.com).

---

## Setup Steps

### 1. Link Supabase Project
Link your local environment to your Supabase project with the following command:
```bash
supabase link
```

### 2. Run migrations
```bash
supabase db push
```

From your supabase storage change the media storage public

### 3. Run migration
start docker desktop

### 4. Deploy supabase edge functions
```bash
supabase functions deploy
```

### 4.  Set Supabase Secrets

```bash
cp supabase/.env.example supabase/.env
```
past your resend api key in the `.env` file
RESEND_API_KEY=************************


### 5.  Deploy your secret to supabase
```bash
supabase secrets set --env-file ./supabase/.env
```
### 6.  link resend to supabase
[Do it via https://resend.com/settings/integrations/supabase](https://resend.com/settings/integrations/supabase)


### 7.  update tsconfig.ts
```json
{
  "compilerOptions": {
    "paths": {
      "@/node_modules/*": ["./node_modules/*"]
    }
  }
}
```
### 8.  update next.config.ts to accept served media files

```js
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'vgrwxgjduftemwuczacc.supabase.co',
            pathname: '**',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            pathname: '**',
          },
        ],
      },
};
```

### 9.  set up pg_cron and pg_net extensions
[Do it via https://supabase.com/dashboard/project/vgrwxgjduftemwuczacc/database/extensions](https://supabase.com/dashboard/project/vgrwxgjduftemwuczacc/database/extensions)

### 10.  run your app and register as an admin
```bash
npm run dev
```

`locahost:3000/cms/login`