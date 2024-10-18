## Problems

I am unsure if I have the correct setup of Next.js 14 with the App Router and Ant Design Theme. I use `next-themes` to handle theme switching and also client-side render all Ant Design elements (as there will be flickering if rendered on the server side).

I see people mentioning that `theme.darkAlgorithm` is not supported on the server side, but I have seen other UI frameworks also require wrapping the Theme Provider with `'use client'`.

According to the [Next.js 14 documentation](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#interleaving-server-and-client-components), it says that a server-side component can still be passed to a client-side component via props while the server-side component will still be server-side rendered.

I am new to Next.js, so I don't know how to test it. But if I understand correctly, `app/xxx/page.tsx` should be a server-side component. If you need to interact with the user (like a button with `onClick`), you then need to create a new component file `HitLikeButton.tsx` and pass it to `app/xxx/page.tsx`. So `app/xxx/page.tsx` will still be server-side, and `HitLikeButton.tsx` will be client-side.

So for SEO, I think we just need to `await` fetch the metadata in `app/[productID]/page.tsx` and create some hidden `<p>` elements to store some product data. Then other Ant Design beautiful elements can be in some other components and passed back to `app/[productID]/page.tsx`, which will be fine (metadata will be obtained from `app/[productID]/page.tsx` and server-rendered, while Ant Design elements and other data will be client-side rendered).

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
