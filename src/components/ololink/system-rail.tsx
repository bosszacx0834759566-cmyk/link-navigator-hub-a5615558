'use client';

import {
  Satellite,
  Waypoints,
  Plane,
  RadioTower,
  Search,
  Globe2,
  Settings2,
  Sun,
  Cloud,
  CloudRain,
  CloudLightning,
  type LucideIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { OloLinkState, RailId } from '@/hooks/use-ololink';
import { type ScenarioId } from '@/lib/ololink';

/** Scenario simulation entries shown in the rail. */
const SCENARIOS_RAIL: { id: ScenarioId; label: string; hint: string; icon: LucideIcon }[] = [
  { id: 'clear', label: 'Clear', hint: 'จำลองสภาพอากาศแจ่มใส', icon: Sun },
  { id: 'cloud', label: 'Cloud', hint: 'จำลองเมฆปกคลุม', icon: Cloud },
  { id: 'rain', label: 'Rain', hint: 'จำลองฝนตกหนัก', icon: CloudRain },
  { id: 'storm', label: 'Storm', hint: 'จำลองพายุรุนแรง', icon: CloudLightning },
];

export const SYSTEM_TABS: {
  id: RailId;
  label: string;
  hint: string;
  icon: LucideIcon;
}[] = [
  { id: 'leo', label: 'LEO', hint: 'ข้อมูลดาวเทียม LEO ทั้งหมด', icon: Satellite },
  { id: 'haps', label: 'HAPS', hint: 'ข้อมูลแพลตฟอร์ม HAPS ทั้งหมด', icon: Waypoints },
  { id: 'drone', label: 'Drone', hint: 'ข้อมูลโดรนรีเลย์ทั้งหมด', icon: Plane },
  { id: 'ground', label: 'Ground', hint: 'ข้อมูลสถานีภาคพื้นดินทั้งหมด', icon: RadioTower },
  { id: 'search', label: 'Search', hint: 'ค้นหาอุปกรณ์ทุกประเภทอย่างรวดเร็ว', icon: Search },
  { id: 'view', label: 'View', hint: 'สลับมุมมองโลก 3D / 2D', icon: Globe2 },
  { id: 'settings', label: 'Settings', hint: 'การตั้งค่าของระบบทั้งหมด', icon: Settings2 },
];

function RailButton({
  item,
  index,
  isActive,
  onToggle,
}: {
  item: (typeof SYSTEM_TABS)[number];
  index: number;
  isActive: boolean;
  onToggle: () => void;
}) {
  const Icon = item.icon;
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={item.label}
      aria-pressed={isActive}
      className={cn(
        'group relative flex h-[58px] w-[58px] flex-col items-center justify-center gap-1 rounded-[12px] outline-none transition-all duration-150',
        'focus-visible:ring-1 focus-visible:ring-sky-400/60',
        isActive
          ? 'bg-sky-500/[0.14] text-sky-300'
          : 'text-muted-foreground/60 hover:bg-white/[0.05] hover:text-foreground active:scale-[0.96]'
      )}
    >
      <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
      <span className="font-mono text-[8px] uppercase tracking-[0.16em]">{item.label}</span>

      <span
        className={cn(
          'absolute left-0 top-1/2 w-[2px] -translate-y-1/2 rounded-r bg-sky-400 transition-all duration-200',
          isActive ? 'h-7 opacity-100' : 'h-0 opacity-0'
        )}
      />

      <span className="pointer-events-none absolute left-[64px] z-50 hidden -translate-x-1 whitespace-nowrap rounded-md border border-white/[0.08] bg-[#0a0f1c]/95 px-2.5 py-1.5 opacity-0 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        <span className="block text-[10px] uppercase tracking-[0.2em] text-foreground">
          Tab {index + 1} · {item.label}
        </span>
        <span className="mt-0.5 block text-[9px] tracking-wide text-muted-foreground/70">
          {item.hint}
        </span>
      </span>
    </button>
  );
}

function ScenarioRailButton({
  item,
  isActive,
  disabled,
  onSelect,
}: {
  item: (typeof SCENARIOS_RAIL)[number];
  isActive: boolean;
  disabled: boolean;
  onSelect: (id: ScenarioId) => void;
}) {
  const Icon = item.icon;
  return (
    <button
      type="button"
      onClick={() => onSelect(item.id)}
      disabled={disabled}
      aria-label={item.label}
      aria-pressed={isActive}
      className={cn(
        'group relative flex h-[58px] w-[58px] flex-col items-center justify-center gap-1 rounded-[12px] outline-none transition-all duration-150',
        'focus-visible:ring-1 focus-visible:ring-sky-400/60 disabled:opacity-50',
        isActive
          ? 'bg-sky-500/[0.14] text-sky-300'
          : 'text-muted-foreground/60 hover:bg-white/[0.05] hover:text-foreground active:scale-[0.96]'
      )}
    >
      <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
      <span className="font-mono text-[8px] uppercase tracking-[0.16em]">{item.label}</span>

      <span
        className={cn(
          'absolute left-0 top-1/2 w-[2px] -translate-y-1/2 rounded-r bg-sky-400 transition-all duration-200',
          isActive ? 'h-7 opacity-100' : 'h-0 opacity-0'
        )}
      />

      <span className="pointer-events-none absolute left-[64px] z-50 hidden -translate-x-1 whitespace-nowrap rounded-md border border-white/[0.08] bg-[#0a0f1c]/95 px-2.5 py-1.5 opacity-0 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.9)] backdrop-blur-xl transition-all duration-150 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        <span className="block text-[10px] uppercase tracking-[0.2em] text-foreground">
          Scenario · {item.label}
        </span>
        <span className="mt-0.5 block text-[9px] tracking-wide text-muted-foreground/70">
          {item.hint}
        </span>
      </span>
    </button>
  );
}

/** LEVEL 2 — the system tab rail, docked to the left edge. */
export function SystemRail({ state }: { state: OloLinkState }) {
  const active = state.panel;
  const onToggle = state.togglePanel;

  return (
    <nav className="pointer-events-auto absolute bottom-0 left-0 top-0 z-40 flex w-[68px] flex-col items-center gap-1.5 overflow-y-auto bg-black/65 py-3 backdrop-blur-xl [scrollbar-width:none]">
      {SYSTEM_TABS.map((item, i) => (
        <div key={item.id} className={item.id === 'settings' ? 'mt-auto' : undefined}>
          <RailButton
            item={item}
            index={i}
            isActive={active === item.id}
            onToggle={() => onToggle(item.id)}
          />
        </div>
      ))}

      {/* scenario simulation section */}
      <div className="mt-2 flex flex-col items-center gap-1.5 border-t border-white/[0.06] pt-2">
        <span className="font-mono text-[7px] uppercase tracking-[0.22em] text-muted-foreground/50">
          WX
        </span>
        {SCENARIOS_RAIL.map((item) => (
          <ScenarioRailButton
            key={item.id}
            item={item}
            isActive={state.scenarioId === item.id}
            disabled={state.aiProcessing}
            onSelect={state.setScenario}
          />
        ))}
      </div>
    </nav>
  );
}
