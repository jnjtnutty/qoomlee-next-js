interface NationalityInputProps {
    value: string;
    onChange: (value: string) => void;
}

export default function NationalityInput({
                                             value,
                                             onChange,
                                         }: NationalityInputProps) {
    return (
        <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
                Nationality
            </label>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value.toUpperCase())}
                maxLength={2}
                placeholder="e.g. TH"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
        </div>
    );
}