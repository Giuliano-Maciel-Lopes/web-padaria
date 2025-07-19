import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { useToggle } from "../../hooks/useToggle";
import { categorie } from "../../utils/categorias";

import { Buttoncategory } from "../bakeryshowcase/category";
import { Slid } from "../bakeryshowcase/slider";

import { AsideMenu } from "../layoutbakery/asideMenu/asidemenu";
import { Fotter } from "../layoutbakery/fotter/fotter";
import { Header } from "../layoutbakery/header/header";

import { useCategoryFilter } from "../../hooks/products/useCategoryfilter";
import { ConfirmLogout } from "../layoutbakery/asideMenu/confirmlogout";
import { useAuth } from "../../hooks/auth/useAuth";
import { useAuthModal } from "../../hooks/context/asideauth";

export function LayoutBakery() {
  const menu = useToggle();
  const confirmLogout = useToggle();
  const { login, register } = useAuthModal();
  const { session, remove } = useAuth();
  const { onClickCategory, products, isloading, activeCat } =
    useCategoryFilter();
  const location = useLocation();
  const slid =
    location.pathname === "/" &&
    (!session?.datauser.role || session.datauser.role === "CUSTOMER");
  const navigate = useNavigate();

  const [refreshProducts, setRefreshProducts] = useState(false);
  const [refreshOrders, setRefreshOrders] = useState(false); // vou chamar la no header

  useEffect(() => {
    const pathParts = location.pathname.split("/");

    if (pathParts[1] === "category") {
      const categoryName = decodeURIComponent(pathParts[2]);

      // Chama sempre que mudar refreshProducts, independente do activeCat
      onClickCategory(categoryName);
    }
  }, [location.pathname, refreshProducts]);

  const categories = categorie;

  return (
    <div className="min-h-screen flex flex-col bg-beige">
      <div className="w-full flex grow justify-center ">
        <div className="max-w-[100rem] w-full flex flex-col flex-1">
          <Header
            refreshOrders={refreshOrders}
            onAsideMenu={menu.open}
            onAsideLoguin={login.open}
          />
          <div className="h-[9.5rem] md:h-20" />

          {menu.isOpen && (
            <AsideMenu
              onAsideConfirm={confirmLogout.open}
              oncloseMenu={menu.closed}
            />
          )}
          {confirmLogout.isOpen && (
            <ConfirmLogout
              mensagem="Tem certeza que deseja sair?"
              onConfirm={() => {
                remove(), confirmLogout.closed();
              }}
              onCancel={confirmLogout.closed}
            />
          )}

          <div className="flex-grow ">
            {slid && (
              <div className="flex flex-col">
                <Slid />
              </div>
            )}
            <div className="flex gap-4  my-5 md:my-10 overflow-x-auto scroll-smooth md:px-8 hide-scrollbar">
              <Buttoncategory
                name="inicio"
                active={location.pathname === "/"}
                onActive={() => {
                  navigate("/");
                  onClickCategory(""); // reset
                }}
              />
              {categories.map((cat) => (
                <Buttoncategory
                  isloading={isloading}
                  name={cat}
                  key={cat}
                  onActive={() => {
                    navigate(`/category/${cat}`);
                  }}
                  active={activeCat === cat}
                />
              ))}
            </div>

            <Outlet
              context={{
                products,
                refreshProducts,
                setRefreshProducts,
                setRefreshOrders,
              }}
            />
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
}
