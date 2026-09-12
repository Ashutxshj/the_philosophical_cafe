import Image from "next/image";
import qr from "../../public/upi-qr.svg";

export const plans = [
  { amount: 300, note: "Simple session" },
  { amount: 1000, note: "The hour, well-supported" },
  { amount: 2000, note: "A conversation to return to" },
];

export default function PlanPanel({
  selected,
  onSelect,
  note,
}: {
  selected: number | null;
  onSelect: (amount: number) => void;
  note: string;
}) {
  return (
    <div className="plan-panel">
      <p className="plan-label">Choose your plan</p>
      <div className="plan-choices">
        {plans.map((p) => (
          <label className="plan-choice" key={p.amount}>
            <input
              type="radio"
              name="plan"
              checked={selected === p.amount}
              onChange={() => onSelect(p.amount)}
            />
            <span>
              &#8377;{p.amount}
              <small>{p.note}</small>
            </span>
          </label>
        ))}
      </div>
      <p className="plan-note">{note}</p>
      <div className="qr-frame">
        <Image src={qr} alt="UPI QR code to send the session amount" width={240} height={240} />
      </div>
      <p className="qr-caption">
        Scan to pay the amount you chose, with any UPI app.
        <br />
        <strong>Pay after your session</strong> &mdash; this QR is only a
        reminder of the decided plan.
      </p>
    </div>
  );
}
