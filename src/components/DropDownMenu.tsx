import { Menu, Transition } from "@headlessui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Logout } from "../api/auth";
import {
  HiOutlineInboxIn,
  HiOutlineLogout,
  HiOutlineUser,
} from "react-icons/hi";

interface Props {}
const DropDownMenu: React.FC<Props> = (props) => {
  return (
    <>
      <Menu as="div" className="relative px-2 rounded-md">
        <Menu.Button as="button">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg=="
            className="rounded-md w-7 h-7"
            alt=""
          />
        </Menu.Button>
        <Transition
          enter="transform translate-x-2 transition-all duration-300"
          enterFrom="translate-y-8 opacity-0"
          enterTo="translate-y-0 opacity-100"
          entered="transform translate-x-2 opacity-100"
          leave="transform translate-x-2 transition-all duration-300"
          leaveFrom="translate-y-0 opacity-100"
          leaveTo="translate-y-8 opacity-0"
        >
          <Menu.Items
            className="absolute z-10 flex flex-col p-3 space-y-2 text-base tracking-wider duration-300 bg-white border rounded-md outline-none w-36 h-44 right-2 "
            as="div"
          >
            <Menu.Item
              as="div"
              className="flex items-center w-full px-3 py-2 border-b border-gray-200"
            >
              {({ active }) => (
                <>
                  <HiOutlineUser
                    className={`w-6 h-6 pr-2 ${
                      active ? "text-indigo-600" : ""
                    }`}
                  />
                  <Link
                    to="/profile"
                    className={`${active ? "text-indigo-600" : ""}`}
                  >
                    Profile
                  </Link>
                </>
              )}
            </Menu.Item>
            <Menu.Item
              as="button"
              className="flex items-center w-full px-3 py-2 border-b border-gray-200"
            >
              {({ active }) => (
                <>
                  <HiOutlineInboxIn
                    className={`w-6 h-6 pr-2 ${
                      active ? "text-indigo-600" : ""
                    }`}
                  />
                  <span className={`${active ? "text-indigo-600" : ""}`}>
                    Inbox
                  </span>
                </>
              )}
            </Menu.Item>
            <Menu.Item
              as="div"
              className="flex items-center w-full px-3 py-2 "
              onClick={() => {
                Logout();
                window.location.href = "/login";
              }}
            >
              {({ active }) => (
                <>
                  <HiOutlineLogout
                    className={`w-6 h-6 pr-2 ${
                      active ? "text-indigo-600" : ""
                    }`}
                  />
                  <Link
                    to="/login"
                    className={`${active ? "text-indigo-600" : ""}`}
                  >
                    LogOut
                  </Link>
                </>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

DropDownMenu.defaultProps = {};
export default DropDownMenu;
