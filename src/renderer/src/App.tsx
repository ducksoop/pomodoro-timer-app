import { ChangeEvent, KeyboardEvent, CSSProperties, useRef, useState } from 'react'

interface TimerForm {
  minutes: string
  seconds: string
}

const App = (): JSX.Element => {
  const modalTriggerRef = useRef<HTMLInputElement>(null)
  const [timerForm, setTimerForm] = useState<TimerForm>({
    minutes: '',
    seconds: ''
  })

  const toggleTimerModal = (): void => {
    modalTriggerRef.current?.click()
  }

  const toggleModal = (): void => {
    modalTriggerRef.current?.click()
  }

  const handleChangeForm = (e: ChangeEvent<HTMLInputElement>): void => {
    setTimerForm((_timerForm) => ({
      ..._timerForm,
      [e.target.name]: e.target.value
    }))
  }

  const handleSaveTimer = (): void => {
    console.log(timerForm)
    toggleModal()
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (['e', '-', ',', '.'].includes(e.key)) {
      e.preventDefault()
    }
  }

  return (
    <div className="bg-slate-900 h-screen container grid place-items-center">
      <input type="checkbox" ref={modalTriggerRef} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box flex w-fit max-h-fit gap-2">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text-alt">Minutes</span>
            </div>
            <input
              min={0}
              type="number"
              placeholder="0"
              className="input input-sm input-bordered w-28"
              name="minutes"
              value={timerForm.minutes}
              onChange={handleChangeForm}
              onKeyDown={onKeyDown}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text-alt">Seconds</span>
            </div>
            <input
              min={0}
              type="number"
              placeholder="0"
              className="input input-sm input-bordered w-28"
              name="seconds"
              value={timerForm.seconds}
              onChange={handleChangeForm}
              onKeyDown={onKeyDown}
            />
          </label>
          <div>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text-alt">&nbsp;</span>
              </div>
            </label>
            <button className="btn btn-sm btn-success" onClick={handleSaveTimer}>
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex flex-col justify-between gap-2">
          <button className="btn btn-sm btn-info" onClick={toggleTimerModal}>
            Set Timer
          </button>
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
