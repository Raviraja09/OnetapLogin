import NextAuth from "next-auth";
import { GoogleProvider } from 'next-auth/providers';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: "695351500186-l42grfk8sn004eilb64uvcgsdanh952t.apps.googleusercontent.com",
      clientSecret: "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",
      callback:"http://localhost:3000"
    }),
  ],
});
