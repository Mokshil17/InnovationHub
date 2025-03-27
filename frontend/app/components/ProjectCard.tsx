interface ProjectProps {
    title: string;
    description: string;
    image: string;
}

export default function ProjectCard({ title, description, image }: ProjectProps) {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt={title} className="w-full h-40 object-cover" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}
