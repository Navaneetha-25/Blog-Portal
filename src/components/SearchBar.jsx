export default function SearchBar({ value, onChange }) {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Search..."
            className="border p-2 w-full rounded mb-4 text-black"
        />
    );
}
