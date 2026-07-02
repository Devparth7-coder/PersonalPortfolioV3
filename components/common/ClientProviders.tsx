'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import ScrollProgress from './ScrollProgress';
import LoadingScreen from './LoadingScreen';
import CommandPalette from './CommandPalette';
import KeyboardShortcutsModal from './KeyboardShortcutsModal';
import { useKeyboardShortcuts } from '../../hooks/useKeyboardShortcuts';

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  useKeyboardShortcuts();

  return (
    <div className="min-h-screen flex flex-col relative">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <CommandPalette />
      <KeyboardShortcutsModal />
    </div>
  );
}
