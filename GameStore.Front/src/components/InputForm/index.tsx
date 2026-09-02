interface InputINterface {
    type: string,
    setValue: (value: string) => void,
    titulo: string
    value: string
}

export default function InputForm({ titulo, type, setValue, value }: InputINterface) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={titulo} className="text-sm font-medium text-gray-700" > {titulo} </label>
            <input id={titulo} type={type} value={value} onChange={(e) => setValue(e.target.value)} className=" w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:bg-gray-100 " />
        </div>
    )
}