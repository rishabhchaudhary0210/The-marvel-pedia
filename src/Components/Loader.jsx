
const Loader = () => {
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="flex justify-center items-center gap-4">
        <div className="bg-slate-300 h-6 w-6 rounded-full animate-loading1"></div>
        <div className="bg-slate-300 h-6 w-6 rounded-full animate-loading2"></div>
        <div className="bg-slate-300 h-6 w-6 rounded-full animate-loading3"></div>
      </div>
    </div>
  )
}

export default Loader