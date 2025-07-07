import { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";

import { useToggle } from "../../hooks/useToggle";
import { categorie } from "../../utils/categorias";

import { Buttoncategory } from "../bakeryshowcase/category";
import { Slid } from "../bakeryshowcase/slider";

import { AsideLoguin } from "../layoutbakery/auth/asideloguin";
import { AsideRegister } from "../layoutbakery/auth/aside.register";

import { AsideMenu } from "../layoutbakery/asideMenu/asidemenu";
import { Fotter } from "../layoutbakery/fotter/fotter";
import { Header } from "../layoutbakery/header/header";

import { useCategoryFilter } from "../../hooks/products/useCategoryfilter";
import { ConfirmLogout } from "../layoutbakery/asideMenu/confirmlogout";
import { useAuth } from "../../hooks/auth/useAuth";

export function LayoutBakery() {
  const menu = useToggle();
  const confirmLogout = useToggle();
  const loguin = useToggle();
  const register = useToggle();
  const { session, remove } = useAuth();
  const { onClickCategory, products, isloading, activeCat } =
    useCategoryFilter();
  const location = useLocation();
  const slid =
    location.pathname === "/" &&
    (!session?.datauser.role || session.datauser.role === "CUSTOMER");
  const navigate = useNavigate();

  useEffect(() => {
    // Pega o caminho atual
    const pathParts = location.pathname.split("/");

    // Verifica se o primeiro segmento é "category"
    if (pathParts[1] === "category") {
      const categoryName = decodeURIComponent(pathParts[2]);
      if (categoryName !== activeCat) {
        onClickCategory(categoryName);
      }
    }
  }, [location.pathname]);

  const categories = categorie;

  return (
    <div className="min-h-screen flex flex-col bg-beige">
      <div className="w-full flex grow justify-center ">
        <div className="max-w-[100rem] w-full flex flex-col flex-1">
          <Header onAsideMenu={menu.open} onAsideLoguin={loguin.open} />
          <div className="h-[9.5rem] md:h-20" />

          {menu.isOpen && (
            <AsideMenu
              onAsideConfirm={confirmLogout.open}
              oncloseMenu={menu.closed}
            />
          )}
          {confirmLogout.isOpen && (
            <ConfirmLogout
              onConfirm={() => {
                remove(), confirmLogout.closed();
              }}
              onCancel={confirmLogout.closed}
            />
          )}

          {loguin.isOpen && (
            <AsideLoguin
              onclosed={loguin.closed}
              oncloseAuth={loguin.closed}
              onRegister={() => {
                register.open(), loguin.closed();
              }}
            />
          )}
          {register.isOpen && (
            <AsideRegister
              oncloseAuth={register.closed}
              onLoguin={() => {
                register.closed(), loguin.open();
              }}
            />
          )}

          <div className="flex-grow ">
            {slid && (
              <div className="flex flex-col">
                <Slid />
              </div>
            )}
            <div className="flex gap-4  my-5 md:my-10 overflow-x-auto scroll-smooth md:px-8 hide-scrollbar">
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

            <Outlet context={products} />
          </div>
        </div>
      </div>
      <Fotter />
    </div>
  );
}
