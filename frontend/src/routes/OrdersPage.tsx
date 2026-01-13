import { Layout } from "../components/layout/Layout";
import { useLanguage } from "../context/LanguageContext";
import { mockOrders } from "../mock/orders";

const OrdersPage = () => {
  const { t } = useLanguage();
  const selectedCategory = "Niewysłane";
  return (
    <Layout>
      <h2>Zamówienia</h2>

      <p style={{ marginTop: 8 }}>
        Wybrana kategoria: <strong>{selectedCategory}</strong>
      </p>
      {/* MOCK TABLE */}
      <table style={{ marginTop: 20, width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "8px 0" }}>ID zamówienia</th>
            <th style={{ textAlign: "left", padding: "8px 0" }}>Kupujący</th>
            <th style={{ textAlign: "left", padding: "8px 0" }}>Data</th>
            <th style={{ textAlign: "left", padding: "8px 0" }}>Kwota</th>
          </tr>
        </thead>

        <tbody>
          {mockOrders.map((order) => (
            <tr key={order.id}>
              <td style={{ padding: "6px 0" }}>{order.id}</td>
              <td>{order.buyer}</td>
              <td>{order.date}</td>
              <td>{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default OrdersPage;