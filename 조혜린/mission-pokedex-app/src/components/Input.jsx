export default function Input() {
  return (
    <div className="flex justify-cente w-full my-8">
      <form className="m-auto relative">
        <div className="flex w-full rounded-md focus-within:ring-2 ring-offset-2 ring-yellow-500">
          <input
            className="bg-gray-600 text-white border-0 flex-1 w-96 rounded-md py-1 px-2 focus:ring-0"
            id="pokemon"
            name="pokemon"
            type="text"
            placeholder="포켓몬 이름을 입력해주세요."
          />
          <button className="bg-slate-900 text-white rounded-md py-1 px-2 absolute right-0">
            검색
          </button>
        </div>
      </form>
    </div>
  );
}
