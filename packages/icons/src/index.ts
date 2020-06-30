import { OriginalEvaIcon, Icon, Icons, EvaIconOptions } from "./types";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const eva = require("eva-icons");

function NbEvaSvgIcon(content: OriginalEvaIcon): Icon {
  return function (options?: EvaIconOptions): string {
    return content.toSvg({
      width: "100%",
      height: "100%",
      fill: "currentColor",
      ...options,
    });
  };
}

const icons: Icons = Object.entries<OriginalEvaIcon>(eva.icons)
  .map(([name, icon]) => {
    return [name, NbEvaSvgIcon(icon)] as [keyof Icons, Icon];
  })
  .reduce((newIcons, [name, icon]: [keyof Icons, Icon]) => {
    newIcons[name] = icon;
    return newIcons;
  }, {} as Icons);

export default icons;
export { OriginalEvaIcon, Icon, Icons, EvaIconOptions };
