import Link from "next/link";
import { Badge } from "../components/ui/badge";
import { Trophy, Star } from "lucide-react";

type Project = {
  slug: string;
  date: string;
  title: string;
  description: string;
  skills: string[];
  winner: boolean;
  winnerTitle: string;
};

type Props = {
  project: Project;
  views: number;
};

export const Article: React.FC<Props> = ({ project }) => {
  return (
    <Link href={`/projects/${project.slug}`}>
      <article className="p-4 md:p-8">
        <div className="flex justify-between gap-2 items-center">
          <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
            {project.date ? (
              <time dateTime={new Date(project.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                  new Date(project.date)
                )}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </span>

          <span className=" text-xs  flex items-center gap-1">
            {/* if project title is CredX instead of trophy show star */}
            {project.winner && (
              <div>
                <Badge className="bg-yellow-200">
                  {project.title === "CredX" ? (
                    <Star className="pr-2" />
                  ) : (
                    <Trophy className="pr-2" />
                  )}
                  {project.winnerTitle}
                </Badge>
              </div>
            )}
          </span>
        </div>
        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
          {project.title}
        </h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.skills &&
            project.skills.map((skill, index) => (
              <Badge className="bg-gray-100" key={index}>
                {skill}
              </Badge>
            ))}
        </div>
        <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {project.description}
        </p>
      </article>
    </Link>
  );
};
