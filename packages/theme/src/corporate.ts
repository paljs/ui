/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { ThemeObject } from "./themeTypes";

const corporate: Partial<ThemeObject> = {
  borderRadius: "0.17rem",
  shadow: "none",

  buttonHeroGlowSize: "0 0 20px 0",

  cardBorderWidth: "1px",
  cardBorderColor: "borderBasicColor4",

  contextMenuBorderWidth: "1px",
  contextMenuBorderColor: "borderBasicColor4",

  popoverBorderWidth: "1px",
  popoverBorderColor: "borderBasicColor4",

  tabsetBorderRadius: "borderRadius",
  routeTabsetBorderRadius: "borderRadius",
  userRectangleBorderRadius: "borderRadius",
  checkboxBorderRadius: "borderRadius",

  tabsetShadow: "none",
  routeTabsetShadow: "none",
  buttonHeroShadow: "none",
  alertShadow: "none",
  accordionShadow: "none",

  selectOptionsListBorderWidth: "0.0625rem",
  selectOutlineBasicOpenBorderColor: "selectOptionsListOutlineBasicBorderColor",
  selectOutlinePrimaryOpenBorderColor:
    "selectOptionsListOutlinePrimaryBorderColor",
  selectOutlineSuccessOpenBorderColor:
    "selectOptionsListOutlineSuccessBorderColor",
  selectOutlineInfoOpenBorderColor: "selectOptionsListOutlineInfoBorderColor",
  selectOutlineWarningOpenBorderColor:
    "selectOptionsListOutlineWarningBorderColor",
  selectOutlineDangerOpenBorderColor:
    "selectOptionsListOutlineDangerBorderColor",
  selectOutlineControlOpenBorderColor:
    "selectOptionsListOutlineControlBorderColor",
};

export default corporate;
