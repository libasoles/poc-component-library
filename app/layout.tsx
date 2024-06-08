import "@/styles/global.css";
import { PropsWithChildren } from "react";
import Providers from "./providers";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="w-full m-16 max-w-screen-md mx-auto">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
