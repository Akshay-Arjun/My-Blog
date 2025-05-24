# Akshay's Cyber Terminal Portfolio

A retro-inspired, interactive terminal portfolio built with React, Vite, and Tailwind CSS. Users can explore your profile, projects, blogs, and more through a command-line interface, complete with boot animations, command routing, autocomplete, and a clickable help menu.

## Features

- **Animated Boot Screen**: Simulates a system boot sequence with ASCII art and typewriter effects.
- **Terminal UI**: All navigation and content are accessed via a terminal-like interface.
- **Command Routing**: Type commands like `aboutme`, `blogs`, `projects`, `thoughts`, or `help` to view different sections.
- **Help Menu**: Type `help` or click the help link to see all available commands. Each command (except destructive ones) is clickable.
- **Autocomplete**: Start typing a command and press `Tab` or the right arrow key to autocomplete (e.g., `a` + `Tab` → `aboutme`).
- **Clear/Destroy**: Use `clear` to reset the terminal, or `destroy` to simulate a session wipe and restart.
- **Responsive Design**: Works on desktop and mobile.

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/akshay-arjun/My-Blog
   cd My-Blog
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Open in your browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Usage

- On load, watch the animated boot sequence.
- Type commands in the terminal prompt (e.g., `aboutme`, `blogs`, `projects`, `thoughts`, `help`).
- Use `Tab` or the right arrow key for command autocomplete.
- Click commands in the help menu for quick navigation.
- Use `clear` to reset the terminal, or `destroy` to restart the session.

## Customization

- Edit your personal info, skills, and experience in `src/components/AboutMe.tsx`.
- Add or modify projects in `src/components/Projects.tsx`.
- Add blog posts and logic in `src/components/Blogs.tsx` and related files.
- Tweak the boot sequence in `src/components/BootScreen.tsx`.

## Tech

- Built with [React](https://reactjs.org/), [Vite](https://vitejs.dev/), and [Tailwind CSS](https://tailwindcss.com/).
- Inspired by classic terminal UIs and hacker aesthetics.

---

Feel free to fork, customize, and use for your own portfolio! 