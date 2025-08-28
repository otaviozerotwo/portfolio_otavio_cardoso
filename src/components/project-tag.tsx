import { Badge } from "./ui/badge";

const tagColors: Record<string, string> = {
  "React": "bg-blue-500 text-white",
  "Node.js": "bg-green-600 text-white",
  "TypeScript": "bg-blue-700 text-white",
  "JavaScript": "bg-yellow-400 text-black",
  "API": "bg-red-500 text-white",
  "HTML": "bg-orange-600 text-white",
  "CSS": "bg-blue-600 text-white",
  "Kotlin": "bg-gradient-to-r from-purple-500 to-orange-400 text-white",
  "Docker": "bg-sky-500 text-white",
  "Tailwind": "bg-teal-400 text-white",
  "Java": "bg-red-600 text-white",
  "PHP": "bg-indigo-700 text-white",
  "Python": "bg-yellow-400 text-black",
}

export function ProjectTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {tags.map((tag, i) => (
        <Badge
          key={i}
          className={tagColors[tag] || 'bg-gray-300 text-gray-800'}
        >
          {tag}
        </Badge>
      ))}
    </div>
  );
}