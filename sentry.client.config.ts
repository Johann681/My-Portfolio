import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://a340bbbc73147de25f5081d600b4e3d0@o4508859687370752.ingest.us.sentry.io/4508859710898176",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
      isNameRequired: true,
      isEmailRequired: true,
    }),
  ],
});