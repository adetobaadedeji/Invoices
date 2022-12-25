import { Layout } from "components";
import ModeTheme from "modeTheme";
import Invoices from "pages/Invoices";
import InvoiceView from "pages/InvoiceView";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <section className="relative w-full min-h-screen font-spartan bg-bgPry">
      <ModeTheme />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Invoices />} />
          <Route path="/invoice/:id" element={<InvoiceView />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </section>
  );
}

export default App;
