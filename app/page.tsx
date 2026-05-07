"use client";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-border bg-muted p-8 shadow-sm">
        <h1 className="text-2xl font-semibold text-foreground">
          Editor Canvas
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
          This is the base editor shell with a fixed top navbar and floating
          project sidebar. Use the sidebar toggle to open the project panel.
        </p>
        <div className="mt-8 h-[480px] rounded-3xl border border-border bg-background/80 p-6 text-sm text-muted-foreground">
          <p className="text-muted-foreground">
            Editor canvas content will appear here in the next feature chapter.
          </p>
        </div>
      </div>
    </div>
  );
}
