import { useEffect } from 'react';
import { useUIStore } from '../store/useUIStore';
import { useAudioStore } from '../store/useAudioStore';
import { useThemeStore } from '../store/useThemeStore';

export function useKeyboardShortcuts() {
  const {
    isCommandPaletteOpen,
    setCommandPaletteOpen,
    isShortcutsModalOpen,
    setShortcutsModalOpen,
    selectedProject,
    setSelectedProject,
  } = useUIStore();
  const { toggleMusic } = useAudioStore();
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName;
      const isTyping = activeTag === 'INPUT' || activeTag === 'TEXTAREA' || (document.activeElement as HTMLElement)?.isContentEditable;

      // Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(!isCommandPaletteOpen);
        return;
      }

      // Escape
      if (e.key === 'Escape') {
        if (isCommandPaletteOpen) setCommandPaletteOpen(false);
        if (isShortcutsModalOpen) setShortcutsModalOpen(false);
        if (selectedProject) setSelectedProject(null);
        return;
      }

      if (isTyping) return;

      // Question mark (?) for shortcuts help
      if (e.key === '?' || (e.shiftKey && e.key === '/')) {
        e.preventDefault();
        setShortcutsModalOpen(!isShortcutsModalOpen);
      }

      // M for music
      if (e.key.toLowerCase() === 'm') {
        toggleMusic();
      }

      // T for theme
      if (e.key.toLowerCase() === 't') {
        const themes: any[] = ['apple-dark', 'openai-light', 'cyberpunk', 'aurora'];
        const nextIdx = (themes.indexOf(theme) + 1) % themes.length;
        setTheme(themes[nextIdx]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    isCommandPaletteOpen,
    isShortcutsModalOpen,
    selectedProject,
    theme,
    setCommandPaletteOpen,
    setShortcutsModalOpen,
    setSelectedProject,
    toggleMusic,
    setTheme,
  ]);
}
