import ToastRenderer from "@/components/generic/popups/ToastRenderer";
import "@/styles/global.css";
import { PropsWithChildren } from "react";
import Providers from "./providers";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      {/* TODO: check if disabling scrolling on the body is actually a good idea. */}
      <body className="max-h-screen overflow-hidden">
        <Providers>
          <main className="w-full max-w-screen-md mx-auto p-4 pt-8 sm:my-16 sm:mx-auto">
            {children}
          </main>
          <ToastRenderer />
        </Providers>
      </body>
    </html>
  );
}
