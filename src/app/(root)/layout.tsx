import LeftSidebar from "@/components/LeftSidebar";
import PodcastPlayer from "@/components/PodcastPlayer";
import RightSidebar from "@/components/RightSidebar";
import React from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main>
        <LeftSidebar />
        <section>{children}</section>
        <RightSidebar />
      </main>
      <PodcastPlayer />
    </div>
  );
}

export default RootLayout;
