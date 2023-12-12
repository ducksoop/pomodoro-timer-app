import { CSSProperties } from 'react'

const App = (): JSX.Element => {
  return (
    <div className="bg-slate-900 h-screen container grid place-items-center">
      <div className="flex items-center gap-5">
        <div className="flex flex-col justify-between gap-2">
          <button className="btn btn-sm btn-info">Set Timer</button>
          <button className="btn btn-sm btn-success">Play</button>
          <button className="btn btn-sm btn-warning">Pause</button>
          <button className="btn btn-sm btn-error">Reset</button>
        </div>
        <div className="grid grid-flow-col  text-center auto-cols-max items-center">
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-8xl">
              <span style={{ '--value': 13 } as CSSProperties}></span>
            </span>
          </div>
          <span className="font-mono text-8xl">:</span>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono text-8xl">
              <span style={{ '--value': 30 } as CSSProperties}></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
