import "@/styles/global.css";
import { PropsWithChildren } from "react";
import Providers from "./providers";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="m-16">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
