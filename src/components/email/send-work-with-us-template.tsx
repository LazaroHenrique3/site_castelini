import { IWorkWithUsFormType } from "@/types/IWorkWithUsFormDataType";

export const EmailWorkWithUsTemplate: React.FC<Readonly<Omit<IWorkWithUsFormType, 'store' | 'curriculum'>>> = ({
  name,
  email,
  phone,
  city,
  state,
  message,
}) => (
  <div
    style={{
      background: "linear-gradient(135deg, #f8fafc, #e2e8f0)",
      padding: "32px",
      borderRadius: "16px",
      maxWidth: "720px",
      margin: "0 auto",
      display: "flex",
      boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
    }}
  >
    {/* Sidebar */}
    <div
      style={{
        backgroundColor: "#D73D53",
        width: "16px",
        borderRadius: "16px 0 0 16px",
      }}
    ></div>

    {/* Main Content */}
    <div style={{ padding: "24px", flex: 1 }}>
      <header style={{ textAlign: "center", marginBottom: "24px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#1E293B", margin: "0" }}>
          Novo Candidato Recebido
        </h1>
        <p style={{ fontSize: "20px", color: "#D73D53", marginTop: "8px" }}>
          Você recebeu uma candidatura de <span style={{ fontWeight: "bold" }}>{name}</span>!
        </p>
      </header>

      <section>
        <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#1E293B", marginBottom: "16px" }}>
          Detalhes da Candidatura
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <p style={{ color: "#475569" }}>
            <strong>Email:</strong> {email}
          </p>
          <p style={{ color: "#475569" }}>
            <strong>Telefone:</strong> {phone}
          </p>
          <p style={{ color: "#475569" }}>
            <strong>Cidade:</strong> {city}
          </p>
          <p style={{ color: "#475569" }}>
            <strong>Estado:</strong> {state}
          </p>
        </div>

        <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#1E293B", marginBottom: "8px" }}>
          Mensagem
        </h3>
        <p style={{ color: "#475569", lineHeight: "1.6", padding: "16px", background: "#f1f5f9", borderRadius: "12px" }}>
          {message}
        </p>

        {/* Currículo Anexado */}
        <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#1E293B", marginTop: "24px", marginBottom: "8px" }}>
          Currículo Anexado
        </h3>
        <p style={{ color: "#475569" }}>
          O candidato anexou um currículo para a sua análise.
        </p>
      </section>
    </div>
  </div>
);
