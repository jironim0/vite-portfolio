import type { ProjectData } from "./projects.type";
import musicHub from '@/assets/music-hub.jpg';
import alphaTest from '@/assets/alpha-test.jpg';
import fullStackTest from '@/assets/full-stack-test.jpg';
import todoListTest from '@/assets/todo-list-test.jpg';

export const projects: ProjectData[] = [
    {
        id: 1,
        image: musicHub,
        title: 'music-hub',
        description: 'Этот проект является моим стартом в карьере fullstack разработчика. Тут я впервые попробовал написать полноценный интереный проект',
        gitUrl: 'https://github.com/jironim0/music-hub',
        devUrl: 'https://music-hub-delta.vercel.app/'
    },
    {
        id: 2,
        image: alphaTest,
        title: 'alpha-test',
        description: 'Это мое первое тестовое задание в alpha',
        gitUrl: 'https://github.com/jironim0/alpha-test',
        devUrl: 'https://alpha-test-opal.vercel.app/products'
    },
    {
        id: 3,
        image: fullStackTest,
        title: 'full-stack-test',
        description: 'Первое тестовое задание на позицию full-stack nestJS. Деплой проекта не стал делать, но при желании его может развернуть кто угодно локально',
        gitUrl: 'https://github.com/jironim0/fullstack-test',
        devUrl: 'https://github.com/jironim0/fullstack-test'
    },
    {
        id: 4,
        image: todoListTest,
        title: 'todo-list-test',
        description: 'Простое тестовое на front-end reactJS разработчика',
        gitUrl: 'https://github.com/jironim0/todo-list-test',
        devUrl: 'https://jironim0.github.io/todo-list-test'
    },
]