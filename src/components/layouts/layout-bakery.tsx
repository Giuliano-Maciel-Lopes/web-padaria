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
import { useAuth } from "../../hooks/context/useAuth";
import { useAuthModal } from "../../hooks/context/asideauth";
import { useSearchParams } from "react-router";

export function LayoutBakery() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
   const category = params.get("category"); 
  const { isLoading,  isError , data:products = [] } = useCategoryFilter({isCategory:category});
  console.log(products);

  const menu = useToggle();
  const confirmLogout = useToggle();
  const { login, register } = useAuthModal();
  const { session, remove } = useAuth();

  const slid =
    location.pathname === "/" &&
    (!session?.datauser.role || session.datauser.role === "CUSTOMER");

  const navigate = useNavigate();

 
  const [refreshOrders, setRefreshOrders] = useState(false); // vou chamar la no header

  

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
                }}
              />
              {categorie.map((cat) => (
                <Buttoncategory
                  name={cat}
                  key={cat}
                  onActive={() => {
                   navigate(`/category?category=${cat}`);
                  }}
                  active={category === cat}
                />
              ))}
            </div>

            <Outlet
              context={{
                products,
                
                
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
