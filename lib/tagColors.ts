// Maps tag names to Radix UI badge/button colors
const TAG_COLORS: Record<string, string> = {
  business: 'orange',
  programming: 'blue',
  finance: 'teal',
  health: 'green',
  productivity: 'purple',
  markets: 'indigo',
  data: 'cyan',
  rust: 'tomato',
  python: 'amber',
  performance: 'violet',
  tooling: 'gold',
  typescript: 'blue',
  javascript: 'yellow',
  linux: 'grass',
  systems: 'crimson',
};

export function tagColor(tag: string): string {
  return TAG_COLORS[tag.toLowerCase()] ?? 'gray';
}
