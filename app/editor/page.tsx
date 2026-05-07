"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";
import { ProjectDialogs } from "@/components/editor/project-dialogs";

import { Button } from "@/components/ui/button";

import { useProjectDialogs } from "@/hooks/use-project-dialogs";

export default function EditorPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dialogs = useProjectDialogs();

  return (
    <div className="flex h-screen flex-col bg-bg-base">
      <EditorNavbar onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex flex-1 overflow-hidden">
        <ProjectSidebar
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          projects={dialogs.projects}
          onNewProject={dialogs.openCreate}
          onRename={dialogs.openRename}
          onDelete={dialogs.openDelete}
        />

        <main className="flex flex-1 items-center justify-center overflow-hidden">
          <div className="flex flex-col items-center gap-4 px-4 text-center">
            <div className="space-y-1">
              <h1 className="text-xl font-medium text-text-primary">
                Create a project or open an existing one
              </h1>

              <p className="text-sm text-text-muted">
                Start a new architecture workspace, or choose a project from the
                sidebar.
              </p>
            </div>

            <Button onClick={dialogs.openCreate} className="gap-2">
              <Plus className="h-4 w-4" />

              <span>New Project</span>
            </Button>
          </div>
        </main>
      </div>

      <ProjectDialogs {...dialogs} />
    </div>
  );
}
