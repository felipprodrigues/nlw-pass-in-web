import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
  Search,
} from 'lucide-react'

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>

        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
          <Search className="size-4 text-emerald-300" />
          <input
            className="bg-transparent flex-1 outline-none border-0 p-0 text-sm"
            type="text"
            placeholder="Buscar participante..."
          />
        </div>
      </div>
      <div className="border border-white/10 rounder-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10 ">
              <th
                className="py-3 px-4 text-sm font-semibold text-left"
                style={{ width: 48 }}
              >
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border border-white/10"
                />
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Código
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Participante
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data de inscrição
              </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">
                Data do check-in
              </th>
              <th
                className="py-3 px-4 text-sm font-semibold text-left"
                style={{ width: 64 }}
              ></th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <tr className="border-b border-white/10" key={index}>
                  <td className="py-3 px-4 text-sm text-zinc-300">
                    <input
                      type="checkbox"
                      className="size-4 bg-black/20 rounded border border-white/10 accent"
                    />
                  </td>
                  <td className="py-3 px-4 text-sm ">123</td>
                  <td className="py-3 px-4 text-sm ">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">John Doe</span>
                      <span>jdoe@test.com</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm ">7 dias atrás</td>
                  <td className="py-3 px-4 text-sm ">3 dias atrás</td>
                  <td className="py-3 px-4 text-sm ">
                    <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                      <MoreHorizontal className="size-4" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={3} className="py-3 px-4 text-sm text-zinc-300">
                Mostrando 10 de 228 items
              </td>

              <td
                colSpan={3}
                className="py-3 px-4 text-sm text-zinc-300 text-right"
              >
                <div className="inline-flex items-center gap-8">
                  <span>Página 1 de 23</span>
                  <div className="flex gap-1.5">
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronsLeft className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronLeft className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronsRight className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                      <ChevronRight className="size-4" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}
