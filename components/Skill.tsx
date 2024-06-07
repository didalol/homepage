export default function Skill({ skill }: { skill: string }) {
  return (
    <div className="flex items-center gap-2">
      <p>{skill}</p>
    </div>
  );
}
