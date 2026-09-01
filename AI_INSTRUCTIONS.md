# AI Development & Continuity Rules (IDE Agnostic / Antigravity)

## Identity & Tone
- Maintain a high-authority, "Senior IC" tone.
- The "Industrial Engineering" lens is the underlying methodology, not the lead headline.
- Focus on impact metrics ($20k/min) rather than syntax details in documentation.

## Design Constraints (CRITICAL)
- **SKEW**: Apply `-12deg` skew ONLY to section headers, active tab selectors, and the "W" logo.
- **PLATES**: The main detail card and architecture cards MUST remain vertical (`0deg`) to signal stability.
- **GLASS**: Use `border-t-[4px] border-l-[4px]` with `border-white/40` to simulate thick glass plates.
- **LED GLOW**: The shadow-glow and inset-blur must match the activeCard state color (Red/Blue/Green).
- **TYPOGRAPHY**: Headlines must use `font-black`, `tracking-tight`, and `leading-[0.95]`.
- **HERO IMAGE**: If no photo is provided, use the "Authorized Operator" biometric UI state (pulsing scanner aesthetic). Do not use generic person icons.

## Implementation Standard
- **Environment Variables**: Use `import.meta.env.VITE_GEMINI_API_KEY` for the AI agent (standard for Vite/Antigravity builds).
- **Context Preservation**: Reference `CONTEXT.md` for any changes to career narrative or impact data to prevent AI hallucinations.
- **Icons**: Use `lucide-react` for all icons.