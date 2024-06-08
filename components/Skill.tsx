export default function Skill({ skill }: { skill: string }) {
  return (
    <div className="flex flex-col gap-2">
      <h2>技能</h2>

      <div>
        <p>{skill}</p>
      </div>
    </div>
  );
}
