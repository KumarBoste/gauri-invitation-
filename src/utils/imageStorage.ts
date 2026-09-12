// Utility to manage photos for Gaurai Mata and Boste Family
export const GAURI_MATA_KEY = 'gauri_mata_custom_img';
export const BOSTE_FAMILY_KEY = 'boste_family_custom_img';

export const DEFAULT_GAURI_FALLBACK =
  'https://images.unsplash.com/photo-1567591414240-e22a46c69818?auto=format&fit=crop&w=700&q=80';
export const DEFAULT_FAMILY_FALLBACK =
  'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=900&q=80';

export function getSavedImage(key: string, permanentPath: string): string {
  try {
    const saved = localStorage.getItem(key);
    if (saved && saved.startsWith('data:image/')) {
      return saved;
    }
  } catch (err) {
    console.warn('LocalStorage read error', err);
  }
  return permanentPath;
}

export { DEFAULT_GAURI_FALLBACK as defaultGauri, DEFAULT_FAMILY_FALLBACK as defaultFamily };
