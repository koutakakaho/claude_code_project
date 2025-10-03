# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript Todo application built with Vite. The app provides a clean, modern interface for managing todos with local storage persistence.

## Development Setup

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Build for production: `npm run build`
4. Preview production build: `npm run preview`

## Build and Test Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (TypeScript check + Vite build)
- `npm run preview` - Preview the production build locally

## Architecture Overview

### Project Structure
- `/src/App.tsx` - Main application component with state management
- `/src/components/` - React components for Todo functionality
  - `TodoInput.tsx` - Input form for adding new todos
  - `TodoList.tsx` - Container for displaying filtered todos
  - `TodoItem.tsx` - Individual todo item with toggle/delete actions
  - `TodoFilter.tsx` - Filter buttons (All/Active/Completed)
- `/src/types.ts` - TypeScript interfaces for Todo and TodoFilter
- `/src/utils.ts` - Utility functions for ID generation and localStorage

### Key Features
- Add, delete, and toggle todos
- Filter todos by status (all, active, completed)
- Local storage persistence
- Responsive design with modern styling
- Clear completed todos functionality

### State Management
- Uses React's useState for local component state
- useEffect hooks for localStorage synchronization
- Prop drilling for passing callbacks to child components

## Important Notes

- This repository was created as a private repository
- Development environment: Windows
- Uses Vite for fast development and building
- TypeScript strict mode enabled for type safety