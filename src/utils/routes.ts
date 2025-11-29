import { createBrowserRouter } from "react-router";
import { WireframeHome } from "../components/WireframeHome";
import { PlayerLogin } from "../components/player/PlayerLogin";
import { PlayerKYC } from "../components/player/PlayerKYC";
import { PlayerDashboard } from "../components/player/PlayerDashboard";
import { PlayerTables } from "../components/player/PlayerTables";
import { PlayerWallet } from "../components/player/PlayerWallet";
import { PlayerFood } from "../components/player/PlayerFood";
import { HouseCheckin } from "../components/house/HouseCheckin";
import { HouseTables } from "../components/house/HouseTables";
import { HouseChips } from "../components/house/HouseChips";
import { HouseFoodOrders } from "../components/house/HouseFoodOrders";
import { HouseKYC } from "../components/house/HouseKYC";
import { AdminDashboard } from "../components/admin/AdminDashboard";
import { AdminPlayers } from "../components/admin/AdminPlayers";
import { AdminHouses } from "../components/admin/AdminHouses";
import { AdminLedger } from "../components/admin/AdminLedger";
import { AdminReports } from "../components/admin/AdminReports";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: WireframeHome,
  },
  {
    path: "/player/login",
    Component: PlayerLogin,
  },
  {
    path: "/player/kyc",
    Component: PlayerKYC,
  },
  {
    path: "/player/dashboard",
    Component: PlayerDashboard,
  },
  {
    path: "/player/tables",
    Component: PlayerTables,
  },
  {
    path: "/player/wallet",
    Component: PlayerWallet,
  },
  {
    path: "/player/food",
    Component: PlayerFood,
  },
  {
    path: "/house/checkin",
    Component: HouseCheckin,
  },
  {
    path: "/house/tables",
    Component: HouseTables,
  },
  {
    path: "/house/chips",
    Component: HouseChips,
  },
  {
    path: "/house/food",
    Component: HouseFoodOrders,
  },
  {
    path: "/house/kyc",
    Component: HouseKYC,
  },
  {
    path: "/admin/dashboard",
    Component: AdminDashboard,
  },
  {
    path: "/admin/players",
    Component: AdminPlayers,
  },
  {
    path: "/admin/houses",
    Component: AdminHouses,
  },
  {
    path: "/admin/ledger",
    Component: AdminLedger,
  },
  {
    path: "/admin/reports",
    Component: AdminReports,
  },
]);
