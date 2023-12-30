# todo - LocalStorage Task Manager

todo is a simple Todo list application that doesn't rely on a database. It's built to store all your tasks and notes right in your browser's local storage. I built this project while I was learning `git flow`, implementing essential features like Todo tasks and sticky notes, and transforming it into a Progressive Web App (PWA).

## Features:

### 1. Todo Tasks:

- **Add, Edit, and Remove Tasks**: Easily create new tasks, modify their details, and delete completed ones.
- **Subtask**: Tasks can be further divided into steps/subtask.
- **Notes**: You can add notes to your rasks.

### 2. Sticky Notes:

- **Quick Notes**: Jot down quick notes or reminders effortlessly.
- **future feature: Color Customization**: Customize your sticky notes with different colors for better categorization

### 3. PWA Capability:

- **Installable**: Transform the app into a PWA for easy access and use across devices.
- **Offline Usage**: Access and manage your tasks even when offline.
- **Responsive Design**: Seamlessly adapt to various screen sizes for a consistent user experience.

## Tech Stack:

- **Frontend**: Next13, Tailwindcss
- **Storage**: localStorage for data persistence
- **Service Worker**: Implemented for PWA functionality
- **Git Flow**: Utilized Git Flow methodology for version control and collaboration

## How to Use:

1. **Clone Repository**: Clone this repository to your local machine.
2. **Run Locally**: Run the following command in your terminal `npm run dev`.
3. **Explore Features**: Start adding tasks, creating notes, and managing your to-dos and notes hassle-free.
4. **PWA Setup**: To convert it into a PWA, follow the instructions in the PWA setup guide provided in the repository.

## Contributing:

- Fork this repository.
- Create a new branch for your features: `git checkout -b feature/YourFeature`.
- Commit your changes: `git commit -am 'Added YourFeature'`.
- Push to the branch: `git push origin feature/YourFeature`.
- Submit a pull request.
