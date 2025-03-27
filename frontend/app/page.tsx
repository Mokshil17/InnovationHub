'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
}

export default function Home() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        axios.get('/api/projects') // Replace with actual API route
            .then(response => setProjects(response.data))
            .catch(error => console.error("Error fetching projects:", error));
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <header className="hero bg-base-200 text-center py-20">
                <h1 className="text-4xl font-bold">Welcome to the TISD Project Showcase</h1>
                <p className="mt-4 text-lg">Explore innovative student projects.</p>
            </header>

            <main className="flex-grow container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.length > 0 ? (
                        projects.map(project => (
                            <ProjectCard key={project.id} {...project} />
                        ))
                    ) : (
                        <p className="text-center col-span-3">No projects available.</p>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}
