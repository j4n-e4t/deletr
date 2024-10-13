export default function Icon({ name }: { name: string }) {
  return (
    <div className="p-2 bg-gray-100 rounded">
      <img
        src={`https://github.com/j4n-e4t/deletr/blob/main/data/icons/${name}.png?raw=true`}
        alt={name}
        width={32}
        height={32}
      />
    </div>
  );
}
