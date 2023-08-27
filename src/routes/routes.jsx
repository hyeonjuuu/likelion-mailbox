import Layout from "@/layout/Layout";
import Home from "@/pages/Home";
import SelectEnvelope from "@/pages/SelectEnvelope";
import SelectLion from "@/pages/SelectLion";
import SelectPage from "@/pages/SelectPage";
import SelectStamp from "@/pages/SelectStamp";
import ShowCardList from "@/pages/ShowCardList";
import SiginUp from "@/pages/SiginUp";
import SignIn from "@/pages/SignIn";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import WriteCard from "../pages/WriteCard";
import ViewCard from "@/pages/ViewCard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="writecard" element={<WriteCard />} />
      <Route path="viewcard" element={<ViewCard />} />
      <Route path="signup" element={<SiginUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="selectStamp" element={<SelectStamp />} />
      <Route path="selectLion" element={<SelectLion />} />
      <Route path="selectpage" element={<SelectPage />} />
      <Route path="showcardlist" element={<ShowCardList />} />
      <Route path="selectenvelope" element={<SelectEnvelope />} />
    </Route>,
  ),
);

export default router;
