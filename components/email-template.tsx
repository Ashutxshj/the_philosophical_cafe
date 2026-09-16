type Props = {
  name: string;
  type: string;
  plan: string;
  date1: string;
  time: string;
};

export const cta = "https://the-philosophical-cafe.vercel.app";

export function ConfirmationEmail({ name, type, plan, date1, time }: Props) {
  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#fbf9f4", padding: "40px 24px" }}>
      <div style={{ maxWidth: 520, margin: "0 auto", background: "#ffffff", border: "1px solid #e8e0cf", borderRadius: 24, padding: "40px 36px" }}>
        <p style={{ margin: 0, fontSize: 12, letterSpacing: 2, color: "#a24e33", fontWeight: 700, textTransform: "uppercase" }}>
          The Philosophical Cafe
        </p>
        <h1 style={{ fontSize: 26, color: "#2e2a24", margin: "18px 0 0" }}>
          Your table is being set, {name}.
        </h1>
        <p style={{ fontSize: 15, lineHeight: 1.8, color: "#6f6659", marginTop: 16 }}>
          Thank you for reaching out. Chetna has received your
          {type === "group" ? " group " : " "}request and will write back within 24 hours to confirm the time. Until then, breathe easy.
        </p>
        <div style={{ background: "#f4efe5", borderRadius: 16, padding: "20px 24px", marginTop: 24, fontSize: 14, color: "#2e2a24", lineHeight: 2 }}>
          <strong>Suggested contribution:</strong> ₹{plan}<br />
          <strong>Preferred date:</strong> {date1 || "-"}<br />
          <strong>Preferred time:</strong> {time || "-"}
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.8, color: "#6f6659", marginTop: 24 }}>
          Anything urgent in the meantime? Just reply to this email or write to{" "}
          <a href="mailto:chetnag480@gmail.com" style={{ color: "#a24e33" }}>chetnag480@gmail.com</a>.
        </p>
        <p style={{ fontSize: 15, color: "#a24e33", fontStyle: "italic", marginTop: 32 }}>
          - A safe space to unlearn the noise.
        </p>
      </div>
    </div>
  );
}

export function OwnerEmail(props: Props & { email: string; phone: string; location: string; age: string; role: string; roleOther: string; gtype: string; gsize: string; problem: string; date2: string; date3: string }) {
  const row = (k: string, v: string) => (
    <tr key={k}>
      <td style={{ padding: "6px 0", color: "#6f6659", fontSize: 13, width: 140 }}>{k}</td>
      <td style={{ padding: "6px 0", color: "#2e2a24", fontSize: 13 }}>{v || "-"}</td>
    </tr>
  );
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#2e2a24" }}>New {props.type} booking request</h2>
      <table style={{ background: "#fbf9f4", border: "1px solid #e8e0cf", borderRadius: 12, padding: 20 }}>
        <tbody>
          {row("Name", props.name)}
          {row("Type", props.type)}
          {row("Email", props.email)}
          {row("Phone", props.phone)}
          {row("Location", props.location)}
          {props.type === "individual" ? row("Age", props.age) : row("Group type", props.gtype)}
          {props.type === "individual" ? row("Profile", props.roleOther ? `Other - ${props.roleOther}` : props.role) : row("Group size", props.gsize)}
          {row("Plan", `₹${props.plan}`)}
          {row("Date 1", props.date1)}
          {row("Date 2", props.date2)}
          {row("Date 3", props.date3)}
          {row("Time", props.time)}
        </tbody>
      </table>
      <p style={{ color: "#2e2a24", fontSize: 13, marginTop: 18 }}>
        <strong>Sitting on their mind:</strong><br />
        {props.problem}
      </p>
    </div>
  );
}
