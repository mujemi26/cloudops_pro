# AI Development Rules for CloudOps Pro Website

This document outlines the technical stack and development guidelines for any AI modifying this project. Adhering to these rules is mandatory to ensure code consistency, maintainability, and quality.

## 1. Core Tech Stack

This project is a modern, server-rendered web application. Your development choices must align with the following technologies:

*   **Framework**: **Next.js 14** (App Router) is the foundation. All pages, layouts, and API routes should conform to its conventions.
*   **Language**: **TypeScript** is used exclusively. All new code must be strongly typed. Avoid using `any` unless absolutely necessary and justified.
*   **Styling**: **Tailwind CSS** is the primary styling engine. All styling should be done with utility classes directly in the JSX. Do not add new CSS files.
*   **UI Components**: **shadcn/ui** is the component library. It provides unstyled, accessible components built on Radix UI. **Always** use or extend these components before creating new ones from scratch.
*   **Icons**: **Lucide React** is the designated icon library. All icons must be imported from `lucide-react`.
*   **Animations**: **Framer Motion** is used for all UI animations and transitions. Use it to create smooth, modern, and performant animations.
*   **Forms**: **React Hook Form** combined with **Zod** for schema validation is the standard for all forms.
*   **Theming**: **Next-Themes** manages the dark/light mode functionality.

## 2. Library Usage & Project Directives

Follow these specific rules when implementing new features or making changes.

### Components & UI
- **Rule:** **Always use `shadcn/ui` components.**
- **Details:** Before building any new UI element (Button, Card, Dialog, etc.), check the `components/ui` directory. Use these components as they are the single source of truth for the application's design system.
- **Example:** To add a button, import it: `import { Button } from "@/components/ui/button";`

### Styling
- **Rule:** **Style exclusively with Tailwind CSS utility classes.**
- **Details:** Do not write custom CSS in `.css` files. Use the `cn` utility from `lib/utils.ts` to conditionally apply classes. All design tokens (colors, spacing, radius) are defined in `tailwind.config.ts` and `globals.css` and should be used via their corresponding utility classes (e.g., `bg-primary`, `rounded-lg`).

### Icons
- **Rule:** **Only use icons from `lucide-react`.**
- **Details:** This ensures visual consistency across the entire application. Do not use SVGs directly or install other icon libraries.
- **Example:** `import { Cloud, Zap } from "lucide-react";`

### Animations
- **Rule:** **Use `framer-motion` for all animations.**
- **Details:** For page transitions, component reveals, or interactive micro-animations, `framer-motion` is the required tool. Use `motion` components (e.g., `motion.div`).

### State Management
- **Rule:** **Use React hooks (`useState`, `useEffect`, `useContext`) for local and shared component state.**
- **Details:** For simple state, local hooks are sufficient. For more complex, cross-component state, use React Context. Do not introduce global state management libraries like Redux or Zustand without explicit instruction.

### File Structure
- **Rule:** **Maintain the existing file and folder structure.**
- **Details:**
    - Pages go in `app/`.
    - Reusable, non-UI components go in `components/`.
    - `shadcn/ui` components are in `components/ui/`.
    - Utility functions go in `lib/`.
    - Custom hooks go in `hooks/`.

### Code Quality
- **Rule:** **All code must be responsive and accessible.**
- **Details:** Use Tailwind's responsive prefixes (e.g., `md:`, `lg:`) to ensure layouts work on all screen sizes. Use semantic HTML and ARIA attributes where appropriate.
- **Rule:** **Write clean, readable, and self-documenting code.**
- **Details:** Create small, single-responsibility components. Use descriptive variable and function names.

By following these rules, you will contribute to a high-quality, maintainable, and consistent codebase.