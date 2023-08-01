export function Form ({ handleSubmit, placeholder = 'Tu Nombre', buttonText = 'Comenzar', defaultValue = '' }) {
  return <form className="flex mt-6 w-full max-w-[500px]" onSubmit={handleSubmit}>
    <input type='text' defaultValue={defaultValue} name='name' className="py-3 px-5 w-[100px] flex-1 border-2 border-gray-200 border-r-transparent outline-none
    focus-within:border-red-600 transition-colors" placeholder={placeholder} />
    <button type='submit' className="bg-red-600 text-white font-bold px-6 rounded-r-sm">{buttonText}</button>
  </form>
}
