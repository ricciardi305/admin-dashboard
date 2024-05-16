import { SourceSans } from "@/app/ui/fonts";
import "@/app/ui/globals.css";
import TopBar from "@/app/ui/top-bar";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Providers } from "./providers";
import SideBar from "./ui/side-bar";

export const metadata = {
  title: "Administrator Dashboard",
  description: "Administrator Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={SourceSans.className}>
        <AppRouterCacheProvider>
          <Providers>
            <TopBar />
            <SideBar />
            {children}
          </Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
