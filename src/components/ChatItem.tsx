type ChatItemProps = {
  name: string;
  url: string;
};

export default function ChatItem({ name, url }: ChatItemProps) {
  return (
    <div className="p-2 rounded-xl cursor-pointer hover:bg-gray-200">
      <a href={url}> {name} </a>
    </div>
  );
}
