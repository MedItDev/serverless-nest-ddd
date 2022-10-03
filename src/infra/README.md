## Description

This folder aggregates the elements implementing the infrastructure layer. It is a kind of `App` folder, where we integrate with the [NestJS](https://nestjs.com/) and with the database by creating a corresponding dynamic [Database Module](https://docs.nestjs.com/fundamentals/dynamic-modules).

Because we are using the framework in conjunction with a serverless architecture, which requires a significant slimming down of the code being produced, and the `Cold Start` application start times need to be small, we are using the [Standalone Application](https://docs.nestjs.com/standalone-applications) approach, and using [Lazy Loadin](https://docs.nestjs.com/fundamentals/lazy-loading-modules), so it is important not to import anything else in the `App Module` besides the modules used throughout the application.
