import './FreeleapsComponents.css'

// "Component Library" showcase — buttons, inputs, pills, action labels, nav,
// cards and a filter, all pure CSS/JSX (grouped responsively, not pixel-absolute).

const ic = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }

const IPlus = (<svg {...ic}><path d="M12 5v14M5 12h14" /></svg>)
const ICube = (<svg {...ic}><path d="M12 2 4 6.5v9L12 20l8-4.5v-9L12 2Z" /><path d="m4 6.5 8 4.5 8-4.5M12 11v9" /></svg>)
const ICheck = (<svg {...ic}><path d="m5 12 5 5 9-11" /></svg>)
const IReload = (<svg {...ic}><path d="M3 9a8 8 0 0 1 14-3l2 2M21 5v4h-4M21 15a8 8 0 0 1-14 3l-2-2M3 19v-4h4" /></svg>)
const INote = (<svg {...ic}><rect x="4" y="3.5" width="16" height="17" rx="2.5" /><path d="m8.5 12 2.3 2.3 4.2-4.6" /></svg>)
const IEdit = (<svg {...ic}><path d="M14 5.5 18.5 10 8 20.5H3.5V16L14 5.5Z" /></svg>)
const ICopy = (<svg {...ic}><rect x="8" y="8" width="12" height="12" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></svg>)
const IBack = (<svg {...ic}><path d="M9 7 4 12l5 5" /><path d="M4 12h11a5 5 0 0 1 0 10h-2" /></svg>)
const IClose = (<svg {...ic}><rect x="4" y="4" width="16" height="16" rx="3" /><path d="m9 9 6 6M15 9l-6 6" /></svg>)
const IDollar = (<svg {...ic}><circle cx="12" cy="12" r="9" /><path d="M14.5 9c-.4-.7-1.3-1.1-2.3-1.1-1.6 0-2.3 1-2.3 1.9 0 2.3 4.6 1.4 4.6 3.7 0 1-.9 1.9-2.3 1.9-1 0-1.9-.4-2.3-1.1M12 6.3v11.4" /></svg>)
const IMsg = (<svg {...ic}><path d="M4 5h16v11H9l-4 4V5Z" /></svg>)
const IBag = (<svg {...ic}><rect x="3" y="7" width="18" height="13" rx="2.5" /><path d="M8 7V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" /></svg>)
const ISearch = (<svg {...ic}><circle cx="11" cy="11" r="6.5" /><path d="m20 20-3.5-3.5" /></svg>)
const IUser = (<svg {...ic}><circle cx="12" cy="8" r="4" /><path d="M5 20c0-3.9 3.1-6 7-6s7 2.1 7 6" /></svg>)
const ISend = (<svg {...ic}><circle cx="12" cy="12" r="9" /><path d="m16 8-8 3 3.3 1.4L13 16l3-8Z" fill="currentColor" /></svg>)
const IEye = (<svg {...ic}><path d="M2 12s3.8-7 10-7 10 7 10 7-3.8 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="2.6" /></svg>)
const IStar = (<svg {...ic}><path d="m12 4 2.5 5.2 5.6.8-4 4 1 5.6L12 17l-5.1 2.6 1-5.6-4-4 5.6-.8L12 4Z" /></svg>)
const IArrowRound = (<svg {...ic}><path d="M20 11a8 8 0 1 0-2 6" /><path d="M20 5v6h-6" /></svg>)

const TEXT_ACTIONS_L = [
  { ic: ICheck, label: 'Accept' },
  { ic: IReload, label: 'Reopen' },
  { ic: INote, label: 'Resolved' },
  { ic: IEdit, label: 'Edit' },
  { ic: ICopy, label: 'Copy code path' },
]
const TEXT_ACTIONS_R = [
  { ic: IArrowRound, label: 'Revert' },
  { ic: IClose, label: 'Close' },
  { ic: IBack, label: 'Withdraw' },
  { ic: IDollar, label: 'Quote' },
  { ic: IMsg, label: 'Message' },
]
const NAV_ITEMS = [
  { ic: IBag, label: 'My work', active: true },
  { ic: ISearch, label: 'Jobs' },
  { ic: IUser, label: 'Workers' },
  { ic: ISend, label: 'Post a job' },
]

export default function ComponentLibrary() {
  return (
    <div className="cl">
      {/* buttons + inputs */}
      <div className="cl-col">
        <div className="cl-btn-matrix">
          <span className="cl-mini" />
          <span className="cl-mini">Fill</span>
          <span className="cl-mini">Outline</span>
          <span className="cl-mini cl-rowlabel">Default</span>
          <button className="cl-btn cl-btn--fill">Submit</button>
          <button className="cl-btn cl-btn--outline">Cancel</button>
          <span className="cl-mini cl-rowlabel">Hover</span>
          <button className="cl-btn cl-btn--fill is-hover">Submit</button>
          <button className="cl-btn cl-btn--outline is-hover">Cancel</button>
        </div>

        <div className="cl-row">
          <button className="cl-btn-next">NEXT</button>
          <button className="cl-btn-deploy"><span className="cl-i">{ICube}</span>Deploy for test</button>
        </div>

        <div className="cl-input-card">
          <div className="cl-input"><span className="cl-ph">Type group name</span></div>
          <div className="cl-input-actions">
            <button className="cl-btn cl-btn--outline cl-sm">Cancel</button>
            <button className="cl-btn cl-btn--mute cl-sm">Save</button>
          </div>
        </div>
        <div className="cl-input-card">
          <div className="cl-input"><span className="cl-val">Freeleaps project</span></div>
          <div className="cl-input-actions">
            <button className="cl-btn cl-btn--outline cl-sm">Cancel</button>
            <button className="cl-btn cl-btn--fill cl-sm">Save</button>
          </div>
        </div>
      </div>

      {/* payment pills + wide buttons + text actions */}
      <div className="cl-col">
        <span className="cl-mini">Outline</span>
        <div className="cl-pills">
          <span className="cl-pill">Make payment</span>
          <span className="cl-pill">Complete milestone</span>
          <span className="cl-pill">Confirm payment</span>
        </div>

        <button className="cl-wide"><span className="cl-i">{IPlus}</span>Add Issue</button>
        <button className="cl-wide cl-wide--soft"><span className="cl-i">{IUser}</span>Invite</button>

        <span className="cl-mini">Text + icon</span>
        <div className="cl-actions">
          <ul className="cl-action-list">
            {TEXT_ACTIONS_L.map((a) => (
              <li key={a.label}><span className="cl-i">{a.ic}</span>{a.label}</li>
            ))}
          </ul>
          <ul className="cl-action-list">
            {TEXT_ACTIONS_R.map((a) => (
              <li key={a.label}><span className="cl-i">{a.ic}</span>{a.label}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* icon+text outline buttons + nav */}
      <div className="cl-col">
        <span className="cl-mini">Button / icon + text + Outline</span>
        <div className="cl-row">
          <button className="cl-pill cl-pill--icon"><span className="cl-i">{IPlus}</span>Generate</button>
          <button className="cl-chip"><span className="cl-i">{IArrowRound}</span>Revert</button>
        </div>

        <span className="cl-mini">Button / icon + Outline</span>
        <div className="cl-row">
          <button className="cl-iconbtn">{IPlus}</button>
          <button className="cl-iconbtn cl-iconbtn--mute">{IArrowRound}</button>
        </div>

        <span className="cl-mini">Fill icon + text</span>
        <nav className="cl-nav">
          {NAV_ITEMS.map((n) => (
            <a key={n.label} className={n.active ? 'cl-nav-item is-active' : 'cl-nav-item'}>
              <span className="cl-i">{n.ic}</span>{n.label}
            </a>
          ))}
        </nav>
      </div>

      {/* cards + filter */}
      <div className="cl-col">
        <div className="cl-card">
          <div className="cl-card-mail">{ISend}<span>SimmonJ@freeleaps.com</span></div>
          <div className="cl-field">
            <span className="cl-ph">Enter security code sent to your Email</span>
            <button className="cl-field-btn">NEXT</button>
          </div>
          <p className="cl-hint">Didn’t get the email? Check junk folder or <span className="cl-link">send again</span><span className="cl-strong"> (60s)</span></p>
        </div>

        <div className="cl-card">
          <div className="cl-field cl-field--plain"><span className="cl-ph">Set your password</span></div>
          <div className="cl-field">
            <span className="cl-ph">Repeat your password</span>
            <button className="cl-field-btn">SIGN UP</button>
          </div>
          <p className="cl-hint cl-hint--warn">The password does not meet the requirements</p>
        </div>

        <div className="cl-filter">
          <div className="cl-filter-item is-on"><span className="cl-check">{ICheck}</span><span className="cl-i">{IStar}</span>All</div>
          <div className="cl-filter-item"><span className="cl-check" /><span className="cl-i">{IEye}</span>Unread</div>
          <div className="cl-filter-item"><span className="cl-check" /><span className="cl-i">{IStar}</span>Collection</div>
        </div>
      </div>
    </div>
  )
}
