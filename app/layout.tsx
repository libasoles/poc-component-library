import "@/styles/global.css";
import { PropsWithChildren } from "react";
import Providers from "./providers";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="w-full max-w-screen-md mx-auto p-4 pt-8 sm:my-16 sm:mx-auto">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
