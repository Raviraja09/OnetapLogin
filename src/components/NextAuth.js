import NextAuth from "next-auth";
import { Providers } from "next-auth/providers"; 

export default NextAuth({
  providers: [
    Providers.Google({
      clientId:'695351500186-l42grfk8sn004eilb64uvcgsdanh952t.apps.googleusercontent.com',
      clientSecret:'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'
    }),
  ],
});

