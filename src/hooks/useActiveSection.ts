import { useEffect, useState } from 'react';

/** Page sections the phone menu and the desktop nav navigate between. */
export const SECTIONS = [
  { id: 'vod', label: 'Series & Films' },
  { id: 'hero', label: 'Home' },
  { id: 'channels', label: 'Channels' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'features', label: 'Features' },
  { id: 'faq', label: 'FAQ' }
] as const;

/**
 * Id of the section the reader is currently in.
 *
 * Scroll position rather than IntersectionObserver: the observer left the menu
 * showing a stale tab whenever the probe band sat over untracked content — the
 * footer at the bottom of the page being the obvious case. Sections are sorted
 * by their real offset because the showcase renders before the hero on a phone.
 */
export function useActiveSection(): string {
  const [active, setActive] = useState<string>(SECTIONS[0].id);

  useEffect(() => {
    const measure = () => {
      const found: { id: string; top: number }[] = [];
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el) found.push({ id: s.id, top: el.getBoundingClientRect().top + window.scrollY });
      }
      found.sort((a, b) => a.top - b.top);

      if (found.length === 0) return;

      // Anything scrolled past a third of the way up the viewport counts as read.
      const probe = window.scrollY + window.innerHeight * 0.34;
      let current = found[0].id;
      for (const s of found) {
        if (s.top <= probe) current = s.id;
      }

      // The footer is not a section, so pin the last one at the end of the page.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      if (atBottom) current = found[found.length - 1].id;

      setActive(current);
    };

    // Measured straight from the scroll event rather than inside a rAF: six
    // rects is cheap, and a frame callback stalls whenever the tab stops
    // rendering, which would leave the menu stuck on a stale tab.
    measure();
    window.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      window.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, []);

  return active;
}
