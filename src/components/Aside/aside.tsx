import './aside.css';

interface MyAsideProps {
  tags: string[];
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
}

const MyAside: React.FC<MyAsideProps> = ({ tags, selectedTag, setSelectedTag }) => {
  const tagCounts = new Map<string, number>();

  // Count the occurrences of each tag
  tags.forEach((tag) => {
    tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
  });

  return (
    <div className="aside">
      <div className="a-body">
        <ul>
          <li
            className={selectedTag === null ? 'selected' : ''}
            onClick={() => setSelectedTag(null)}
          >
            All
          </li>
          {Array.from(tagCounts.entries()).map(([tag, count]) => (
            <li
              key={tag}
              className={tag === selectedTag ? 'selected' : ''}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
            >
              {`${tag.charAt(0).toUpperCase()+tag.slice(1)} (${count})`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyAside;
