import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BackTesting } from "./pages/BackTesting";
import AppLayout from "./pages/Home/AppLayout";
import { MarketData } from "./pages/MarketData";
import Deletion from "./pages/MarketData/Deletion/Deletion";
import DownloadToCSV from "./pages/MarketData/DownloadToCSV/DownloadToCSV";
import PurgeFromDB from "./pages/MarketData/PurgeFromDB/PurgeFromDB";
import UploadFromBroker from "./pages/MarketData/UploadFromBroker/UploadFromBroker";
import UploadFromCSV from "./pages/MarketData/UploadFromCSV/UploadFromCSV";

import { ParameterOpt } from "./pages/ParameterOptm";
import { PipConversion } from "./pages/PipConversion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<BackTesting />} />
          <Route path="/parameters-opt" element={<ParameterOpt />} />

          <Route path="/deletion" element={<Deletion />} />
          <Route path="/download-to-csv" element={<DownloadToCSV />} />
          <Route path="/upload-from-csv" element={<UploadFromCSV />} />
          <Route
            path="/upload-from-broker-api"
            element={<UploadFromBroker />}
          />
          <Route path="/purge-from-database" element={<PurgeFromDB />} />
          <Route path="/market-data" element={<MarketData />} />
          <Route path="/pip-conversion" element={<PipConversion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
