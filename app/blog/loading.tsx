export default function Loading() {
  return (
    <div className="container-custom py-20">
      <div className="flex flex-col items-center justify-center">
        <div className="w-16 h-16 border-4 border-verde-terra/20 border-t-verde-terra rounded-full animate-spin"></div>
        <p className="mt-4 text-marrom/70">Carregando artigos...</p>
      </div>
    </div>
  )
}
