import { ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  Collapse,
  ListItem,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const useCustomFunction = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpenTwo, setIsMenuOpenTwo] = useState(false);
  const [isMenuOpenMobile, setIsMenuOpenMobile] = useState(false);
  const [isMenuOpenTwoMobile, setIsMenuOpenTwoMobile] = useState(false);

  const { t, i18n } = useTranslation();

  // nav list menu
  const navListMenuItemsMovies = [
    {
      title: t("Popular"),
      link: "/popular-movies",
    },
    {
      title: t("Upcoming"),
      link: "/upcoming-movies",
    },
    {
      title: t("Top Rated"),
      link: "/top-rated-movies",
    },
  ];
  const navListMenuItemsSeries = [
    {
      title: t("Popular"),
      link: "/popular-series",
    },
    {
      title: t("On The Air"),
      link: "/on-the-air-series",
    },
    {
      title: t("Top Rated"),
      link: "/top-rated-series",
    },
  ];

  const renderItemsMovies = navListMenuItemsMovies.map(({ title, link }) => (
    <Link to={link} key={title} aria-label={`Go to ${title} page`}>
      <Typography
        variant="h6"
        color="blue-gray"
        className="mb-1 p-3 hover:bg-blue-500 rounded-lg hover:text-white border-b-[1px] md:border-b-[0px]"
      >
        {title}
      </Typography>
    </Link>
  ));
  const renderItemsSeries = navListMenuItemsSeries.map(({ title, link }) => (
    <Link to={link} key={title} aria-label={`Go to ${title} page`}>
      <Typography
        variant="h6"
        color="blue-gray"
        className="mb-1 p-3 hover:bg-blue-500 rounded-lg hover:text-white border-b-[1px] md:border-b-[0px]"
      >
        {title}
      </Typography>
    </Link>
  ));

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 outline-0">
      <Menu role="menu">
        <MenuItem>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="font-medium"
          >
            <Link to="/" className="flex items-center hover:text-blue-500 ">
              {t("Home")}
            </Link>
          </Typography>
        </MenuItem>
      </Menu>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen} role="menu">
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-medium">
            <MenuItem
              className={`hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full hover:text-blue-500`}
            >
              {t("Movies")}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform  ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden gap-3 overflow-visible lg:grid bg-[#0F172A] border-2 border-blue-500 rounded-2xl mt-1 z-30">
          <ul className="col-span-4 flex w-full flex-col gap-1 border-0 text-white outline-0">
            {renderItemsMovies}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMenuOpenMobile}>{renderItemsMovies}</Collapse>
      </div>
      <Menu
        allowHover
        open={isMenuOpenTwo}
        handler={setIsMenuOpenTwo}
        role="menu"
      >
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-medium">
            <MenuItem
              className={` items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full hover:text-blue-500`}
            >
              {t("Series")}
              <ChevronDownIcon
                strokeWidth={2}
                className={`hidden lg:flex h-3 w-3 transition-transform  ${
                  isMenuOpenTwo ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="gap-3 overflow-visible lg:grid bg-[#0F172A] border-2 border-blue-500 rounded-2xl mt-1 z-30">
          <ul className="col-span-4 flex w-full flex-col gap-1 border-0 text-white outline-0">
            {renderItemsSeries}
          </ul>
        </MenuList>
      </Menu>
    </ul>
  );

  const navListMobile = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 outline-0">
      <Menu>
        <Link to="/" className="flex items-center">
          <ListItem className="hover:bg-blue-500 py-4 border-b-[1px] border-b-[#2074F6] mb-2">
            <Typography
              as="li"
              variant="small"
              color="blue-gray"
              className="font-medium"
            >
              {t("Home")}
            </Typography>
          </ListItem>
        </Link>
      </Menu>
      <Menu open={isMenuOpenMobile} handler={setIsMenuOpenMobile}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-medium">
            <ListItem
              className={`items-center gap-2 font-medium text-white lg:flex lg:rounded-full hover:bg-blue-500 py-4 border-b-[#2074F6] border-b-[1px]${
                isMenuOpenMobile ? "bg-blue-500" : ""
              }`}
            >
              {t("Movies")}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform flex  ${
                  isMenuOpenMobile ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMenuOpenMobile} className="px-3">
          {renderItemsMovies}
        </Collapse>
      </div>
      <Menu open={isMenuOpenTwoMobile} handler={setIsMenuOpenTwoMobile}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-medium">
            <ListItem
              className={`items-center gap-2 font-medium text-white lg:flex lg:rounded-full hover:bg-blue-500 py-4 border-b-[#2074F6] border-b-[1px]${
                isMenuOpenTwoMobile ? "bg-blue-500" : ""
              }`}
            >
              {t("Series")}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform flex  ${
                  isMenuOpenTwoMobile ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMenuOpenTwoMobile} className="px-3">
          {renderItemsSeries}
        </Collapse>
      </div>
    </ul>
  );

  return {
    navList,
    navListMobile,
  };
};
