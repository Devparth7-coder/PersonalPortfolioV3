import { useState, useEffect } from 'react';
import { Project } from '../types';

let globalCommandPaletteOpen = false;
let globalShortcutsModalOpen = false;
let globalSelectedProject: Project | null = null;
let globalShowPerformanceMonitor = false;

type Listener = () => void;
const listeners = new Set<Listener>();

function notify() {
  listeners.forEach((listener) => listener());
}

export function useUIStore() {
  const [, setTick] = useState(0);

  useEffect(() => {
    const listener = () => setTick((t) => t + 1);
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  }, []);

  return {
    isCommandPaletteOpen: globalCommandPaletteOpen,
    setCommandPaletteOpen: (open: boolean) => {
      globalCommandPaletteOpen = open;
      notify();
    },
    isShortcutsModalOpen: globalShortcutsModalOpen,
    setShortcutsModalOpen: (open: boolean) => {
      globalShortcutsModalOpen = open;
      notify();
    },
    selectedProject: globalSelectedProject,
    setSelectedProject: (project: Project | null) => {
      globalSelectedProject = project;
      notify();
    },
    showPerformanceMonitor: globalShowPerformanceMonitor,
    setShowPerformanceMonitor: (show: boolean) => {
      globalShowPerformanceMonitor = show;
      notify();
    },
  };
}
