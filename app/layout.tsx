import ToastRenderer from "@/components/generic/popups/ToastRenderer";
import "@/styles/global.css";
import { PropsWithChildren } from "react";
import Providers from "./providers";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <main className="w-full pt-8 sm:my-16 px-2">{children}</main>
          <ToastRenderer />
        </Providers>
      </body>
    </html>
  );
}
