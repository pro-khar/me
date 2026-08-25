# UI Guide

This project uses [shadcn/ui](https://ui.shadcn.com) components (`src/components/ui/`) as a
base, customized into a **neobrutalist** style: thick black/white borders, zero border-radius,
and hard offset "pop" shadows instead of soft blurred ones. This doc describes the design
tokens, the shadow/border recipe, and how each component in `src/components/ui/` implements it,
so new components can be styled consistently.

## Design tokens (`src/index.css`)

All colors are HSL CSS variables consumed via Tailwind v4 `@theme`, and swapped by the `.dark`
class (see `@custom-variant dark (&:is(.dark *))`):

| Token | Light | Dark | Used for |
|---|---|---|---|
| `--background` / `--foreground` | blue / near-black | darker blue / near-white | page background & text |
| `--card`, `--popover` | white | near-black | surfaces |
| `--primary` | lime green | darker lime | brand accent, default button |
| `--secondary`, `--muted`, `--accent` | light gray | dark gray | supporting surfaces |
| `--destructive` | red | dark red | destructive actions |
| `--border`, `--input`, `--ring` | dark gray | light gray | thin borders / focus rings (mostly superseded, see below) |
| `--radius` | `0rem` | `0rem` | **all corners are square** — this is intentional |

Fonts: `IBM Plex Sans` (default body), `IBM Plex Mono` via the `.font-ibm-mono` utility.

## The neobrutalist recipe

Every interactive/surface component in `src/components/ui/` follows the same two-part pattern
instead of the stock shadcn `border` + soft `shadow-xs/md/lg`:

1. **Thick border, theme-aware color**
   ```
   border-[3px] border-black dark:border-white
   ```
   (Drawer only borders the edge that touches content, e.g. `border-t-[3px]`.)

2. **Hard offset shadow, theme-aware color** — a solid (non-blurred) drop shadow using an
   arbitrary `shadow-[<x>px_<y>px_0px_0px_rgba(...)]` value, swapped for white in dark mode:
   ```
   shadow-[8px_8px_0px_0px_rgba(0,0,0)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255)]
   ```
   The `0px` blur radius is what makes it read as a hard-edged "pop" instead of a soft elevation
   shadow.

Two variants of when the shadow shows:

- **Static** — always visible. Used on elements that don't have a natural hover/focus moment of
  their own because they only appear via a trigger (Popover, Tooltip, Dropdown, Drawer) or are
  passive containers (Card).
- **Triggered** — shadow only appears `hover:` (buttons — the user is about to click) or
  `focus-visible:` (inputs — the user is typing), paired with `transition-all duration-300` so it
  animates in.

Shadow offset size is scaled roughly to the component's visual weight: buttons/cards use
`8px`–`10px`, smaller/denser popovers and tooltips use `5px`–`6px`.

## Component-by-component

### Button (`ui/button.tsx`)
The reference implementation. Border is always on (`border-black`/`dark:border-white` per
variant), shadow is **hover-triggered** and scales by `size`:
```tsx
size: {
  default: "... hover:shadow-[10px_10px_0px_0px_rgba(0,0,0)] dark:hover:shadow-[10px_10px_0px_0px_rgba(255,255,255)] transition-all duration-300",
  sm:      "... hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] transition-all duration-300",
  icon:    "... hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] transition-all duration-300",
}
```
`variant` controls border/background per semantic meaning (`default`, `destructive`, `outline`,
`secondary`, `ghost`, `link` — `link` intentionally opts out of the border/shadow treatment).

### Card (`ui/card.tsx`)
Static hard shadow, always-on border, replacing the stock `border + shadow-xs`:
```
rounded-lg border-[3px] border-black bg-card text-card-foreground
shadow-[8px_8px_0px_0px_rgba(0,0,0)]
dark:border-white dark:shadow-[8px_8px_0px_0px_rgba(255,255,255)]
```
`CardHeader`/`CardTitle`/`CardDescription`/`CardContent`/`CardFooter` are unchanged (spacing
primitives only, no border/shadow of their own).

### Input (`ui/input.tsx`)
Border is always on; the hard shadow is **focus-triggered** (typing is the input's equivalent of
a button hover) instead of the default `ring`-based focus style:
```
border-[3px] border-black dark:border-white
focus-visible:shadow-[6px_6px_0px_0px_rgba(0,0,0)]
dark:focus-visible:shadow-[6px_6px_0px_0px_rgba(255,255,255)]
transition-all duration-300
```

### Popover (`ui/popover.tsx`)
`PopoverContent` gets a static border + shadow (it only exists while open, so there's no
separate hover state to gate it):
```
border-[3px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0)]
dark:border-white dark:shadow-[10px_10px_0px_0px_rgba(255,255,255)]
```
Callers no longer need to repeat `border-black border-[3px]` manually on `PopoverContent`
(e.g. `GetInTouch.tsx`) — it's baked into the base component now, though passing it again is
harmless (later classes win via `tailwind-merge`).

### Tooltip (`ui/tooltip.tsx`)
`TooltipContent` keeps its existing `bg-primary` accent color, with the border color and shadow
brought in line with the rest of the system:
```
border-[3px] border-black bg-primary shadow-[6px_6px_0px_0px_rgba(0,0,0)]
dark:border-white dark:shadow-[6px_6px_0px_0px_rgba(255,255,255)]
```

### Dropdown Menu (`ui/dropdown-menu.tsx`)
`DropdownMenuContent` and `DropdownMenuSubContent` both get the static border + shadow treatment
(matching Popover's weight):
```
border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0)]
dark:border-white dark:shadow-[8px_8px_0px_0px_rgba(255,255,255)]
```
Items, checkboxes, radio items, labels, and separators are unchanged (they're rows inside the
bordered container, not surfaces themselves).

### Drawer (`ui/drawer.tsx`)
Anchored to the bottom edge of the viewport, so only the top border gets the thick treatment,
and the shadow is a single-direction offset going *up* from that edge rather than
down-and-right:
```
border-t-[3px] border-black shadow-[0px_-8px_0px_0px_rgba(0,0,0)]
dark:border-white dark:shadow-[0px_-8px_0px_0px_rgba(255,255,255)]
```
The drag handle (`bg-black dark:bg-white`) was already following this black/white theme-swap
convention.

## Adding a new shadcn component

When pulling in a new component with the shadcn CLI (or writing one by hand), bring it in line
with this system:

1. Replace any stock `border` with `border-[3px] border-black dark:border-white` (or a single
   edge, e.g. `border-t-[3px]`, if the component is edge-anchored like Drawer).
2. Replace any stock `shadow-xs/sm/md/lg` with a hard offset shadow:
   `shadow-[<n>px_<n>px_0px_0px_rgba(0,0,0)] dark:shadow-[<n>px_<n>px_0px_0px_rgba(255,255,255)]`.
   Pick `5–6px` for small/dense elements (tooltips, small popovers), `8–10px` for larger surfaces
   (cards, buttons, dropdowns).
3. Decide static vs. triggered:
   - Trigger-mounted surfaces (popover/dropdown/tooltip/drawer content) → **static** shadow.
   - Elements the user directly clicks or types into (buttons, inputs, toggles) → **hover** or
     **focus-visible** triggered shadow, plus `transition-all duration-300`.
4. Don't fight `--radius: 0rem` — corners are square by design; no changes needed to
   `rounded-*` utilities, they resolve to `0`.
5. Prefer editing the base component in `src/components/ui/` over repeating the border/shadow
   classes at every call site.
