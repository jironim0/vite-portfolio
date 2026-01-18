import type { ProjectData } from "./projects.type";
import musicHub from '@/assets/music-hub.jpg';
import alphaTest from '@/assets/alpha-test.jpg';
import fullStackTest from '@/assets/full-stack-test.jpg';
import portfolio from '@/assets/portfolio.jpg';

export const projects: ProjectData[] = [
    {
        id: 1,
        image: musicHub,
        title: 'Music Hub | Full-Stack стриминг',
        description: `Next.js 15  TypeScript  PostgreSQL NextAuth\n\nЗадача: Создать и запустить рабочее MVP для прослушивания музыки.\nРешение:\n Реализовал полный цикл: авторизация, загрузка треков, кастомный плеер.\n Интегрировал фронтенд (Next.js) с бэкендом (Prisma/PostgreSQL).\n Успешно провёл деплой и отладку legacy-кода проекта.`,
        gitUrl: 'https://github.com/jironim0/music-hub',
        devUrl: 'https://music-hub-delta.vercel.app/'
    },
    {
        id: 2,
        image: alphaTest,
        title: 'E-commerce Dashboard | Тестовое задание',
        description: 'React  TypeScript  Redux Toolkit  Axios\n\nЗадача: По ТЗ реализовать панель управления товарами с фильтрацией и избранным.\nРешение:\n Точно реализовал интерфейс с мгновенным поиском, фильтрами и детальными карточками.\n Настроил глобальное состояние приложения (Redux Toolkit).\n Результат: Тестовое задание успешно принято компанией.',
        gitUrl: 'https://github.com/jironim0/alpha-test',
        devUrl: 'https://alpha-test-opal.vercel.app/products'
    },
    {
        id: 3,
        image: fullStackTest,
        title: 'Social Network Dashboard | Full-Stack админка',
        description: 'NestJS  PostgreSQL  React  TypeScript\n\nЗадача: Самостоятельно разработать full-stack приложение для управления пользователями.\nРешение:\n Создал REST API на NestJS с валидацией и подключением к PostgreSQL.\n Реализовал фронтенд с таблицей (пагинация, поиск) и сложными формами (7+ полей).\n Решение демонстрирует понимание полного цикла разработки и интеграции.',
        gitUrl: 'https://github.com/jironim0/fullstack-test',
        devUrl: 'https://github.com/jironim0/fullstack-test'
    },
    {
        id: 4,
        image: portfolio,
        title: 'Portfolio | Презентационная SPA',
        description: 'React  JavaScript  CSS\n\nЗадача: Создать современное, адаптивное портфолио для демонстрации проектов.\nРешение:\n Разработал SPA с кастомным слайдером, навигацией на якорях и поддержкой swipe-жестов.\n Реализовал pixel-perfect вёрстку под Desktop (1440px) и Mobile (375px).\n Продемонстрировал внимание к деталям и пользовательскому опыту.',
        gitUrl: 'https://github.com/jironim0/vite-portfolio',
        devUrl: 'https://jironim0.github.io/vite-portfolio'
    },
]