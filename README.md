# Architecture of App

**Using the Pub/Sub architecture, we can scale up the web sockets, enabling users from different servers to communicate with each other. This scalable socket real-time application utilizes Redis on Aiven cloud, employing Redis Pub/Sub architecture to scale the web sockets.**

![Screenshot (184)](https://github.com/Prakhar1Pandey/scalable-chat-app/assets/91981713/53a91637-c3a6-42af-a506-b23510e8fd6a)


# Traditional Websocket Scaling Limitations:

1. Single Server Bottleneck: When all sockets connect to a single server, its resources can become overwhelmed, leading to performance issues and potential crashes as user traffic increases.
2. Broadcast Overhead: Broadcasting messages to all users on the same server becomes inefficient, especially with a large user base.
# Pub/Sub Architecture to the Rescue:

1. Decoupling Clients and Servers: Instead of direct connections, clients (web browsers) subscribe to channels on the Redis Pub/Sub message broker.
2. Server-to-Server Communication: Each server instance publishes messages to specific channels, decoupling them from specific clients.
3. Redis Handles Delivery: Redis efficiently routes messages to all subscribed clients across all servers, regardless of their origin.
# Benefits of using Redis Pub/Sub with Aiven Cloud:

1. Horizontal Scalability: You can easily add more server instances to handle increased traffic as your user base grows.
2. Fault Tolerance: If a server crashes, clients remain connected to Redis and receive messages through other servers.
3. Reduced Server Load: Servers only handle publishing and subscribing to channels, not managing individual client connections.
4. Aiven Cloud Simplifies Management: Aiven takes care of provisioning, monitoring, and managing your Redis cluster, reducing operational overhead.
# Visualization:

Imagine a chat application where users can join different rooms. With the Pub/Sub architecture:

Users in a specific room subscribe to the corresponding channel on Redis.
When a user sends a message, their server instance publishes it to that channel.
Redis delivers the message to all subscribed clients in that room, regardless of which server they're connected to.
This approach allows for real-time communication between users across different servers, making your application highly scalable and fault-tolerant.

# Turborepo starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@repo/ui`: a stub React component library shared by both `web` and `docs` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
